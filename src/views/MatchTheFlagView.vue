<template>
  <MatchFlagsDropdown :countries="countries" :topic="gameTopic" :gameSlug="gameSlug" :subGameSlug="subGameSlug"
    :gameUrl="gameUrl" />
</template>

<script setup>
import MatchFlagsDropdown from '@/components/MatchFlagsDropdown.vue';
import { countriesListCca2 } from '../utils/countriesListCca2';
import { countriesListTranslations } from '@/utils/countriesListTranslations';
import countryGroupsAll from '@/utils/countryGroupsAll';
import { MATCH_FLAG_GAME_URL } from '@/utils/constants';
import { buildUrl } from '@/utils/utils';

import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

import { gamesInfo } from '@/utils/constants';

import { fetchCountryNameWithTranslations } from '@/utils/countryNamesWithTranslations';

import { supportedLanguagesList } from '@/i18n/supported';

const props = defineProps({
  subGameSlug: String
})

const countries = ref([])

const gameTopic = ref('')
const gameSlug = ref('')

// Abstraction for the country data that will be used for the game
class CountryData {
  constructor(name, nameTranslations, code, flagUrl) {
    this.name = name
    this.nameTranslations = nameTranslations
    this.code = code
    this.flagUrl = flagUrl
  }
}

onBeforeMount(() => {
  gameTopic.value = gamesInfo.MATCH_THE_FLAG.topic
  gameSlug.value = gamesInfo.MATCH_THE_FLAG.slug

  // Selects country group from the subGameSlug
  const countryGroup = countryGroupsAll.get(props.subGameSlug)

  // Gets all data available for those countries only
  const countriesForGame = countriesListCca2.filter((countryData) => countryGroup.countryCodes.includes(countryData.cca2))

  // Prepare the data needed for the game
  for (const country of countriesForGame) {
    const countryName = country.name.common
    const countryNameTranslations = fetchCountryNameWithTranslations(countriesListTranslations, country.cca2, supportedLanguagesList)
    const countryCode = country.cca2
    const countryFlagUrl = country.flags.png

    countries.value.push(new CountryData(countryName, countryNameTranslations, countryCode, countryFlagUrl))
  }
})

// Define full URL to be shared with friends.
// In case full path (including queryParams is needed, use route.fullPath instead)
const route = useRoute()
const gameUrl = buildUrl(MATCH_FLAG_GAME_URL, route.path)

</script>
