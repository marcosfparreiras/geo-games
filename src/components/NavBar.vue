<template>
  <!-- <div class="bg-gray-100 shadow-md"> -->
  <div class="bg-white shadow-md">
    <div class="px-6">
      <div class="max-w-3xl mx-auto w-full flex items-center justify-between h-20">
        <!-- <div class="max-w-3xl mx-auto w-full flex items-center justify-center h-20 space-x-1"> -->
        <router-link :to="{ name: 'HomePage' }" class="flex items-center">
          <img src="/logo-nobg.png" alt="SafePasswordGen logo" class="h-10 w-auto" />
          <span class="text-2xl font-bold text-blue-800">GeoPuzzlify</span>
        </router-link>

        <div class="flex space-x-6 text-lg font-bold text-gray-500 ">
          <router-link :to="{ name: 'HomePage' }" class="flex items-center">
            <span class="hover:text-gray-700 hover:scale-103">Home</span>
          </router-link>

          <router-link :to="{ name: 'MatchTheFlagOverview' }" class="flex items-center">
            <span class="hover:text-gray-700 hover:scale-103">Match the flag</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
</script>
