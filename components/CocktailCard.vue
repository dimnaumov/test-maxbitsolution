<script setup lang="ts">
import type { Cocktail } from '~/types/cocktails';

defineProps({
  cocktail: {
    type: Object as PropType<Cocktail>,
    required: true,
  },
});

</script>

<template>
  <div class="cocktail">
    <div>
      <h1>{{ cocktail.strDrink }}</h1>

      <p>{{ cocktail.strCategory }}</p>

      <p>{{ cocktail.strAlcoholic }}</p>

      <p>{{ cocktail.strGlass }}</p>

      <h3>Instructions:</h3>

      <p>{{ cocktail.strInstructions }}</p>

      <h3>List of ingridients:</h3>

      <ul class="ingridients">
        <li
          v-for="(ingridient, measure) in cocktail.ingredients"
          :key="measure"
        >
          <div class="ingridients_item">
            <p>{{ measure }}</p>

            <p>{{ ingridient }}</p>
          </div>
        </li>
      </ul>
    </div>

    <div>
      <NuxtImg
        v-if="cocktail.strDrinkThumb"
        :src="cocktail.strDrinkThumb"
        :alt="cocktail.strDrink ?? 'cocktail'"
        class="image"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ingridients {
  margin: 0;
  padding: 0;
  list-style: none;
  background: none;

  &_item {
    display: grid;
    grid-template-columns: 1fr auto;
  }
}

.cocktail {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
}

.image {
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  max-width: 100%;
}
</style>
