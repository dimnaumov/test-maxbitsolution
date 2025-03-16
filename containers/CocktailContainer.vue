<script lang="ts" setup>
import type { Cocktail } from '~/types/cocktails';

const route = useRoute();
const store = useCocktailsStore();

const cocktails: Ref<Record<string, Cocktail>> = computed(() => {
  return store.items[route.params.slug as string];
});

await store.getCocktailByName(route.params.slug as string);
</script>

<template>
  <div v-if="store.isLoading">Loading...</div>

  <div v-else-if="store.error">Error: {{ store.error }}</div>

  <div v-else class="cocktail-list">
    <div v-for="cocktail in cocktails" :key="cocktail.idDrink" class="cocktail-list_item">
      <CocktailCard :cocktail="cocktail" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cocktail-list {
  display: flex;
  flex-direction: column;

  &_item {
    padding: 16px;

    &:not(:first-child) {
      border-top: 1px solid gray;
    }
  }
}
</style>
