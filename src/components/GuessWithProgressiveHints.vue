<template>
  <GamePageWrapper>
    <h1 class="text-2xl font-bold mb-4">Guess the country from its flag's description using the fewest hints as
      possible. Good luck!</h1>
    <p>{{ maskedFlagDescription }}</p>

    <!-- Hint Progression -->
    <div class="pt-8 mx-auto space-y-4">
      <h2 class="text-xl font-semibold text-center">Hints</h2>

      <ul class="space-y-2">
        <li v-for="(hint, index) in hints" :key="index"
          class="p-3 rounded bg-gray-100 border border-gray-300 text-sm text-gray-700">
          <span v-if="index < currentHintIndex">
            {{ hint }}
          </span>
          <span v-else class="text-gray-400 italic">Hint {{ index + 1 }} hidden</span>
        </li>
      </ul>

      <!-- User Guess Input -->
      <form @submit.prevent="submitGuess" class="space-y-2">
        <!-- Define autocomplete options for input -->
        <datalist id="countries">
          <option v-for="country in validCountryNames" :key="country" :value="country" />
        </datalist>

        <input list="countries" id="countryGuess" placeholder="Enter your guess" v-model="currentGuess"
          class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />

        <button type="submit"
          class="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 disabled:opacity-50"
          :disabled="!currentGuess.trim()">
          Submit Guess
        </button>
      </form>

      <!-- Previous Guesses -->
      <div>
        <h3 class="font-semibold text-gray-700">Your Guesses:</h3>
        <ul class="list-disc list-inside text-sm text-gray-800">
          <li v-for="(guess, index) in guesses" :key="index">{{ guess }}</li>
        </ul>
      </div>
    </div>

    <!-- Success Popup -->
    <!-- <div v-if="showSuccessPopup" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <div class="bg-white p-6 rounded-xl shadow-xl max-w-sm w-full text-center space-y-4">
        <h2 class="text-2xl font-bold text-green-600">🎉 You got it!</h2>
        <p class="text-gray-700">
          Correct! You guessed <span class="font-semibold">{{ correctAnswer }}</span> in
          <span class="font-semibold">{{ guesses.length }}</span> tries.
        </p>
        <img :src="correctFlagUrl" alt="Country flag" class="mx-auto w-32 rounded border" />
        <button @click="restartGame" class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Play Again
        </button>
      </div>
    </div> -->
    <!-- Success Modal -->

    <div v-if="showSuccessPopup" class="fixed inset-0 z-50 flex items-center justify-center">
      <!-- <div> -->
      <!-- Modal background click area -->
      <div class="absolute inset-0 bg-black bg-opacity-50" @click="closePopup"></div>

      <!-- Modal box -->
      <div class="relative bg-white p-6 rounded-xl shadow-xl max-w-sm w-full z-10" @click.stop>
        <!-- Close button -->
        <button @click="closePopup" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          ✖
        </button>

        <h2 class="text-2xl font-bold text-green-600 text-center">🎉 You got it!</h2>
        <p class="text-center text-gray-700 mt-2">
          Correct! You guessed <span class="font-semibold">{{ correctAnswer }}</span> in
          <span class="font-semibold">{{ guesses.length }}</span> tries.
        </p>
        <img :src="correctFlagUrl" alt="Country flag" class="mx-auto w-32 mt-4 rounded border" />
        <div class="pt-4">{{ maskedFlagDescription }}</div>

        <!-- <button @click="restartGame" class="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Play Again
        </button> -->
      </div>
      <!-- </div> -->
    </div>
  </GamePageWrapper>
</template>

<script setup>
import GamePageWrapper from './GamePageWrapper.vue';

import { ref } from 'vue';
import { countriesList } from '@/utils/countriesList';

// const props = defineProps(() => {
//   countryInfo: Object
// })

const props = defineProps([
  'countryInfo'
])


const currentHintIndex = ref(0)
const currentGuess = ref('')
const guesses = ref([])
const showSuccessPopup = ref(false)

function closePopup() {
  showSuccessPopup.value = false
}



function submitGuess() {
  // guesses.value.push(currentGuess.value.trim())
  // currentGuess.value = ''

  const trimmed = currentGuess.value.trim()
  if (!trimmed) return

  guesses.value.push(trimmed)
  currentGuess.value = ''

  // Check if it's correct
  if (trimmed.toLowerCase() === correctAnswer.toLowerCase()) {
    showSuccessPopup.value = true
  } else {
    revealNextHint()
  }

  // revealNextHint()
}

function revealNextHint() {
  if (currentHintIndex.value < hints.length) {
    currentHintIndex.value++
  }
}

// function restartGame() {
//   currentHintIndex.value = 0
//   guesses.value = []
//   currentGuess.value = ''
//   showSuccessPopup.value = false
//   // You could also randomize a new country here if needed
// }

function restartGame() {
  currentHintIndex.value = 0
  guesses.value = []
  currentGuess.value = ''
  showSuccessPopup.value = false
  // optionally choose a new correct answer here
}


// We filter only the countries that have flag description
const countriesWithFlagDescription = countriesList.filter((country) => country.flags.alt)

// Every country is a valid guess
const validCountryNames = countriesList.map((country) => country.name.common).sort()

// const seed = 2
// const countryData = countriesWithFlagDescription[seed]
const countryData = props.countryInfo

// console.log(countryData)
const correctAnswer = countryData.name.common
const correctFlagUrl = countryData.flags.png
// const correctFlagUrl = 'https://flagcdn.com/w320/it.png'


// Define countryName and remove its name from the description
const countryName = countryData.name.common
const countryFlagDescription = countryData.flags.alt

const regex = new RegExp(countryName, 'gi')
const maskedFlagDescription = countryFlagDescription.replace(regex, 'this Country')



// Pretty display in case country borders only one other country
const borderCountriesStr = countryData.borders.length == 1 ? '1 country' : `${countryData.borders.length} countries`

// Other valid locales are de-DE, fr-FR, for instance
function formatPopulation(population, locale = 'en-US') {
  const formattedPopulation = new Intl.NumberFormat(locale).format(population)
  return formattedPopulation
}

const countryLanguages = Object.values(countryData.languages).sort()
const countryLanguagesCountStr = countryLanguages.length == 1 ? '1 language is spoken:' : `${countryLanguages.length} languages are spoken:`
const countrLanguagesListStr = countryLanguages.join(', ')

const countryLatHemisphere = countryData.capitalInfo.latlng[0] < 0 ? 'South' : 'North'
const countryLngHemisphere = countryData.capitalInfo.latlng[1] < 0 ? 'Western' : 'Eastern'

const countryCapitals = countryData.capital
const countryCapitalsStr = countryCapitals.length == 1 ? `is ${countryCapitals[0]}` : `are ${countryCapitals.join(', ')}`

// console.log(countryData)



const hints = [
  `It borders ${borderCountriesStr}`,
  `It has a population of ${formatPopulation(countryData.population)} people`,


  // South/North Hemisfere
  `It's in the ${countryLatHemisphere} Hemisphere`,
  // Western/Eastern part of the globe
  `It's in the ${countryLngHemisphere} Hemisphere`,

  `It's part of ${countryData.region}`,
  `It's part of ${countryData.subregion}`,


  // Languages
  `${countryLanguagesCountStr} ${countrLanguagesListStr}`,
  // Capital
  `The capital ${countryCapitalsStr}`
]


</script>
