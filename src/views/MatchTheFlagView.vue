<template>
  <MatchFlagsDropdown :countries="countries" :subGameSlug="subGameSlug" :subGameTitle="subGameTitle"
    :subGameShareName="subGameShareName" :gameUrl="gameUrl" />
</template>

<script setup>
import MatchFlagsDropdown from '@/components/MatchFlagsDropdown.vue';
import { countriesListCca2 } from '../utils/countriesListCca2';
import countryGroupsAll from '@/utils/countryGroupsAll';
import { MATCH_FLAG_GAME_URL } from '@/utils/constants';
import { buildUrl } from '@/utils/utils';

import { ref } from 'vue';
import { useRoute } from 'vue-router';

import { cca2ListToFlagEmojiString } from '@/utils/utils';

const props = defineProps({
  subGameSlug: String

})
const countries = ref([])
const subGameTitle = ref('')
const subGameShareName = ref('')

// Selects country group from the subGameSlug
const countryGroup = countryGroupsAll.get(props.subGameSlug)

// Gets all data available for those countries only
const countriesForGame = countriesListCca2.filter((countryData) => countryGroup.countryCodes.includes(countryData.cca2))

// Abstraction for the country data that will be used for the game
class CountryData {
  constructor(name, code, flagUrl) {
    this.name = name
    this.code = code
    this.flagUrl = flagUrl
  }
}

// Prepare the data needed for the game
for (const country of countriesForGame) {
  const countryName = country.name.common
  const countryCode = country.cca2
  const countryFlagUrl = country.flags.png

  countries.value.push(new CountryData(countryName, countryCode, countryFlagUrl))
}

// Build the name of the game to be shared, including the flags suffix
const maxFlagsLength = 6
const cca2List = countriesForGame.map((country) => country.cca2)
const emojiFlags = cca2ListToFlagEmojiString(cca2List, maxFlagsLength)

subGameTitle.value = countryGroup.groupName
subGameShareName.value = `Match the Flag Challenge | ${countryGroup.groupName} ${emojiFlags}`

// Define full URL to be shared with friends.
// In case full path (including queryParams is needed, use route.fullPath instead)
const route = useRoute()
const gameUrl = buildUrl(MATCH_FLAG_GAME_URL, route.path)


</script>
