<template>
  <select v-model="locale" @change="saveLang" class="bg-gray-800 text-white rounded px-2 py-1">
    <option v-for="(info, code) in supportedLocales" :key="code" :value="code">
      {{ info.flag }} {{ info.label }}
    </option>
  </select>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { supportedLocales } from '@/i18n/supported'; // From previous setup

const { locale } = useI18n();
const saveLang = () => {
  localStorage.setItem('lang', locale.value);
};
</script>
