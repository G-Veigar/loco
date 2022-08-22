<script lang="ts" setup>
import { ref } from "vue";
import { ElMessageBox } from "element-plus";

const props = withDefaults(
  defineProps<{
    modelValue: boolean;
  }>(),
  {
    modelValue: false,
  }
);

const emit = defineEmits<{
  (event: "update:modelValue", val: any): void;
}>();

const addState = () => {
  console.log("addState");
};

const importState = () => {
  console.log("importState");
};
</script>

<template>
  <el-dialog
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    title="Tips"
    width="30%"
  >
    <div>
      <div @click="addState">手动输入</div>
      <div @click="importState">导入数据</div>
      <div class="add-wrapper">
        <div>状态名</div>
        <div>状态类型</div>
        <div>状态描述</div>
        <div>初始值</div>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="$emit('update:modelValue', false)">Cancel</el-button>
        <el-button type="primary" @click="$emit('update:modelValue', false)"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
