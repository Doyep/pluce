<template>
  <div>
    <header class="flex justify-between items-center p-4">
      <NuxtLink to="/"><img src="public/logo.png" class="w-28" /></NuxtLink>
      <span class="dream-avenue text-xl text-center">{{ title }}</span>
      <Icon class="mx-2 cursor-pointer" name="iconamoon:menu-burger-horizontal-fill" size="1.5rem"
      @click="isOpen = true" />
    </header>
    <USlideover :ui="{ width: 'max-w-none' }" v-model="isOpen">
      <div class="p-4 flex flex-col gap-4">
        <Icon class="place-self-end cursor-pointer" name="iconamoon:close-thin" size="2rem"
        @click="isOpen = false" />
        <AppLinks :col=true @close-side-menu="isOpen = false" />
      </div>
    </USlideover>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isOpen = ref(false)
const title = ref()
effect(() => { title.value = links.find(link => link.path === useRoute().path)?.title ?? '' })
</script>
