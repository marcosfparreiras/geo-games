<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const props = defineProps({
  games: {
    type: Array,
    required: true,
  },
})

const { t } = useI18n()
const router = useRouter()

const navigateTo = (route) => {
  router.push(route)
}
</script>

<template>
  <div class="mt-6 pt-4 border-t-1 border-gray-400 text-gray-800">
    <h3 class="text-lg font-semibold mb-4 text-center">{{ t('recommendations.title') }}</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
      <button v-for="game in games" :key="game.route" @click="navigateTo(game.route)"
        class="p-4 bg-lime-100 hover:bg-lime-200 border rounded-2xl shadow flex flex-col items-center text-center transition">
        <div class="text-lg font-medium">{{ game.icon }} {{ t(game.nameKey) }}</div>
      </button>
    </div>
  </div>
</template>

<style scoped>
button {
  cursor: pointer;
}
</style>
