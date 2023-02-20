<script lang="ts" setup>
import LogicNode from "./node.vue";
import { initFlowStateUtil } from "../state/index";

const stateUtil = initFlowStateUtil();
console.log("fs: val1", stateUtil.value.$jimu.appInfo.hehe);
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
