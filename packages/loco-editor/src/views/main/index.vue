<script lang="ts" setup>
import { onMounted, ref } from "vue";
import EditorLeftBar from "./components/editor-left-bar/editor-left-bar.vue";
import EditorZone from "./components/editor-zone/editor-zone.vue";
import ExpandPanel from "./components/expand-panel/expand-panel.vue";
import EventSetter from "./components/event-setter/event-setter.vue";
import EditorRightBar from "./components/editor-right-bar/editor-right-bar.vue";
import EditorLoading from "./components/editor-loading/editor-loading.vue";
import ContextMenu from "@/modules/context-menu/components/context-menu.vue";
import { initHotkeys } from "@/modules/hot-key";
import { HOOK, callHook } from "@/modules/hook";
import { initContextMenu } from "@/modules/context-menu";
import { initSchema } from "../../modules/loco-schema";
import { useEditorStore } from "@/stores/editor";

const editorStore = useEditorStore();

initHotkeys();
initContextMenu();
initSchema();

const eventSetterShow = ref(false);

onMounted(() => {
  callHook(HOOK.editorReady);
  // setTimeout(() => {
  //   eventSetterShow.value = true;
  // }, 3000);
});
</script>

<template>
  <div id="loco-editor">
    <link
      rel="stylesheet"
      href="//at.alicdn.com/t/c/font_2821318_f0nmgtw6di6.css"
    />
    <EditorLeftBar />
    <EditorZone />
    <EventSetter v-model="eventSetterShow" />
    <!-- <ExpandPanel v-if="editorStore.expandPanel.show" /> -->
    <EditorRightBar />
    <ContextMenu />
    <EditorLoading />
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
