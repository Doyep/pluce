<template>
  <div class="w-full">
    <UCarousel ref="carouselRef" v-slot="{ item }" :items="items" :ui="carouselConf" class="rounded-lg overflow-hidden"
      indicators>
      <img :src="`${item}`" class="w-full" draggable="false">
    </UCarousel>
  </div>
</template>

<script setup lang="ts">
const carouselRef = ref()
const { items } = defineProps<{
  items: string[]
}>()
const carouselConf = {
  item: 'basis-full',
  indicators: {
    active: 'bg-white dark:bg-white',
    inactive: 'bg-gray-100/50 dark:bg-gray-100/50 mix-blend-normal'
  }
}
onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return
    if (carouselRef.value.page === carouselRef.value.pages) return carouselRef.value.select(0)
    carouselRef.value.next()
  }, 4000)
})
</script>
