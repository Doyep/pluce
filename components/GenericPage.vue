<template>
  <NuxtLayout name="center" :title="page.title">
    <p class="nunito py-8 text-lg text-center italic">{{ page.content.description }}</p>
    <div class="flex flex-col md:grid gap-4 mb-4" :class="servicesCols">
      <Card v-for="card in servicesCards" :card="card" />
    </div>
    <div class="hidden md:grid grid-cols-3 gap-4">
      <Card v-for="card in photosCards" :card="card" />
    </div>
    <div class="md:hidden mt-4">
      <Carousel :items="photos" />
    </div>
    <p class="nunito py-8 text-lg">{{ page.content.notes }}</p>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { getPhotoCards, getServiceCards, type Page } from '~/models/page';

const { page } = defineProps<{ page: Page }>()
const photosCards = getPhotoCards(page)
const photos = photosCards.map(photo => photo.path)
const servicesCards = getServiceCards(page)
const servicesCols = `grid-cols-${page.content.services.length}`
</script>
