<script lang="ts" setup>
defineProps<{
  data: any;
}>();
</script>

<template>
  <div class="loco-slide-item">{{ data.id }}</div>
</template>

<style lang="scss" scoped>
.loco-slide-item {
  width: 100%;
  flex: none;
  background-color: #ddd;
}
</style>
