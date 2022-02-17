<script lang="ts" setup>
import { ref } from "vue";
import borderOption from "./border-option.vue";

const borderOptions = ["top", "bottom", "left", "right", "all"];
const currentBorder = ref("left");

function handleSelectBorder(type: string): void {
  currentBorder.value = type;
}
</script>

<template>
  <div class="border-picker">
    <!-- 四个border -->
    <border-option
      v-for="item in borderOptions"
      :key="item"
      :selected-value="currentBorder"
      class="border-option-item"
      :class="item"
      :type="item"
      @select="handleSelectBorder"
    ></border-option>
  </div>
</template>

<style lang="scss" scoped>
.border-picker {
  display: grid;
  gap: 4px;
  .border-option-item {
    &.top {
      grid-column-start: 2;
      grid-row-start: 1;
    }

    &.right {
      grid-column-start: 3;
      grid-row-start: 2;
    }

    &.bottom {
      grid-column-start: 2;
      grid-row-start: 3;
    }

    &.left {
      grid-column-start: 1;
      grid-row-start: 2;
    }

    &.all {
      grid-column-start: 2;
      grid-row-start: 2;
    }
  }
}
</style>
