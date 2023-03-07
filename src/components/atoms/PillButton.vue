<template>
  <span class="btn-label">{{ label }}</span>
</template>

<script setup lang="ts">
const props = defineProps({
  label: String,
});
</script>

<style scoped>
.btn-label {
  line-height: 40px;
  vertical-align: middle;
}
</style>
