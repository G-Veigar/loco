<script lang="ts" setup>
import { ref } from "vue";
import LogicSetter from "./logic/index.vue";
</script>

<template>
  <div class="event-setter">
    <div class="setter-main">
      <logic-setter></logic-setter>
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
