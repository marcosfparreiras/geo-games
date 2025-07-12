<template>
  <GamePageWrapper>
    <h1 class="text-3xl font-bold mb-4">Choose you next Challenge!</h1>

    <!-- Outer wrapper for game -->
    <div class="w-full mt-6 bg-blue-50 rounded-md py-4 border-l-4 border-blue-300">
      <h2 class="text-xl font-semibold">Guess the country from the flag description</h2>
      <h3 class="text-md px-2 mt-3">
        Can you guess a country from the description of its flag and some progressive hints?
      </h3>
      <div class="flex justify-between px-8 mt-3 space-x-3">
        <!-- <div class="w-full bg-white p-2 rounded-md hover:bg-blue-400 hover:text-white hover:font-semibold">
          <router-link :to="{ name: 'GuessWithProgressiveHints', query: { continent: 'europe' } }">Europe</router-link>
        </div> -->

        <router-link :to="{ name: 'GuessWithProgressiveHints', query: { continent: 'europe' } }"
          class="w-full bg-white p-2 rounded-md hover:bg-blue-400 hover:text-white hover:font-semibold">
          Europe
        </router-link>

        <router-link :to="{ name: 'GuessWithProgressiveHints', query: { continent: 'americas' } }"
          class="w-full bg-white p-2 rounded-md hover:bg-blue-400 hover:text-white hover:font-semibold">
          Americas
        </router-link>

        <router-link :to="{ name: 'GuessWithProgressiveHints', query: { continent: 'all' } }"
          class="w-full bg-white p-2 rounded-md hover:bg-blue-400 hover:text-white hover:font-semibold">
          World
        </router-link>

        <!-- <div class="w-full bg-white p-2 rounded-md">Americas</div>
        <div class="w-full bg-white p-2 rounded-md">World</div> -->
      </div>
    </div>
  </GamePageWrapper>
</template>

<script setup>
import GamePageWrapper from '@/components/GamePageWrapper.vue';
</script>
