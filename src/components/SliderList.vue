<template>
  <div class="header">
    <h1 class="title">{{ filterName }}</h1>
    <span v-if="!isBookmarksSlider" class="icon"
      ><fa-icon icon="fa-solid fa-chevron-down"
    /></span>
  </div>
  <ul class="list">
    <li v-for="item in items">
      <div class="img-container">
        <fa-icon
          v-if="isBookmarksSlider"
          class="star"
          icon="fa-star"
          @click="handleFav(item)"
        />
        <fa-icon
          v-else
          class="star"
          icon="fa-regular fa-star"
          @click="handleFav(item)"
        />
        <a :href="item.html_url" target="_blank">
          <img
            :src="'https://opengraph.githubassets.com/123abc/' + item.full_name"
            :alt="item.full_name + 'Img'"
            class="image"
        /></a>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useDiscoverStore } from "../stores/discover";
import { computed } from "vue";
const props = defineProps({
  items: Object,
  filterName: String,
  isBookmarksSlider: Boolean,
});

const discoverStore = useDiscoverStore();
const getBookmarks: any = computed(() => {
  return discoverStore.getBookmarks;
});
const handleFav = (item: any) => {
  discoverStore.handleFavorites(item);
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
}

.header .icon {
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
}
.header .title {
  padding: 1rem 2.5rem;
}
.list {
  display: flex;
  flex-direction: row;
  gap: 16px;
  max-width: fit-content;
  height: 200px;
  min-width: 400px;
  overflow-x: scroll;
}
.list li {
  margin-top: auto;
  margin-bottom: auto;
  list-style-type: none;
}
.img-container {
  background-color: var(--sw-silver);
  color: var(--sw-black);
  width: 222px;
  height: 111px;
  border-radius: 4px;
  cursor: pointer;
}
.img-container:hover {
  transform: scale(1.5);
  transition: all 0.2s ease-in-out;
  z-index: 2;
}
.img-container .label {
  vertical-align: top;
  padding: 3px;
  position: absolute;
  z-index: 1;
}
.img-container .star {
  vertical-align: top;
  padding: 3px;
  position: absolute;
  z-index: 1;
  right: 0;
  color: var(--sw-orange);
}
.img-container .image {
  width: 100%;
}

@media (max-width: 500px) {
  .header .title {
    padding: 1rem;
    font-size: 30px;
  }
  .list {
    min-width: 300px;
  }
}
</style>
