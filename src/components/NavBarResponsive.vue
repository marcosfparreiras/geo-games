<!-- components/Navbar.vue -->
<template>
  <header class="bg-gray-900 text-white shadow-md">
    <nav class="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Logo -->
      <div class="text-xl font-bold">🌍 MyApp</div>

      <!-- Menu button for mobile -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Links + language switcher -->
      <div :class="['md:flex items-center space-x-4', isOpen ? 'block' : 'hidden', 'w-full md:w-auto mt-3 md:mt-0']">
        <RouterLink to="/" class="block md:inline-block px-3 py-2 hover:bg-gray-700 rounded"> {{ $t('message.game') }}
        </RouterLink>

        <!-- Language Selector -->
        <select v-model="locale" @change="saveLang" class="bg-gray-800 text-white rounded px-2 py-1">
          <option v-for="(info, code) in supportedLocales" :key="code" :value="code">
            {{ info.flag }} {{ info.label }}
          </option>
        </select>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { supportedLocales } from '@/i18n/supported'; // From previous setup

const isOpen = ref(false);
const toggleMenu = () => (isOpen.value = !isOpen.value);

const { locale } = useI18n();
const saveLang = () => {
  localStorage.setItem('lang', locale.value);
};
</script>
