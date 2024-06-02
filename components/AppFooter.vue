<template>
  <footer class="px-4 py-8 flex flex-col gap-4 bg-black items-center text-white text-center">
    <NuxtLink to="/" class="dream-avenue text-4xl w-fit">PLUCE</NuxtLink>
    <div class="flex gap-4 justify-center">
      <NuxtLink class="hover:scale-110" to="https://www.facebook.com/profile.php?id=61553767143333">
        <Icon name="ic:baseline-facebook" size="1.5rem" />
      </NuxtLink>
      <NuxtLink class="hover:scale-110" to="https://www.instagram.com/pluce.fr">
        <Icon name="streamline:instagram" size="1.5rem" />
      </NuxtLink>
    </div>
    <div class="flex flex-wrap gap-2 justify-center text-xs text-stone-500">
      <NuxtLink class="nunito underline-effect ">Politique de confidentialité</NuxtLink>
      <NuxtLink class="nunito underline-effect">Conditions générales</NuxtLink>
    </div>
  </footer>
</template>
