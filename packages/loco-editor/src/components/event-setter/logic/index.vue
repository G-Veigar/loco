<script lang="ts" setup>
import { ref } from "vue";
import LogicNode from "./node.vue";
</script>

<template>
  <div class="lo">
    <div class="setter-main" contenteditable="true">
      <logic-node></logic-node>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/style/var.scss";

.event-setter {
  .float-panel {
    position: absolute;
    right: 100%;
    height: 100%;
  }
}
</style>
