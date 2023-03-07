<template>
  <ul class="pill-btn-list">
    <li v-for="topic in topics">
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
  action: Function,
});

const discoverStore = useDiscoverStore();

const { items } = discoverStore;
</script>

<style scoped>
.pill-btn-list {
  display: flex;
  flex-direction: row;
  gap: 16px;
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

.pill-btn-list li:hover {
  background-color: var(--sw-green-fade);
  color: var(--sw-silver);
}

.pill-btn-list li {
  list-style-type: none;
}
</style>
