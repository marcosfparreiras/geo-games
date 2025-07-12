<template>
  <!-- <div class="bg-gray-100 shadow-md"> -->
  <div class="bg-white shadow-md">
    <div class="px-6">
      <!-- <div class="max-w-3xl mx-auto w-full flex items-center justify-between h-20"> -->
      <div class="max-w-3xl mx-auto w-full flex items-center justify-center h-20 space-x-1">
        <router-link :to="{ name: 'HomePage' }" class="flex items-center">
          <img src="/logo-nobg.png" alt="SafePasswordGen logo" class="h-10 w-auto" />
          <span class="text-2xl font-bold text-blue-800">GeoPuzzlify</span>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script setup>
</script>
