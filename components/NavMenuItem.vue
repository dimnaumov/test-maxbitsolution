<script setup lang="ts">
import type { MenuItem } from '~/types/navMenu';

const props = defineProps({
  item: {
    type: Object as PropType<MenuItem>,
    required: true,
  },
});

const linkClassNames = computed(() => ({
  'link-active': props.item.isActive,
}));
</script>

<template>
  <NuxtLink :to="`${item.link}`" :class="linkClassNames" class="link">
    {{ item.title }}
  </NuxtLink>
</template>

<style lang="scss" scoped>
.link {
  display: block;
  padding: 8px;
  text-decoration: none;
  color: black;

  &:hover {
    background-color: lightgreen;
  }

  &-active {
    color: white;
    background-color: green;
    cursor: default;

    &:hover {
      background-color: green;
    }
  }
}
</style>
