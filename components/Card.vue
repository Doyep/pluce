<template>
  <div>
    <div v-if="isTextCard" class="bg-[#f2f0ec] h-full rounded-md p-4">
      <h2 class="mb-2 dream-avenue text-2xl text-center" v-html="textCard.title"></h2>
      <p class="nunito text-sm text-[#606060] text-center md:text-left">{{ textCard.description }}</p>
    </div>
    <img v-else :src="imageCard.path" class="rounded-md" />
  </div>
</template>


<script setup lang="ts">
import { checkTextCard, type ImageCard, type TextCard } from '~/models/card';
const { card } = defineProps<{ card: TextCard | ImageCard }>()
const isTextCard = checkTextCard(card as unknown as TextCard)
const imageCard = card as ImageCard
const textCard = card as TextCard
</script>
