<template>
  <NuxtLayout name="center" title="On discute ?">
    <p class="nunito py-8 text-lg text-center italic">Un devis, des questions, besoin d’aide …</p>
    <div class="flex flex-col gap-4 nunito">
      <UFormGroup label="Nom" name="nom">
        <UInput v-model="form.nom" />
      </UFormGroup>
      <UFormGroup label="Prénom" name="prenom">
        <UInput v-model="form.prenom" />
      </UFormGroup>
      <UFormGroup label="Email" name="email">
        <UInput v-modeql="form.mail" />
      </UFormGroup>
      <UFormGroup label="Téléphone" name="telephone">
        <UInput v-modeql="form.phone" />
      </UFormGroup>
      <UFormGroup label="Date de l'événement" name="date">
        <UInput v-modeql="form.date" />
      </UFormGroup>
      <UFormGroup label="Ville de l'événement" name="lieu">
        <UInput v-modeql="form.lieu" />
      </UFormGroup>
      <UFormGroup label="Type d'événement" name="type">
        <UInput v-modeql="form.type" />
      </UFormGroup>
      <UFormGroup label="Estimation du nombre d'invité" name="invites">
        <UInput v-modeql="form.invites" />
      </UFormGroup>
      <UFormGroup label="Précisions complémentaires (thème, demandes particulières, etc)" name="invites">
        <UTextarea v-model="form.additionnal" />
      </UFormGroup>
      <UButton class="justify-center" type="submit">ENVOYER</UButton>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const form = reactive({
  nom: undefined,
  prenom: undefined,
  phone: undefined,
  mail: undefined,
  date: undefined,
  lieu: undefined,
  type: undefined,
  invites: undefined,
  additionnal: undefined
})
// ceci est un test
</script>
