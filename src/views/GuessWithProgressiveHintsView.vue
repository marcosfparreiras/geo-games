<template>
  <GuessWithProgressiveHints :countryInfo="countryInfo" />
</template>

<script setup>
import GuessWithProgressiveHints from '@/components/GuessWithProgressiveHints.vue';
import { countriesList } from '@/utils/countriesList';

// Define country to be used for challenge
const countryCode = 'PRY'
const countryInfo = countriesList.filter((countryData) => countryData.cca3 == countryCode)[0]

</script>
