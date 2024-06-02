<template>
  <GenericPage :page="page" />
</template>

<script setup lang="ts">
import type { Page } from '~/models/page';

const page: Page = {
  title: 'Créa Pluce',
  menuLabel: 'Créations',
  ressource: 'creations',
  content: {
    description: 'En tant qu’organisatrice d’événements et passionnée par la créativité, je suis là pour vous inspirer et vous accompagner dans la création d’éléments décoratifs uniques pour rendre votre événement encore plus beau. Votre vision est ma priorité, et je suis là pour la concrétiser.',
    notes: 'NOTE : Ensemble, nous discuterons de vos idées et de vos préférences. Pour réserver votre atelier, il vous suffit de me contacter.',
    services: [
      {
        title: 'Créa Pluce Personnalisées',
        description: 'Je suis là pour concrétiser vos idées créatives. Je peux travailler avec vous pour créer des éléments de décoration sur mesure qui correspondent à votre vision. [...TODO]',
      },
      {
        title: 'Ateliers Créa Pluce',
        description: 'Je propose des ateliers Créa Pluce à domicile, adaptés à diverses occasions telles qu’un enterrement de vie de jeune fille, un moment en famille, une journée entre amis(es) ou toute autre occasion spéciale. Ces ateliers sont conçus pour créer une atmosphère conviviale et créative.',
      },
    ],
    photos: 3
  }
}
</script>
