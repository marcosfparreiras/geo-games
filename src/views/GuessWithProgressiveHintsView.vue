<template>
  <GuessWithProgressiveHints :countryInfo="countryInfo" :showFlag="showFlag" />
</template>

<script setup>
import GuessWithProgressiveHints from '@/components/GuessWithProgressiveHints.vue';
import { countriesList } from '@/utils/countriesList';

import { useRoute } from 'vue-router'
import { onBeforeMount, onMounted, ref } from 'vue';

const route = useRoute()
const countryInfo = ref('')
const showFlag = ref(false)

// TODO: Update route and component to use route param instead of a query param
// Source: https://router.vuejs.org/guide/essentials/dynamic-matching

// Vue components lifecycle (and hooks): https://vuejs.org/guide/essentials/lifecycle
// onMounted(() => {
onBeforeMount(() => {
  const queryParamContinent = route.query.continent
  const queryParamShowFlag = route.query.showFlag

  if (queryParamShowFlag == 'true') showFlag.value = true
  // console.log(queryParamShowFlag)
  // console.log(queryParamShowFlag == 'true')

  countryInfo.value = selectCountry(queryParamContinent)

  // console.log(countryInfo.value.name.common)
})


function selectCountry(continent) {
  if (continent) {
    continent = continent.toLowerCase()
    switch (continent) {
      case 'europe':
        continent = 'europe'
        break
      case 'americas':
        continent = 'americas'
        break
      case 'all':
        continent = null
        break
      default:
        null
    }
  }

  let validCountries = countriesList.filter((countryData) => countryData.flags.alt)
  if (continent) {
    validCountries = validCountries.filter((countryData) => countryData.region.toLowerCase() == continent)
  }

  const randomIndex = Math.floor(Math.random() * validCountries.length)
  return validCountries[randomIndex]
}


// Define country to be used for challenge
// const countryCodeStatic = 'PRY'
// const countryInfoOld = countriesList.filter((countryData) => countryData.cca3 == countryCodeStatic)[0]
</script>
