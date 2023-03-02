<template>
  <main>
    <h1 class="title">Bookmarks</h1>
    <span class="subtitle">Toggle topics to show</span>
    <FiltersList :topics="topicsList" />
    <SliderList :items="discoverStore?.items" />
  </main>
</template>

<script lang="ts">
import FiltersList from "./FiltersList.vue";
import SliderList from "./SliderList.vue";
import { useDiscoverStore } from "../stores/discover";
import { topicsList } from "../helpers/constants";
export default {
  components: {
    FiltersList,
    SliderList,
  },
  setup() {
    const discoverStore = useDiscoverStore();
    return { discoverStore, topicsList };
  },
};
</script>

<style scoped>
.title {
  padding: 1rem 2.5rem;
}
.subtitle {
  padding: 2.5rem;
}
</style>
