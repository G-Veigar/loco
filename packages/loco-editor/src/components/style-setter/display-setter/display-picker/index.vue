<script lang="ts">
import pickerBar from "../../../base-input/picker-bar/index.vue";
import pickerBarItem from "../../../base-input/picker-bar/picker-bar-item.vue";
</script>

<template>
  <div class="display-picker">
    <picker-bar>
      <picker-bar-item>block</picker-bar-item>
      <picker-bar-item>flex</picker-bar-item>
      <picker-bar-item>grid</picker-bar-item>
      <picker-bar-item>inline</picker-bar-item>
      <picker-bar-item>none</picker-bar-item>
      <picker-bar-item>inline</picker-bar-item>
    </picker-bar>
  </div>
</template>

<style lang="scss" scoped>
@import "@/style/var.scss";
.display-picker {
  flex: auto;
}
</style>
