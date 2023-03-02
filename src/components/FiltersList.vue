<template>
  <ul class="pill-btn-list">
    <li v-for="topic in topics">
      <PillButton :label="topic.name" :filter="topic.link" />
    </li>
  </ul>
</template>

<script lang="ts">
import PillButton from "./atoms/PillButton.vue";
export default {
  components: { PillButton },
  props: ["topics"],
};
</script>

<style scoped>
.pill-btn-list {
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-top: 1rem;
  margin-bottom: 3rem;
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
