<template>
  <GenericPage :page="page" />
</template>

<script setup lang="ts">
import { type Page } from '~/models/page';

const page: Page = {
  title: 'Pluce Événements',
  menuLabel: 'Événements',
  ressource: 'evenements',
  content: {
    description: 'Faites de chaque événement un souvenir précieux.',
    services: [
      {
        title: 'Anniversaire',
        description: 'Fêtes uniques qui reflètent la personnalité du célébrant.',
      },
      {
        title: 'Renouvellement des voeux',
        description: 'Cérémonies émouvantes pour raviver l’amour et la complicité.',
      },
      {
        title: 'Départ en retraite',
        description: 'Célébrations chaleureuses pour marquer ce nouveau chapitre.',
      },
    ],
    photos: 3
  }
}
</script>
