<template>
  <div class="p-6 max-w-md mx-auto text-center">
    <h1 class="text-2xl font-bold mb-4">Guess the Country</h1>

    <div v-if="!gameStarted">
      <button @click="startGame" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Start Game
      </button>
    </div>

    <div v-else>
      <div v-if="showFlag">
        <img :src="currentCountry.flag" alt="Country Flag" class="w-32 h-20 mx-auto mb-4" />
      </div>

      <div v-if="showInput">
        <input
          v-model="userGuess"
          list="countries"
          placeholder="Enter country name"
          class="border px-3 py-2 rounded w-full"
        />
        <datalist id="countries">
          <option v-for="country in countries" :key="country.name" :value="country.name" />
        </datalist>

        <button
          @click="submitGuess"
          class="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Submit
        </button>
      </div>

      <div
        v-if="feedback"
        class="mt-4 text-lg font-semibold"
        :class="feedback === 'Correct!' ? 'text-green-600' : 'text-red-600'"
      >
        {{ feedback }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countries: [
        { name: 'France', flag: 'https://flagcdn.com/fr.svg' },
        { name: 'Germany', flag: 'https://flagcdn.com/de.svg' },
        { name: 'Brazil', flag: 'https://flagcdn.com/br.svg' },
        { name: 'Japan', flag: 'https://flagcdn.com/jp.svg' },
      ],
      currentCountry: null,
      gameStarted: false,
      showFlag: false,
      showInput: false,
      userGuess: '',
      feedback: '',
    }
  },
  methods: {
    startGame() {
      this.resetGame()
      this.gameStarted = true
      this.currentCountry = this.countries[Math.floor(Math.random() * this.countries.length)]
      this.showFlag = true

      setTimeout(() => {
        this.showFlag = false
        this.showInput = true
      }, 1000)
    },
    submitGuess() {
      const guess = this.userGuess.trim().toLowerCase()
      const correct = this.currentCountry.name.toLowerCase()
      this.feedback = guess === correct ? 'Correct!' : `Wrong! It was ${this.currentCountry.name}.`
    },
    resetGame() {
      this.feedback = ''
      this.userGuess = ''
      this.showFlag = false
      this.showInput = false
    },
  },
}
</script>

<style scoped>
img {
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
