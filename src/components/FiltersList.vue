<template>
  <ul class="pill-btn-list">
    <li
      v-for="topic in topics"
      :class="{ 'is-selected': selectedFilters!.includes(topic.name) }"
    >
      <PillButton
        :label="topic.name"
        @click="discoverStore.fetchItems(topic.value, 'stars')"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import PillButton from "./atoms/PillButton.vue";
import { useDiscoverStore } from "../stores/discover";

const props = defineProps({
  topics: Object,
  selectedFilters: Array,
  action: Function,
});

const discoverStore = useDiscoverStore();
</script>

<style scoped>
.pill-btn-list {
  display: flex;
  flex-direction: row;
  gap: 16px;
  max-width: fit-content;
  min-width: 300px;
  overflow-x: scroll;
}

.pill-btn-list li {
  border-radius: 20px;
  background-color: var(--sw-green);
  color: var(--sw-white);
  min-width: 150px;
  text-align: center;
  cursor: pointer;
  height: 40px;
}
.pill-btn-list .is-selected {
  background-color: var(--sw-green-selected);
}

.pill-btn-list li:hover {
  background-color: var(--sw-green-fade);
  color: var(--sw-silver);
}

.pill-btn-list li {
  list-style-type: none;
}
</style>
