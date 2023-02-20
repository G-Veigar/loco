<script lang="ts" setup>
import { onMounted, ref } from "vue";
import EditorLeftBar from "./components/editor-left-bar/editor-left-bar.vue";
import EditorCanvas from "./components/editor-canvas/editor-canvas.vue";
// import ExpandPanel from "./components/expand-panel/expand-panel.vue";
import EventSetter from "./components/event-setter/event-setter.vue";
import EditorRightBar from "./components/editor-right-bar/editor-right-bar.vue";
import { HOOK, callHook } from "@/modules/hook";
import { initSchema } from "../../modules/loco-schema";
import { useEditorStore } from "@/stores/editor";
import { allInOneSearchPlugin } from "../../modules/editor-plugin/all-in-one-search";
import { hotKeyPlugin } from "../../modules/editor-plugin/hot-key";
import { contextMenuPlugin } from "../../modules/editor-plugin/context-menu";

import { LocoEditor } from "../../modules/editor/index";

const editorStore = useEditorStore();

const locoEditor = new LocoEditor();
const initProgress = locoEditor.initProgress;

locoEditor
  .use(hotKeyPlugin)
  .use(allInOneSearchPlugin)
  .use(contextMenuPlugin)
  .init();

initSchema();

// const eventSetterShow = ref(true);

onMounted(() => {
  // callHook(HOOK.editorReady);
  locoEditor.ready();
});
</script>

<template>
  <div id="loco-editor">
    <link
      rel="stylesheet"
      href="//at.alicdn.com/t/c/font_2821318_f0nmgtw6di6.css"
    />
    <div id="loading-mask" v-if="initProgress < 100">{{ initProgress }} %</div>
    <EditorLeftBar />
    <EditorCanvas />
    <EditorRightBar />
    <!-- <EventSetter v-model="eventSetterShow" /> -->
    <!-- <ExpandPanel v-if="editorStore.expandPanel.show" /> -->
  </div>
</template>

<style lang="scss">
@import "@/style/var.scss";

#loco-editor {
  height: 100vh;
  display: flex;
  color: $mainFontColor;

  .el-notification {
    padding: 10px !important;

    &.right {
      right: 308px !important;
    }
  }
}

#loading-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  font-size: 40px;
  color: #888;
}

.el-overlay {
  background-color: rgba(0, 0, 0, 0.6) !important;
}

.el-message-box {
  box-shadow: rgb(0 0 0 / 30%) 0px 0px 0px 1px;
  background-color: $mainBgColorLight !important;
  border: none;
  border-radius: 3px !important;
}

.el-message-box__header {
  background-color: $leftBarDetailBgColor !important;
  border-bottom: 1px solid #212121;
  .el-message-box__title {
    color: $mainFontColor !important;
  }
  .el-message-box__close {
    color: $mainFontColor !important;
  }
}

.el-message-box__container {
  color: $mainFontColor !important;
}

.el-message-box__btns {
  .el-button {
    border: 1px solid rgb(51, 51, 51) !important;
    border-radius: 2px !important;
  }
}
</style>
