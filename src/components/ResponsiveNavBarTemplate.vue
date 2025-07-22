<template>
  <!-- <header class="max-w-3xlbg-white bg-gray-900 text-white shadow-md"> -->
  <header class="bg-white text-gray-800 shadow-md">
    <div class="max-w-4xl h-20 mx-auto flex items-center justify-between px-5">
      <div class="text-xl">
        The Logo
      </div>

      <!-- Navigation for Desktop -->
      <nav aria-label="Main Menu for Desktop" class="hidden md:flex  space-x-4">
        <div v-for="(navBarElement, index) in navBarElements" :key="index">
          <router-link :to="navBarElement.routerLinkParams"
            class="p-3 hover:bg-orange-500 hover:text-white hover:font-semibold rounded ">
            <span class="text-lg font-semibold">{{ navBarElement.text }}</span>
          </router-link>
        </div>
      </nav>
      <!-- Button having either sandwich or close icon, depending on menu open state -->
      <div class="md:hidden">
        <button aria-label="Open Menu" @click="mobileMenuOpen = !mobileMenuOpen"
          class="text-gray-600 hover:text-blue-600 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
    <div>
      <!-- Navigation for Mobile: only expanded once sandwich icon is pressed (only visible on small screens) -->
      <nav aria-label="Main Menu for Mobile">
        <transition name="slide-fade">
          <div v-if="mobileMenuOpen" class="flex flex-col space-y-2 py-3 px-3">
            <div v-for="(navBarElement, index) in navBarElements" :key="index">
              <router-link @click="mobileMenuOpen = !mobileMenuOpen" :to="navBarElement.routerLinkParams"
                class=" p-3 hover:bg-orange-400 rounded">
                <span class="text-xl font-stretch-semi-expanded w-full text-gray-700">{{ navBarElement.text }}</span>
              </router-link>
            </div>
          </div>
        </transition>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  navBarElements: Object
})

const mobileMenuOpen = ref(false);
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
