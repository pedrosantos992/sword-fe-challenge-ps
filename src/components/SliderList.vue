<template>
  <ul class="list">
    <li v-for="item in items">
      <div class="img-container">
        <span class="label">{{ item.name }}</span>
        <img :src="item.image" :alt="item.name + 'Img'" class="image" />
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  props: ["items"],
};
</script>

<style scoped>
.list {
  display: flex;
  flex-direction: row;
  gap: 16px;
}
.list li {
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
.img-container .image {
  width: 100%;
}
</style>
