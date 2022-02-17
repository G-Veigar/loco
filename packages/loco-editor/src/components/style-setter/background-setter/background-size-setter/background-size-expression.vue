<script lang="ts" setup>
const props = defineProps<{
  backgroundSize: string | undefined;
}>();
</script>

<template>
  <div class="background-size-expression">
    <div class="background-root"></div>
  </div>
</template>

<style lang="scss">
.background-size-expression {
  background: url("./selected-bg.png") left top no-repeat;
  background-size: 24px;
  padding: 10px;
  .background-root {
    width: 36px;
    height: 28px;
    border: 1px solid #888;
    background-color: transparent;
  }
}
</style>
