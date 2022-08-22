<script lang="ts" setup>
import { ref } from "vue";
</script>

<template>
  <div id="editor-loading">
    <div class="loading-bar"></div>
  </div>
</template>

<style lang="scss">
@import "@/style/var.scss";
.editor-loading {
  display: flex;
  justify-content: center;
  align-items: center;

  .editor-loading {
    width: 240px;
    height: 8px;
    border: 1px solid blue;
  }
}
</style>
