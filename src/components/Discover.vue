<template>
  <main>
    <!--<div class="bookmarks">
      <h1 class="title">Bookmarks</h1>
      <SliderList :items="discoverStore?.favs" />
    </div>-->
    <div class="topics-list">
      <span class="subtitle">Toggle topics to show</span>
      <FiltersList
        :topics="topicsList"
        :action="() => discoverStore.fetchItems()"
      />
    </div>
    <div>
      <SliderList :items="getItems.items" />
    </div>
  </main>
</template>

<script setup lang="ts">
import FiltersList from "./FiltersList.vue";
import SliderList from "./SliderList.vue";
import { useDiscoverStore } from "../stores/discover";
import { topicsList } from "../helpers/constants";
import { onMounted, computed } from "vue";

const discoverStore = useDiscoverStore();
const getItems: any = computed(() => {
  return discoverStore.getItems;
});

onMounted(() => {
  discoverStore.fetchItems();
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
</style>
