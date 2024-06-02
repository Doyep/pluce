<template>
  <div class="flex justify-center">
    <div class="w-[45rem]">
      <h1 v-if="isDesktop" class="w-full gilda-display text-center truncate mb-4">{{ title }}</h1>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core';
import { useAttrs } from 'vue';
const isDesktop = ref()
onMounted(() => effect(() => isDesktop.value = useBreakpoints(breakpointsTailwind).greaterOrEqual('md').value))

const { title } = useAttrs()
</script>

<style scoped>
h1 {
  font-size: 2.25rem;
  line-height: 2.5rem;
}
</style>
