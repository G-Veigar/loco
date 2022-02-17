<script lang="ts" setup>
import { ref } from "vue";
import type { Ref } from "vue";

const props = withDefaults(
  defineProps<{
    menu: any;
  }>(),
  {}
);

const menuItem: Ref<HTMLDivElement | null> = ref(null);

const emit = defineEmits<{
  (event: "child", childInfo: { left: number; top: number; childs: [] }): void;
}>();

function handleMouseEnter(): void {
  const $menuItem = menuItem.value;
  if ($menuItem) {
    const { left, top } = $menuItem.getBoundingClientRect();
    emit("child", {
      left,
      top,
      childs: props.menu.childs,
    });
  }
}
</script>

<template>
  <div class="context-menu-item" ref="menuItem" @mouseenter="handleMouseEnter">
    <div class="menu-label">
      {{ menu.label }}
    </div>
    <i
      class="iconfont icon-caret-right"
      v-if="menu.childs && menu.childs.length > 0"
    ></i>
  </div>
</template>

<style lang="scss">
@import "@/style/var.scss";
.context-menu-item {
  height: 26px;
  line-height: 26px;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  position: relative;

  &:hover {
    background-color: $optionHoveredBgColor;
  }

  .iconfont {
    font-size: 12px;
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
