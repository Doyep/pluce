<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script>
import { useColorMode } from '@vueuse/core';
const mode = useColorMode()
mode.value = 'light'
</script>
