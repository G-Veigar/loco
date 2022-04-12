<script lang="ts" setup>
import { ref, computed } from "vue";
import leftBarNav from "./components/left-bar-nav.vue";
import toolHeader from "./components/tool-header.vue";
import componentLib from "../component-lib/component-lib.vue";
import extensionLib from "../extension-lib/index.vue";
import assetsManager from "../assets-manager/index.vue";
import componentTree from "@/modules/component-tree/index.vue";
import flowManager from "../flow-setter/flow-manager.vue";

const toolBarShow = ref(true);

let currentPluginName = ref("组件库");

// TODO: plugins打通store
const plugins = {};

const mockPluginList = [
  {
    name: "组件库",
    icon: "icon-ts-tubiao_component",
    component: componentLib,
  },
  {
    name: "组件树",
    icon: "icon-node-tree",
    component: componentTree,
  },
  {
    name: "逻辑管理",
    icon: "icon-flow",
    component: flowManager,
  },
  { name: "页面管理", icon: "icon-file-text-fill" },
  {
    name: "静态资源管理",
    icon: "icon-folder-open-fill",
    component: assetsManager,
  },
  {
    name: "扩展",
    icon: "icon-shopping-fill",
    component: extensionLib,
  },
  { name: "审查", icon: "icon-contentAudit" },
];

const mockBottomPluginList = [
  { name: "文档", icon: "icon-read-fill" },
  { name: "设置", icon: "icon-setting-fill" },
];

// const pluginList = computed(() => {
//   const list = [];
//   for (const pluginName in plugins) {
//     list.push({
//       name: pluginName,
//       icon: plugins[pluginName].icon,
//     });
//   }
//   return list;
// });

const currentPluginComponent = computed(() => {
  const currentPlugin = mockPluginList.find((plugin: any) => {
    return plugin.name === currentPluginName.value;
  });
  return currentPlugin?.component;
});

function handleClose(): void {
  toolBarShow.value = false;
  currentPluginName.value = "";
}

function handlePluginChange(plugin: string): void {
  if (currentPluginName.value === plugin) {
    toolBarShow.value = !toolBarShow.value;
    if (!toolBarShow.value) {
      currentPluginName.value = "";
    }
  } else {
    currentPluginName.value = plugin;
    toolBarShow.value = true;
  }
}
</script>

<template>
  <div id="editor-left-bar">
    <left-bar-nav
      :top-plugins="mockPluginList"
      :bottom-plugins="mockBottomPluginList"
      :current="currentPluginName"
      @pluginChange="handlePluginChange"
    ></left-bar-nav>
    <div class="tool-bar" v-show="toolBarShow">
      <tool-header
        :title="currentPluginName"
        @close="handleClose"
      ></tool-header>
      <component
        v-if="currentPluginComponent"
        :is="currentPluginComponent"
      ></component>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/style/var.scss";

#editor-left-bar {
  width: $leftBarWidth;
  overflow: visible;
  position: relative;

  .tool-bar {
    background-color: #aaa;
    position: absolute;
    min-width: $leftToolBarWidth;
    bottom: 0;
    left: $leftBarWidth;
    top: $headerTopHeight;
    border-right: 1px solid $mainBorderColor;
    background-color: $leftBarDetailBgColor;
    display: flex;
    flex-direction: column;
  }
}
</style>
