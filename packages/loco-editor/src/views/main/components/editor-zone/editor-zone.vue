<script lang="ts" setup>
import { computed } from "vue";
import headerTop from "./components/header-top.vue";
import EditViewport from "@/modules/edit-viewport/edit-viewport.vue";
import { useEditorStore } from "@/stores/editor";

const editorStore = useEditorStore();

const editViewport = computed(() => {
  return editorStore.editViewport;
});

const props = defineProps<{
  msg: string;
}>();
</script>

<template>
  <div id="editor-zone">
    <header-top></header-top>
    <div class="edit-main">
      <EditViewport
        :width="editViewport.width"
        :height="editViewport.height"
        :horizontal="editViewport.horizontal"
      ></EditViewport>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/style/var.scss";

#editor-zone {
  flex: auto;
  background-color: $mainZoneBg;
  display: flex;
  flex-direction: column;

  .edit-main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: auto;
  }
}
</style>
