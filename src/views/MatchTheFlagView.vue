<template>
  <MatchFlagsDropdown :countries="countries" :subGameSlug="subGameSlug" :subGameTitle="subGameTitle"
    :subGameShareName="subGameShareName" />
</template>

<script setup>
// import MatchFlagsGame from '@/components/MatchFlagsGame.vue';
import MatchFlagsDropdown from '@/components/MatchFlagsDropdown.vue';

import { useRoute } from 'vue-router'
import { onBeforeMount, ref } from 'vue';

const route = useRoute()
const countries = ref([])
const subGameSlug = ref('')
const subGameTitle = ref('')
const subGameShareName = ref('')

const balkansCountries = [
  { name: "Albania", code: "AL" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Bulgaria", code: "BG" },
  { name: "Croatia", code: "HR" },
  { name: "Greece", code: "GR" },
  { name: "Kosovo", code: "XK" },
  { name: "Montenegro", code: "ME" },
  { name: "North Macedonia", code: "MK" },
  { name: "Romania", code: "RO" },
  { name: "Serbia", code: "RS" },
  { name: "Slovenia", code: "SI" },
]
const balkansSubGameSlug = 'balkans'
const balkansTitle = 'Balkans'
const balkansChallengeShareName = 'Balkans Flag Challenge! 🇷🇸🇧🇦🇭🇷🇦🇱'

const trickyColoursWhiteBlueRedCountries = [
  { name: "France", code: "FR" },
  { name: "Czechia", code: "CZ" },
  { name: "Luxemburg", code: "LU" },
  { name: "Netherlands", code: "NL" },
  { name: "Serbia", code: "RS" },
  { name: "Slovenia", code: "SI" },
  { name: "Russia", code: "RU" },


  // { name: "Czechia", code: "CZE" },
]
const trickyColoursWhiteBlueRedSubGameSlug = 'trickyColoursWhiteBlueRed'
const trickyColoursWhiteBlueRedSubGameTitle = 'White-Blue-Red Flags'
const trickyColoursWhiteBlueRedSubGameShareName = 'Tricky White/Blue/Red Flag Challenge! 🇫🇷🇷🇸🇨🇿🇷🇺'


// const countries = balkansCountries
// const subGameSlug = balkansSubGameSlug
// const subGameTitle = balkansTitle

// Vue components lifecycle (and hooks): https://vuejs.org/guide/essentials/lifecycle
onBeforeMount(() => {
  const queryParamSubGame = route.query.subgame

  if (queryParamSubGame == 'balkans') {
    countries.value = balkansCountries
    subGameSlug.value = balkansSubGameSlug
    subGameTitle.value = balkansTitle
    subGameShareName.value = balkansChallengeShareName
  }
  else if (queryParamSubGame == 'white-blue-red') {
    countries.value = trickyColoursWhiteBlueRedCountries
    subGameSlug.value = trickyColoursWhiteBlueRedSubGameSlug
    subGameTitle.value = trickyColoursWhiteBlueRedSubGameTitle
    subGameShareName.value = trickyColoursWhiteBlueRedSubGameShareName
  }


  // console.log(countryInfo.value.name.common)
})

</script>
