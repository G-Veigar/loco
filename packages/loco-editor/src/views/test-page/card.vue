<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    text: string;
  }>(),
  {
    text: "card",
  }
);
</script>

<template>
  <div class="loco-card">{{ text }}</div>
</template>

<style lang="scss" scoped>
.loco-card {
  border: 1px solid #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}
</style>
