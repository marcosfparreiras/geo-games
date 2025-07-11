<template>
  <div class="p-6 max-w-md mx-auto space-y-6 bg-white rounded-xl shadow-md">
    <h2 class="text-xl font-bold text-center">Hints</h2>

    <!-- Hints -->
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
      <input v-model="currentGuess" type="text" placeholder="Enter your guess"
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
</template>

<script setup>
import { ref } from 'vue'

const hints = [
  'This country is in Europe.',
  'It has a population over 10 million.',
  'It has coastline along the Mediterranean Sea.',
  'Its capital city is very famous for art and fashion.',
  'Its national language is Italian.',
  'It’s shaped like a boot on the map.'
]

const currentHintIndex = ref(0)
const guesses = ref([])
const currentGuess = ref('')

function submitGuess() {
  if (currentGuess.value.trim()) {
    guesses.value.push(currentGuess.value.trim())
    currentGuess.value = ''
    revealNextHint()
  }
}

function revealNextHint() {
  if (currentHintIndex.value < hints.length) {
    currentHintIndex.value++
  }
}
</script>
