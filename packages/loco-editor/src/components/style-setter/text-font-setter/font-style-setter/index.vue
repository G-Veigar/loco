<script lang="ts" setup>
import pickerBar from "../../../base-input/picker-bar/index.vue";
import pickerBarItem from "../../../base-input/picker-bar/picker-bar-item.vue";
</script>

<template>
  <div class="font-style-setter">
    <picker-bar>
      <picker-bar-item><span class="bold">B</span></picker-bar-item>
      <picker-bar-item><span class="italic">I</span></picker-bar-item>
      <picker-bar-item><span class="underline">U</span></picker-bar-item>
      <picker-bar-item><span class="line-through">S</span></picker-bar-item>
    </picker-bar>
  </div>
</template>

<style lang="scss" scoped>
.font-style-setter {
  width: 200px;

  .bold {
    font-weight: bold;
  }

  .italic {
    font-style: italic;
  }

  .underline {
    text-decoration: underline;
  }

  .line-through {
    text-decoration: line-through;
  }
}
</style>
