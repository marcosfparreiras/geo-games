<template>
  <GamePageWrapper>
    <h1 class="text-3xl font-bold mb-4">Choose you next Challenge!</h1>

    <!-- Outer wrapper for game -->
    <div class="w-full mt-6 bg-green-50 rounded-md py-4 border-l-4 border-green-400">
      <h2 class="text-xl font-semibold">Guess the country from the flag image</h2>
      <h3 class="text-md px-2 mt-3">
        Can you guess a country from the <span class="font-semibold">flag image</span> and some progressive hints?
      </h3>
      <div class="flex justify-between px-8 mt-3 space-x-3">
        <router-link :to="{ name: 'GuessWithProgressiveHints', query: { continent: 'all', showFlag: 'true' } }"
          class="w-full bg-white p-2 rounded-md hover:bg-blue-400 hover:text-white hover:font-semibold">
          World
        </router-link>

        <router-link :to="{ name: 'GuessWithProgressiveHints', query: { continent: 'europe', showFlag: 'true' } }"
          class="w-full bg-white p-2 rounded-md hover:bg-blue-400 hover:text-white hover:font-semibold">
          Europe
        </router-link>

        <router-link :to="{ name: 'GuessWithProgressiveHints', query: { continent: 'americas', showFlag: 'true' } }"
          class="w-full bg-white p-2 rounded-md hover:bg-blue-400 hover:text-white hover:font-semibold">
          Americas
        </router-link>
      </div>
    </div>

    <!-- Outer wrapper for game -->
    <div class="w-full mt-6 bg-blue-50 rounded-md py-4 border-l-4 border-blue-300">
      <h2 class="text-xl font-semibold">Guess the country from the flag description</h2>
      <h3 class="text-md px-2 mt-3">
        Can you guess a country from the <span class="font-semibold">flag description</span> and some progressive
        hints?
      </h3>
      <div class="flex justify-between px-8 mt-3 space-x-3">
        <router-link :to="{ name: 'GuessWithProgressiveHints', query: { continent: 'all' } }"
          class="w-full bg-white p-2 rounded-md hover:bg-blue-400 hover:text-white hover:font-semibold">
          World
        </router-link>

        <router-link :to="{ name: 'GuessWithProgressiveHints', query: { continent: 'europe' } }"
          class="w-full bg-white p-2 rounded-md hover:bg-blue-400 hover:text-white hover:font-semibold">
          Europe
        </router-link>

        <router-link :to="{ name: 'GuessWithProgressiveHints', query: { continent: 'americas' } }"
          class="w-full bg-white p-2 rounded-md hover:bg-blue-400 hover:text-white hover:font-semibold">
          Americas
        </router-link>
      </div>
    </div>


  </GamePageWrapper>
</template>

<script setup>
import GamePageWrapper from '@/components/GamePageWrapper.vue';
</script>
