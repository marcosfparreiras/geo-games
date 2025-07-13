<!-- I don't like this format so much, but it could be reused in the future -->
<template>
  <div class="p-4 max-w-xl mx-auto">
    <h2 class="text-xl font-bold mb-4 text-center">Match the Flag - Balkans Edition</h2>

    <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
      <div v-for="flag in shuffledFlags" :key="flag.code" class="cursor-pointer">
        <img :src="`https://flagcdn.com/w160/${flag.code.toLowerCase()}.png`" alt="Flag"
          class="w-full border-2 rounded shadow hover:border-blue-500" :class="{
            'border-green-500': matchedCodes.includes(flag.code),
            'opacity-50': matchedCodes.includes(flag.code)
          }" @click="selectFlag(flag.code)" />
      </div>

      <div v-for="name in shuffledNames" :key="name.name" class="cursor-pointer">
        <button class="w-full p-2 bg-white border-2 rounded shadow hover:bg-blue-100" :class="{
          'bg-green-200': matchedCodes.includes(name.code),
          'opacity-50': matchedCodes.includes(name.code)
        }" @click="selectName(name.code)">
          {{ name.name }}
        </button>
      </div>
    </div>

    <div class="mt-6 text-center text-lg font-medium" v-if="matchedCodes.length === countries.length">
      🎉 You matched all the flags!
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

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

const selectedFlag = ref(null)
const selectedName = ref(null)
const matchedCodes = ref([])

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5)
}

const shuffledFlags = computed(() => shuffle(countries))
const shuffledNames = computed(() => shuffle(countries))

function selectFlag(code) {
  if (matchedCodes.value.includes(code)) return
  selectedFlag.value = code
  checkMatch()
}

function selectName(code) {
  if (matchedCodes.value.includes(code)) return
  selectedName.value = code
  checkMatch()
}

function checkMatch() {
  if (selectedFlag.value && selectedName.value) {
    if (selectedFlag.value === selectedName.value) {
      matchedCodes.value.push(selectedFlag.value)
    }
    selectedFlag.value = null
    selectedName.value = null
  }
}
</script>

<style scoped>
@media (max-width: 640px) {
  img {
    max-width: 100%;
    height: auto;
  }
}
</style>
