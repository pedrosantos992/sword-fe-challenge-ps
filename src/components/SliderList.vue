<template>
  <div class="header">
    <h1 class="title">Vue</h1>
    <span class="icon"><fa-icon icon="fa-solid fa-chevron-down" /></span>
  </div>
  <ul class="list">
    <li v-for="item in items">
      <div class="img-container">
        <a :href="item.html_url" target="_blank">
          <fa-icon v-if="item.isFav" class="star" icon="fa-star" />
          <fa-icon v-else class="star" icon="fa-regular fa-star" />
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
const props = defineProps({
  items: Object,
});
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
  height: 170px;
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
</style>
