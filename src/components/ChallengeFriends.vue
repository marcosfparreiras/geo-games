<template>
  <section
    class="flex flex-col items-center justify-center mt-3 p-2 border rounded-lg border-blue-600 border-dashed bg-blue-50 shadow">
    <h2 class="text-lg font-semibold text-center sm:text-left">
      📢 Challenge your friends
    </h2>
    <p>Can your friends beat your score?</p>

    <div class="flex flex-col mt-2 sm:flex-row gap-3 justify-center sm:justify-start">
      <!-- WhatsApp Share -->
      <a :href="whatsappShareLink" target="_blank" rel="noopener noreferrer"
        class="inline-flex items-center gap-2 bg-green-500 text-white font-smi px-4 py-2 rounded hover:bg-green-600">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" class="w-5 h-5" />
        Share via WhatsApp
      </a>

      <!-- Copy to Clipboard -->
      <button @click="copyToClipboard"
        class="inline-flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
        📋 Copy Challenge Link
      </button>
    </div>

    <!-- Toast -->
    <transition name="fade">
      <div v-if="toastVisible"
        class="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded shadow-lg">
        ✅ Link copied!
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  shareMessage: String
})

const toastVisible = ref(false)

const getShareMessage = () => {
  return props.shareMessage
}

const whatsappShareLink = computed(() => {
  return `https://wa.me/?text=${encodeURIComponent(getShareMessage())}`
})

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(getShareMessage())
    toastVisible.value = true
    setTimeout(() => (toastVisible.value = false), 2000)
  } catch (err) {
    alert('❌ Failed to copy link')
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
