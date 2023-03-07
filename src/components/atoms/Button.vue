<template>
  <button class="button" type="submit">{{ label }}</button>
</template>

<script setup lang="ts">
const props = defineProps({
  label: String,
});
</script>

<style scoped>
.button {
  width: 100%;
  background-color: var(--sw-green);
  color: var(--sw-white);
  cursor: pointer;
  height: 40px;
  border: unset;
  border-radius: 4px;
  font-size: 18px;
}
.button:hover {
  background-color: var(--sw-green-fade);
  color: var(--sw-silver);
}
</style>
