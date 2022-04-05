<script lang="ts" setup>
import flowSetter from "../flow-setter/flow-setter.vue";
</script>

<template>
  <div class="expand-panel">
    <flow-setter></flow-setter>
  </div>
</template>

<style lang="scss">
@import "@/style/var.scss";

.expand-panel {
  position: absolute;
  top: $headerTopHeight;
  bottom: 0;
  z-index: 1;
  background-color: #fff;
  right: $editorRightBarWidth;
  border-left: 1px solid #999;
}
</style>
