<template>
  <main>
    <SliderList
      v-if="getBookmarks.length"
      :items="getBookmarks"
      :filterName="'Bookmarks'"
      :isBookmarksSlider="true"
    />
    <div class="topics-list">
      <span class="subtitle">Toggle topics to show</span>
      <FiltersList
        :topics="topicsList"
        :selectedFilters="selectedFilters"
        :action="() => discoverStore.fetchItems()"
      />
    </div>
    <div v-for="item in getItems">
      <SliderList :items="item.items" :filterName="item.language" />
    </div>
  </main>
</template>

<script setup lang="ts">
import FiltersList from "./FiltersList.vue";
import SliderList from "./SliderList.vue";
import { useDiscoverStore } from "../stores/discover";
import { topicsList } from "../helpers/constants";
import { computed } from "vue";

const discoverStore = useDiscoverStore();
const getItems: any = computed(() => {
  return discoverStore.getItems;
});
const getBookmarks: any = computed(() => {
  return discoverStore.getBookmarks;
});
const selectedFilters: any = computed(() => {
  return discoverStore.getSelectedFilters;
});
</script>

<style scoped>
.bookmarks {
  margin-bottom: 3rem;
}

.topics-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.subtitle {
  padding: 1rem 2.5rem;
}

@media (max-width: 500px) {
  .subtitle {
    padding: 1rem;
  }
}
</style>
