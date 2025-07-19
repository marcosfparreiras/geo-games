<template>
  <GamePageWrapper>
    <h1 @click="goToGameOverviewPage"
      class="text-2xl font-bold text-center inline-block mx-auto hover:text-gray-500 hover:cursor-pointer">
      <!-- Match the Flags -->
      {{ props.gameTitle }}
    </h1>
    <h2 class="text-xl font-bold mb-4 text-center text-gray-500">{{ subGameTitle }}</h2>

    <div class="space-y-3">
      <template v-if="totalTries">
        <div class="text-md text-gray-600 mt-2 flex justify-center  border-blue-200  space-x-2">
          <div class="border-1 w-full py-1 rounded-2xl border-green-400">
            <p>
              🏆 <strong>Your Best Score: {{ bestScore }} / {{ total }}</strong>
            </p>
            <p>
              You played {{ totalTries }} times
            </p>
          </div>

          <div class="border-1 w-full py-1 rounded-2xl border-green-400">
            <p>
              <strong>Your Last Score</strong>
            </p>
            {{ lastScore }}/{{ countries.length }} ({{ Math.floor(lastScore / countries.length * 100) }} %)
          </div>


        </div>
        <ChallengeFriends :shareMessage="shareMessage" />
      </template>
      <!-- <div v-for="(item, index) in flagAssignments" :key="item.code"
        class="flex justify-start items-center gap-6 flex-col sm:flex-row p-4 rounded-xl border-1 border-gray-300 bg-gray-50"> -->

      <div v-for="(item, index) in flagAssignments" :key="item.code"
        :class="['flex justify-start items-center gap-6 flex-col sm:flex-row p-3 rounded-xl border-1', blockStyle[index]]"
        @change="updateAvailableOptions">

        <img :src="item.flagUrl" :alt="item.code" class="w-28 rounded shadow" />

        <div class="flex items-center gap-2 w-full sm:flex-1">
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

    <div class="mt-6 mb-15 text-center">
      <!-- <button @click="checkAnswers" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Check Answers
      </button> -->

      <template v-if="!showResult">
        <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4" @click="checkResult">
          Check Answers
        </button>
      </template>

      <template v-else>
        <!-- <h2 class="text-xl font-semibold mb-2">Your Score</h2>
        <p class="text-2xl font-bold text-green-600">{{ correctCount }} / {{ total }}</p>
        <p class="text-gray-700 mt-1">{{ percentage }}% correct</p> -->

        <div class="flex flex-col justify-center sm:flex-row gap-2 mt-4">
          <button @click="closeModal" class="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">
            See Results
          </button>
          <button @click="resetGame" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Play Again
          </button>

        </div>
      </template>
    </div>

    <!-- <div v-if="showResult" class="mt-6 text-center font-medium">
      <p v-if="allCorrect" class="text-green-600">🎉 All answers are correct!</p>
      <p v-else class="text-red-600">Some answers are incorrect. Try again!</p>
    </div> -->

    <!-- Modal Overlay -->
    <div v-if="modalVisible" class="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50"
      @click.self="closeModal">
      <!-- Modal Content -->
      <div class="bg-white rounded-xl p-6 shadow-lg w-11/12 max-w-xl text-center relative">
        <button class="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl" @click="closeModal"
          title="Close">
          ❌
        </button>

        <h2 class="text-xl font-semibold mb-2">Your Score</h2>
        <p class="text-2xl font-bold text-green-600">{{ correctCount }} / {{ total }}</p>
        <p class="text-gray-700 mt-1">{{ percentage }}% correct</p>

        <p class="text-sm text-gray-600 mt-1">
          🏆 Best Score: {{ bestScore }} / {{ total }}
        </p>

        <ChallengeFriends :shareMessage="shareMessage" />
        <div class="flex flex-col justify-center sm:flex-row gap-2 mt-4">
          <button @click="closeModal" class="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">
            See Results
          </button>
          <button @click="resetGame" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Play Again
          </button>
        </div>

      </div>
    </div>
  </GamePageWrapper>
</template>

<script setup>
import { ref, computed, reactive, onMounted, watch } from 'vue'
import GamePageWrapper from './GamePageWrapper.vue'
import ChallengeFriends from './ChallengeFriends.vue'

import { useRouter } from 'vue-router'

import { GameStats } from '@/utils/gameStats'

import LocalStorageDB from '@/utils/localStorageDB'



const router = useRouter()

const props = defineProps({
  countries: Array, // List of CountryData
  topic: String,
  gameSlug: String,
  gameTitle: String,
  subGameSlug: String,
  subGameTitle: String,
  subGameShareName: String,
  gameUrl: String
})

const localStorageDB = new LocalStorageDB()
const localStorageKey = localStorageDB.buildSubGameKey(props.topic, props.gameSlug, props.subGameSlug)

// This varaible will hold the statistics of the game
let gameStats = new GameStats()

const sortedCountries = ref([...props.countries].sort((a, b) =>
  a.name.localeCompare(b.name)
))

// Define variables that will use local storage persistency
const bestScore = ref(0)
const lastScore = ref(0)
const totalTries = ref(0)
const gameSize = props.countries.length

onMounted(() => {
  const gameStatsStored = localStorageDB.get(localStorageKey)
  if (gameStatsStored) {
    bestScore.value = gameStatsStored.bestScore
    lastScore.value = gameStatsStored.lastScore
    totalTries.value = gameStatsStored.totalTries
  }
})

const checkResult = () => {
  gameStats.lastScore = correctCount.value
  gameStats.gameSize = gameSize
  gameStats.incrementTotalTries()
  gameStats.updateBestScore()

  localStorageDB.set(localStorageKey, gameStats)

  bestScore.value = gameStats.bestScore
  lastScore.value = gameStats.lastScore
  totalTries.value = gameStats.totalTries

  showResult.value = true
  modalVisible.value = true


}

// Message used to share game with friends
const shareMessage = computed(() => {
  const message = `I scored ${correctCount.value}/${total.value} on the ${props.subGameShareName}.
Think you can beat me? Try it here: ${props.gameUrl}`
  return message
})

// Shuffle array
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5)
}

// Assign shuffled countries to flag list
const flagAssignments = shuffle([...props.countries])

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
  // return props.countries.filter((c) => !selectedSet.has(c.code) || selections.value[index] === c.code)
  return sortedCountries.value.filter((c) => !selectedSet.has(c.code) || selections.value[index] === c.code)
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
  // console.log('-- Flags ')
  // console.log(flagAssignments)

  // console.log('-- Selections ')
  // console.log(selections.value)



  updateBlockStyles()
  // console.log(blockStyle)
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


const closeModal = () => {
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' })
  modalVisible.value = false
}

const getCountryName = (code) => {
  const match = props.countries.find((c) => c.code === code)
  return match ? match.name : null
}

const resetGame = () => {
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' })

  // Reshuffle the assignments
  flagAssignments.splice(0, flagAssignments.length, ...shuffle([...props.countries]).slice(0, flagAssignments.length))

  // Reset all selections
  selections.value = Array(flagAssignments.length).fill(null)

  // Hide result UI
  showResult.value = false
  modalVisible.value = false
}

// function goToGameOverviewPage

const goToGameOverviewPage = () => {
  router.push({ name: 'MatchTheFlagOverview' });
};




</script>

<style scoped>
select:invalid {
  color: gray;
}
</style>
