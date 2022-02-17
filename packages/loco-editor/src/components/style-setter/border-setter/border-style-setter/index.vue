<script lang="ts">
import pickerBar from "../../../base-input/picker-bar/index.vue";
import pickerBarItem from "../../../base-input/picker-bar/picker-bar-item.vue";
</script>

<template>
  <div class="border-style-setter">
    <picker-bar>
      <picker-bar-item>x</picker-bar-item>
      <picker-bar-item>——</picker-bar-item>
      <picker-bar-item>---</picker-bar-item>
      <picker-bar-item>···</picker-bar-item>
    </picker-bar>
  </div>
</template>

<style lang="scss">
@import "@/style/var.scss";

.border-style-setter {
  flex: auto;
}
</style>
