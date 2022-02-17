<script lang="ts" setup>
import type { EditorPluginConfig } from "@/types";

const props = withDefaults(
  defineProps<{
    topPlugins: any;
    bottomPlugins: any;
    current: string;
  }>(),
  {}
);

const emit = defineEmits<{
  (event: "pluginChange", pluginName: string): void;
}>();

function changePlugin(item: EditorPluginConfig): void {
  emit("pluginChange", item.name);
}
</script>

<template>
  <div class="left-bar-nav">
    <div class="nav-top">
      <div
        class="plugin-item"
        :title="item.name"
        :class="{ active: current === item.name }"
        v-for="item in topPlugins"
        :key="item.label"
        @click="changePlugin(item)"
      >
        <i class="iconfont plugin-icon" :class="item.icon"></i>
      </div>
    </div>
    <div class="nav-bottom">
      <div
        class="plugin-item"
        :title="item.name"
        :class="{ active: current === item.name }"
        v-for="item in bottomPlugins"
        :key="item.label"
        @click="changePlugin(item)"
      >
        <i class="iconfont plugin-icon" :class="item.icon"></i>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/style/var.scss";

.left-bar-nav {
  width: $leftBarWidth;
  height: 100%;
  background-color: $leftBarNavBgColor;
  flex: none;
  box-sizing: border-box;
  border-right: 1px solid $mainBorderColor;
  padding-bottom: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.plugin-item {
  cursor: pointer;
  width: $leftBarWidth;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #cfcfcf;

  &.active {
    background: $mainBgColor;
    color: #fafafa;
  }

  &:hover {
    color: #fafafa;
  }

  .plugin-icon {
    font-size: 22px;
  }
}
</style>
