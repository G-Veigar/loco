<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    title: string;
  }>(),
  {}
);

const emit = defineEmits<{
  (event: "close"): void;
}>();

function closeToolBar(): void {
  emit("close");
}
</script>

<template>
  <div class="tool-header">
    <div class="tool-header-main">{{ title }}</div>
    <div class="close-btn" @click="closeToolBar">
      <i class="iconfont icon-close1"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/style/var.scss";

.tool-header {
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $mainFontColor;
  padding: 10px;
  border-bottom: 1px solid $mainBorderColor;
  font-size: 14px;

  .icon-close1 {
    font-size: 16px;
  }

  .close-btn {
    &:hover {
      color: $optionHoveredColor;
    }
  }
}
</style>
