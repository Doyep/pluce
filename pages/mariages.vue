<template>
  <GenericPage :page="page" />
</template>

<script setup lang="ts">
import { type Page } from '~/models/page';

const page: Page = {
  title: 'Pluce Mariages',
  menuLabel: 'Mariages',
  ressource: 'mariages',
  content: {
    description: 'Transformez chaque instant en un souvenir inoubliable.',
    notes: 'NOTE : Les tarifs sont personnalisés et dépendent de vos besoins. Ils seront déterminés après notre consultation initiale, prenant en compte la taille, la complexité de l’événement, la localisation, vos exigences particulières et la personnalisation souhaitée.',
    services: [
      {
        title: 'Jour Mémorable',
        description: 'Coordination des prestataires et résolution des imprévus le jour du mariage.',
      },
      {
        title: 'À mi-chemin',
        description: 'Planification personnalisée en fonction de vos besoins et de votre budget, avec une aide à la recherche de prestataires et un suivi budgétaire.',
      },
      {
        title: 'Clé en Main',
        description: 'Planification intégrale, gestion des prestataires, suivi budgétaire, coordination le jour du mariage, soutien continu, et création d’une ambiance unique.',
      },
    ],
    photos: 3
  }
}
</script>
