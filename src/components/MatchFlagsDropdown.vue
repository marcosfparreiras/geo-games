<template>
  <GamePageWrapper>
    <h2 class="text-xl font-bold mb-4 text-center">Match the Flags — Balkans Edition</h2>

    <div class="space-y-4">
      <!-- <div v-for="(item, index) in flagAssignments" :key="item.code"
        class="flex justify-start items-center gap-6 flex-col sm:flex-row p-4 rounded-xl border-1 border-gray-300 bg-gray-50"> -->

      <div v-for="(item, index) in flagAssignments" :key="item.code"
        :class="['flex justify-start items-center gap-6 flex-col sm:flex-row p-4 rounded-xl border-1', blockStyle[index]]"
        @change="updateAvailableOptions">


        <img :src="`https://flagcdn.com/w160/${item.code.toLowerCase()}.png`" :alt="item.code"
          class="w-28 rounded shadow" />

        <div class="flex items-center gap-2 flex-1">
          <template v-if="!showResult">
            <!-- SELECT UI (before checking answers) -->
            <select v-model="selections[index]" @change="updateAvailableOptions"
              class="flex-1 p-2 border border-gray-300 rounded">
              <option :value="null" disabled selected>— Select Country —</option>
              <option v-for="country in availableOptions(index)" :key="country.code" :value="country.code">
                {{ country.name }}
              </option>
            </select>

            <button v-if="selections[index] !== null" @click="clearSelection(index)"
              class="text-red-500 hover:text-red-700 text-xl" title="Clear selection">
              ❌
            </button>
          </template>

          <template v-else>
            <!-- FEEDBACK UI (after checking answers) -->
            <div class="flex flex-col flex-1 p-2 rounded border" :class="{
              'bg-green-100 border-green-400 text-green-800': selections[index] === item.code,
              'bg-red-100 border-red-400 text-red-800': selections[index] !== item.code
            }">
              <div><strong>You picked:</strong> {{ getCountryName(selections[index]) || '—' }}</div>
              <div><strong>Correct answer:</strong> {{ item.name }}</div>
            </div>
          </template>
        </div>


      </div>
    </div>

    <div class="mt-6 text-center">
      <!-- <button @click="checkAnswers" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Check Answers
      </button> -->

      <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4" @click="showResultModal">
        Check Answers
      </button>
    </div>

    <div v-if="showResult" class="mt-6 text-center font-medium">
      <p v-if="allCorrect" class="text-green-600">🎉 All answers are correct!</p>
      <p v-else class="text-red-600">Some answers are incorrect. Try again!</p>
    </div>

    <!-- Modal Overlay -->
    <div v-if="modalVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="closeModal">
      <!-- Modal Content -->
      <div class="bg-white rounded-xl p-6 shadow-lg w-11/12 max-w-sm text-center relative">
        <button class="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl" @click="closeModal"
          title="Close">
          ❌
        </button>

        <h2 class="text-xl font-semibold mb-2">Your Score</h2>
        <p class="text-2xl font-bold text-green-600">{{ correctCount }} / {{ total }}</p>
        <p class="text-gray-700 mt-1">{{ percentage }}% correct</p>

        <button @click="closeModal" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Close
        </button>
      </div>
    </div>
  </GamePageWrapper>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import GamePageWrapper from './GamePageWrapper.vue'

// Initial dataset: Balkans
const countries = [
  { name: "Albania", code: "AL" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Bulgaria", code: "BG" },
  { name: "Croatia", code: "HR" },
  { name: "Greece", code: "GR" },
  { name: "Montenegro", code: "ME" },
  { name: "North Macedonia", code: "MK" },
  { name: "Romania", code: "RO" },
  { name: "Serbia", code: "RS" },
  { name: "Slovenia", code: "SI" },
]

// Shuffle array
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5)
}

// Assign shuffled countries to flag list
const flagAssignments = shuffle(countries)

// Track user selections
const selections = ref(Array(flagAssignments.length).fill(null))


// Adjust style for blocks based on state (initial, right answer, wrong answer)
const initialBlockStyle = "border-gray-300 bg-gray-50"
const rightAnswerBlockStyle = 'bg-green-100 border-green-400'
const wrongAnswerBlockStyle = 'bg-red-100 border-red-400'
const blockStyle = ref(Array(flagAssignments.length).fill(initialBlockStyle))
// blockStyle.value[1] = wrongAnswerBlockStyle

// Show result
const showResult = ref(false)
const allCorrect = computed(() =>
  selections.value.every((selected, i) => selected === flagAssignments[i].code)
)

// Returns country options not yet selected (except the one already selected at this index)
const availableOptions = (index) => {
  const selectedSet = new Set(selections.value.filter((val, i) => i !== index && val !== null))
  return countries.filter((c) => !selectedSet.has(c.code) || selections.value[index] === c.code)
}

const updateBlockStyles = () => {
  for (var i = 0; i < flagAssignments.length; i++) {
    if (flagAssignments[i].code == selections.value[i]) {
      blockStyle[i] = rightAnswerBlockStyle
    }
    else {
      blockStyle[i] = wrongAnswerBlockStyle
    }
  }
}

const updateAvailableOptions = () => {
  showResult.value = false
  console.log('-- Flags ')
  console.log(flagAssignments)

  console.log('-- Selections ')
  console.log(selections.value)



  updateBlockStyles()
  console.log(blockStyle)
}

const checkAnswers = () => {
  showResult.value = true
}

const clearSelection = (index) => {
  selections.value[index] = null
  showResult.value = false
}

const modalVisible = ref(false)

const correctCount = computed(() => {
  return flagAssignments.filter((item, index) => item.code === selections.value[index]).length
})

const total = computed(() => flagAssignments.length)

const percentage = computed(() => {
  return Math.round((correctCount.value / total.value) * 100)
})

const showResultModal = () => {
  showResult.value = true
  modalVisible.value = true
}

const closeModal = () => {
  modalVisible.value = false
}

const getCountryName = (code) => {
  const match = countries.find((c) => c.code === code)
  return match ? match.name : null
}




</script>

<style scoped>
select:invalid {
  color: gray;
}
</style>
