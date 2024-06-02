<template>
  <div class="flex gap-8 text-lg" :class="classCol">
    <template v-for="link in links">
      <NuxtLink :to="link.path" class="underline-effect text-black no-outline nunito" @click="$emit('closeSideMenu')">{{
    link.label }}</NuxtLink>
    </template>
  </div>
</template>

<script setup lang="ts">
import { links } from '~/utils/links';
const props = defineProps<{
  col?: boolean,
}>()

const classCol = ref({
  'flex-col': props.col,
  'place-items-center': props.col
})
</script>

<style scoped>
.underline-effect {
  --effect-color: black;
}

.no-outline {
  outline: none;
}
</style>
