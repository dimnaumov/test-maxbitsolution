<script setup lang="ts">
import type { MenuItem } from '~/types/navMenu';

defineProps({
  items: {
    type: Array as PropType<MenuItem[]>,
    required: true,
  },
});
</script>

<template>
  <nav>
    <ul class="menu">
      <li
        v-for="item in items"
        :key="item.title"
        class="menu_item"
      >
        <NavMenuItem :item="item" />
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.menu {
  margin: 0;
  padding: 0;
  list-style: none;
  background: none;

  &_item {
    &:not(:first-child) {
      border-top: 1px solid gray;
    }
  }
}
</style>
