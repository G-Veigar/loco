<script lang="ts" setup>
import { provide } from "vue";

const props = defineProps<{
  value: any;
}>();

provide("provide", props.value);
provide("selectItem", selectItem);

const emit = defineEmits<{
  (event: "select", val: any): void;
}>();

function selectItem(val: unknown): void {
  emit("select", val);
}
</script>

<template>
  <div class="picker-bar">
    <slot :selectedValue="value"></slot>
  </div>
</template>

<style lang="scss" scoped>
.picker-bar {
  background-color: transparent;
  display: flex;
  justify-content: center;
}
</style>
