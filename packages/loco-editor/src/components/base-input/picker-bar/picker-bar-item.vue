<script lang="ts" setup>
import { inject } from "vue";

const props = defineProps<{
  value: any;
}>();

const selectItem: ((item: any) => void) | undefined = inject("selectItem");

const currentValue = inject("currentValue");

function handleClick(): void {
  if (selectItem) {
    selectItem(props.value);
  }
}
</script>

<template>
  <div
    class="picker-bar-item"
    @click="handleClick"
    :class="{ selected: value === currentValue }"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss">
@import "@/style/var.scss";

.picker-bar-item {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $optionBgColor;
  color: $optionColor;
  cursor: default;

  &:not(:last-of-type) {
    margin-right: $optionMargin;
  }
  &.selected {
    background-color: $optionSelectedBgColor;
    color: $optionSelectedColor;
  }
  &:not(.selected):hover {
    background-color: $optionHoveredBgColor;
    color: $optionHoveredColor;
  }
}
</style>
