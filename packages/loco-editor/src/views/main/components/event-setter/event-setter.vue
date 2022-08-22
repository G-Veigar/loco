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
  <el-dialog
    :modelValue="visible"
    @update:modelValue="handleVisibleChanged"
    title="Tips"
    width="30%"
  >
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleVisibleChanged(false)">Cancel</el-button>
        <el-button type="primary" @click="handleVisibleChanged(false)"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss">
@import "@/style/var.scss";
</style>
