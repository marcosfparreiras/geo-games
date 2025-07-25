<template>
  <GameOverviewPageWrapper>
    <PageTitle>{{ $t('games.matchTheFlag.title') }}</PageTitle>

    <div v-for="groupInfo in groupsInfos" :key="groupInfo.title" class="mb-15">
      <h1 :id="groupInfo.slug" class="text-2xl font-bold mb-5">{{ groupInfo.title }}</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="mode in groupInfo.subGames" :key="mode.slug" @click="selectMode(mode)"
          class="flex flex-col bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer overflow-hidden hover:scale-105">


          <!-- <img :src="mode.image" alt="" class="w-full h-40 object-cover" /> -->
          <!-- <img v-if="mode.slug == 'balkans'" src="/balcans_map_image.png" />
          <FlagCollage v-else :flags="mode.flagsUrls" /> -->
          <FlagCollage :flags="mode.flagsUrls" />
          <!-- <FlagCollage v-if="mode.flags" :flags="mode.flagsUrls" />
                <img v-else :src="mode.image" alt="" class="w-full h-40 object-cover" /> -->

          <div class="p-4">
            <h2 class="text-xl font-semibold">{{ $t(`countryGroupNames.${mode.slug}`) }}</h2>
            <p class="text-gray-500 text-sm font-semibold mt-0">{{ mode.flagsUrls.length }} items</p>
            <p class="text-gray-500 text-sm mt-2">{{ $t(`challengeTypes.${mode.category}`) }}</p>
          </div>

          <!-- <div v-if="groupInfo.bestScore == 3" class="text-center font-semibold p-4 bg-lime-200"> -->
          <div v-if="mode.totalTries" class="flex-1 text-center font-semibold p-4 bg-lime-200">
            {{ $t('games.shared.bestScoreMessage') }}: {{ mode.bestScore }}/{{ mode.flagsUrls.length }} ({{
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

import LocalStorageDB from '@/utils/localStorageDB'
import { GameStats } from '@/utils/gameStats';


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

import { gamesInfo } from '@/utils/constants';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const topic = gamesInfo.MATCH_THE_FLAG.topic
// const gameName = gamesInfo.MATCH_THE_FLAG.name
const gameSlug = gamesInfo.MATCH_THE_FLAG.slug

const localStorageDB = new LocalStorageDB()


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

  let gameStats
  let countryGroupsCollection
  let localStorageKey

  // Build games per region
  countryGroupsCollection = coutryGroupsByRegion
  for (const countryGroup of countryGroupsCollection.collection) {
    const groupCountriesInfo = countriesListCca2.filter((countryInfo) => countryGroup.countryCodes.includes(countryInfo.cca2))
    const countryGroupFlags = groupCountriesInfo.map((countryInfo) => countryInfo.flags.svg)

    localStorageKey = localStorageDB.buildSubGameKey(topic, gameSlug, countryGroup.groupSlug)
    const gameStatsStored = localStorageDB.get(localStorageKey)

    gameStats = new GameStats()
    if (gameStatsStored) {
      gameStats.lastScore = gameStatsStored.lastScore
      gameStats.bestScore = gameStatsStored.bestScore
      gameStats.totalTries = gameStatsStored.totalTries
    }

    const subGameCardInfo = new SubGameCardInfo(countryGroup.groupSlug, countryGroup.groupName, countryGroupsCollection.collectionName, countryGroupFlags, gameStats.bestScore, gameStats.totalTries)
    subGamesByRegion.push(subGameCardInfo)
  }

  // Build games per color set
  countryGroupsCollection = coutryGroupsByColorSet
  for (const countryGroup of countryGroupsCollection.collection) {
    const groupCountriesInfo = countriesListCca2.filter((countryInfo) => countryGroup.countryCodes.includes(countryInfo.cca2))
    const countryGroupFlags = groupCountriesInfo.map((countryInfo) => countryInfo.flags.svg)

    localStorageKey = localStorageDB.buildSubGameKey(topic, gameSlug, countryGroup.groupSlug)
    const gameStatsStored = localStorageDB.get(localStorageKey)

    gameStats = new GameStats()
    if (gameStatsStored) {
      gameStats.lastScore = gameStatsStored.lastScore
      gameStats.bestScore = gameStatsStored.bestScore
      gameStats.totalTries = gameStatsStored.totalTries
    }

    const subGameCardInfo = new SubGameCardInfo(countryGroup.groupSlug, countryGroup.groupName, countryGroupsCollection.collectionName, countryGroupFlags, gameStats.bestScore, gameStats.totalTries)
    subGamesByColourSet.push(subGameCardInfo)
  }

  groupsInfos.value = [
    { title: t('challengeTypes.perRegion'), subGames: subGamesByRegion, slug: 'perRegion' },
    { title: t('challengeTypes.perFlagStyle'), subGames: subGamesByColourSet, slug: 'perFlagStyle' },
  ]

})

const selectMode = (mode) => {
  router.push({ name: 'MatchTheFlag', params: { subGameSlug: mode.slug } });
};
</script>
