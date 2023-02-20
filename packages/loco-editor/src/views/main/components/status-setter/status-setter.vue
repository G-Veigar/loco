<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    visible: boolean;
  }>(),
  {
    visible: false,
  }
);

const emit = defineEmits<{
  (event: "update:modelValue", val: any): void;
}>();

function handleVisibleChanged(e: any): void {
  emit("update:modelValue", e);
}
</script>

<template>
  <div>hehe</div>
</template>

<style lang="scss">
@import "@/style/var.scss";
</style>
