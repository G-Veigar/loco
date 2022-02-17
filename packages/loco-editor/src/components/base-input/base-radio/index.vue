<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    options: { value: any; label: string }[];
    value: any;
  }>(),
  {}
);

const emit = defineEmits<{
  (event: "update:modelValue", val: any): void;
}>();

function handleValueChanged(e: any): void {
  emit("update:modelValue", e);
}
</script>

<template>
  <div class="radio-wrapper">
    <el-radio
      v-for="item in options"
      :key="item.label"
      :label="item.value"
      :modelValue="value"
      @update:modelValue="handleValueChanged"
      >{{ item.label }}</el-radio
    >
  </div>
</template>

<style lang="scss">
.radio-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
  .el-radio {
    margin-right: 0;
  }
}
</style>
