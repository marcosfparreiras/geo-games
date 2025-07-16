<template>
  <GameOverviewPageWrapper>
    <PageTitle>Choose a Game Mode</PageTitle>

    <div v-for="groupInfo in groupsInfos" :key="groupInfo.title" class="mb-15">
      <h1 class="text-2xl font-bold mb-5">{{ groupInfo.title }}</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="mode in groupInfo.subGames" :key="mode.slug" @click="selectMode(mode)"
          class="flex flex-col bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden hover:scale-105">


          <!-- <img :src="mode.image" alt="" class="w-full h-40 object-cover" /> -->
          <FlagCollage :flags="mode.flagsUrls" />
          <!-- <FlagCollage v-if="mode.flags" :flags="mode.flagsUrls" />
                <img v-else :src="mode.image" alt="" class="w-full h-40 object-cover" /> -->

          <div class="p-4">
            <h2 class="text-xl font-semibold">{{ mode.name }}</h2>
            <p class="text-gray-500 text-sm font-semibold mt-0">{{ mode.flagsUrls.length }} items</p>
            <p class="text-gray-500 text-sm mt-2">{{ mode.category }}</p>
          </div>

          <!-- <div v-if="groupInfo.bestScore == 3" class="text-center font-semibold p-4 bg-lime-200"> -->
          <div v-if="mode.totalTries" class="flex-1 text-center font-semibold p-4 bg-lime-200">
            Your best score: {{ mode.bestScore }}/{{ mode.flagsUrls.length }} ({{
              Math.floor(mode.bestScore / mode.flagsUrls.length * 100) }} %)
          </div>
        </div>
      </div>
    </div>
  </GameOverviewPageWrapper>
</template>

<script setup>
import { useRouter } from 'vue-router';
import GameOverviewPageWrapper from './GameOverviewPageWrapper.vue';
import PageTitle from './PageTitle.vue';
import FlagCollage from './FlagCollage.vue';

import { ref, onMounted } from 'vue';
import { countriesListCca2 } from '@/utils/countriesListCca2';

import coutryGroupsByRegion from '@/utils/countryGroupsByRegion';
import coutryGroupsByColorSet from '@/utils/countryGroupsByColorSet';

const router = useRouter();

const groupsInfos = ref([])

class SubGameCardInfo {
  constructor(slug, name, category, flagsUrls, bestScore, totalTries) {
    this.slug = slug
    this.name = name
    this.category = category
    this.flagsUrls = flagsUrls

    this.bestScore = bestScore
    this.totalTries = totalTries
  }
}

const gameName = 'matchTheFlag'

// const localStoragePrefix = `game:${gameName};subgame:${props.subGameSlug};var:`
// const localStoragePrefix = `game:${gameName};subgame:${props.subGameSlug};var:`
// const bestScoreLocalStorageKey = `${localStoragePrefix}bestScore`
// const totalTriesLocalStorageKey = `${localStoragePrefix}totalTries`
// const lastScoreLocalStorageKey = `${localStoragePrefix}lastScore`

function getLocalStorageGameInfo(gameName, subGameSlug, varName) {
  const localStorageKey = `game:${gameName};subgame:${subGameSlug};var:${varName}`
  const stored = localStorage.getItem(localStorageKey)
  const parsedStored = parseInt(stored, 10)
  const parsedStoredInt = +parsedStored || 0

  return parsedStoredInt
}

onMounted(() => {
  // this will be an array of SubGameCardInfo
  const subGamesByRegion = []
  const subGamesByColourSet = []

  let countryGroupsCollection

  // Build games per region
  countryGroupsCollection = coutryGroupsByRegion
  for (const countryGroup of countryGroupsCollection.collection) {
    const groupCountriesInfo = countriesListCca2.filter((countryInfo) => countryGroup.countryCodes.includes(countryInfo.cca2))
    const countryGroupFlags = groupCountriesInfo.map((countryInfo) => countryInfo.flags.svg)


    const bestScore = getLocalStorageGameInfo(gameName, countryGroup.groupSlug, 'bestScore')
    const totalTries = getLocalStorageGameInfo(gameName, countryGroup.groupSlug, 'totalTries')

    const subGameCardInfo = new SubGameCardInfo(countryGroup.groupSlug, countryGroup.groupName, countryGroupsCollection.collectionName, countryGroupFlags, bestScore, totalTries)
    subGamesByRegion.push(subGameCardInfo)
  }

  // Build games per color set
  countryGroupsCollection = coutryGroupsByColorSet
  for (const countryGroup of countryGroupsCollection.collection) {
    const groupCountriesInfo = countriesListCca2.filter((countryInfo) => countryGroup.countryCodes.includes(countryInfo.cca2))
    const countryGroupFlags = groupCountriesInfo.map((countryInfo) => countryInfo.flags.svg)

    const bestScore = getLocalStorageGameInfo(gameName, countryGroup.groupSlug, 'bestScore')
    const totalTries = getLocalStorageGameInfo(gameName, countryGroup.groupSlug, 'totalTries')

    const subGameCardInfo = new SubGameCardInfo(countryGroup.groupSlug, countryGroup.groupName, countryGroupsCollection.collectionName, countryGroupFlags, bestScore, totalTries)
    subGamesByColourSet.push(subGameCardInfo)
  }

  groupsInfos.value = [
    { title: 'Challenges per region', subGames: subGamesByRegion },
    { title: 'Challenges per Color Set', subGames: subGamesByColourSet },
  ]

})

const selectMode = (mode) => {
  router.push({ name: 'MatchTheFlag', params: { subGameSlug: mode.slug } });
};
</script>
