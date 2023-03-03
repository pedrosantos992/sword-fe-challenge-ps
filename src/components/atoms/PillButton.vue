<template>
  <span class="btn-label">{{ label }}</span>
</template>

<script lang="ts">
export default {
  props: ["label"],
};
</script>

<style scoped>
.btn-label {
  line-height: 40px;
  vertical-align: middle;
}
</style>
