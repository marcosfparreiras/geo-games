<template>
  <!-- <div class="bg-gray-100 shadow-md"> -->
  <div class="bg-white shadow-md">
    <div class="px-6">
      <div class="max-w-3xl mx-auto w-full flex items-center justify-between h-20">
        <!-- <div class="max-w-3xl mx-auto w-full flex items-center justify-center h-20 space-x-1"> -->
        <router-link :to="{ name: 'HomePage' }" class="flex items-center">
          <img src="/logo-nobg.png" alt="SafePasswordGen logo" class="h-10 w-auto" />
          <span class="text-2xl font-bold text-blue-800">GeoPuzzlify</span>
        </router-link>

        <div class="flex space-x-6 text-lg font-bold text-gray-500 ">
          <router-link :to="{ name: 'HomePage' }" class="flex items-center">
            <span class="hover:text-gray-700 hover:scale-103">{{ $t('navBar.home') }}</span>
          </router-link>

          <router-link :to="{ name: 'MatchTheFlagOverview' }" class="flex items-center">
            <span class="hover:text-gray-700 hover:scale-103">{{ $t('games.matchTheFlag.title') }}</span>
          </router-link>
        </div>

        <nav class="flex justify-end p-4">
          <select v-model="locale" @change="saveLang" class="bg-gray-800 text-white rounded px-2 py-1">
            <option v-for="(info, code) in supportedLocales" :key="code" :value="code">
              {{ info.flag }} {{ info.label }}
            </option>
          </select>
        </nav>
      </div>
    </div>
  </div>

</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { supportedLocales } from '@/i18n/supported'; // From previous setup


const { locale } = useI18n();
const saveLang = () => {
  localStorage.setItem('lang', locale.value);
};
</script>
