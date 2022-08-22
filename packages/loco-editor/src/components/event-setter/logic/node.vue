<script lang="ts" setup>
import { ref } from "vue";
</script>

<template>
  <div class="logic-node">
    <div class="node1">且</div>
    <div class="node2">val1</div>
    <div class="node3">=</div>
    <div class="node4">4</div>
    <button class="btn btn-detete">x</button>
    <button class="btn btn-add">+</button>
  </div>
</template>

<style lang="scss">
@import "@/style/var.scss";

.logic-node {
  display: flex;
}
</style>
