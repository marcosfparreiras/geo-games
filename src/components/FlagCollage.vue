<template>
  <!-- <div class="grid grid-cols-3 gap-1 w-40 h-30 overflow-hidden rounded shadow-inner"> -->
  <!-- <div class="grid grid-cols-3 gap-1 overflow-hidden rounded shadow-inner"> -->
  <div class="grid grid-cols-3 gap-1 overflow-hidden rounded shadow-inner">
    <img v-for="(flag, index) in flagsSample" :key="index" :src="flag" alt="flag" class="w-full h-full object-cover" />
  </div>
</template>

<script setup>
import { shuffleArray } from '@/utils/utils';

const props = defineProps({
  flags: {
    type: Array,
    required: true
  },
  maxCount: {
    default: 6
  }
});

const flagsSample = shuffleArray([...props.flags]).slice(0, props.maxCount)

</script>
