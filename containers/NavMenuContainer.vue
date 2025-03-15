<script setup lang="ts">
import { cocktails } from '~/constants/cocktails';

const route = useRoute()
const slug = computed(() => route.params.slug);

const items = computed(() => 
  cocktails.map(cocktail => ({
    title: cocktail,
    link: `/${cocktail}`,
    isActive: cocktail === slug.value,
  }))
);
</script>

<template>
  <NavMenu :items="items" />
</template>
