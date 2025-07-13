<template>
  <div class="p-4 max-w-2xl mx-auto">
    <h2 class="text-xl font-bold mb-4 text-center">Match the Flags — Balkans Edition</h2>

    <div class="space-y-4">
      <div v-for="(item, index) in flagAssignments" :key="item.code"
        class="flex items-center gap-4 flex-col sm:flex-row">
        <img :src="`https://flagcdn.com/w160/${item.code.toLowerCase()}.png`" :alt="item.code"
          class="w-28 rounded shadow" />

        <div class="flex items-center gap-2 w-full sm:w-64">
          <select v-model="selections[index]" @change="updateAvailableOptions"
            class="w-full p-2 border border-gray-300 rounded">
            <option :value="null" disabled selected>— Select Country —</option>
            <option v-for="country in availableOptions(index)" :key="country.code" :value="country.code">
              {{ country.name }}
            </option>
          </select>

          <!-- ❌ Clear Button -->
          <button v-if="selections[index] !== null" @click="clearSelection(index)"
            class="text-red-500 hover:text-red-700 text-xl" title="Clear selection">
            ❌
          </button>
        </div>
      </div>
    </div>



    <div class="mt-6 text-center">
      <button @click="checkAnswers" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Check Answers
      </button>
    </div>

    <div v-if="showResult" class="mt-6 text-center font-medium">
      <p v-if="allCorrect" class="text-green-600">🎉 All answers are correct!</p>
      <p v-else class="text-red-600">Some answers are incorrect. Try again!</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'

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

const updateAvailableOptions = () => {
  showResult.value = false
}

const checkAnswers = () => {
  showResult.value = true
}

const clearSelection = (index) => {
  selections.value[index] = null
  showResult.value = false
}
</script>

<style scoped>
select:invalid {
  color: gray;
}
</style>
