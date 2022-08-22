<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { initMonaco } from "./init-monaco";
import type * as monaco from "monaco-editor";

const props = withDefaults(
  defineProps<{
    lang: string;
    value: string;
  }>(),
  {
    value: "alert(1)",
    lang: "javascript",
  }
);

const emit = defineEmits<{
  (event: "input", code: string): void;
}>();

let monacoEditor: monaco.editor.IStandaloneCodeEditor;

const editor = ref<HTMLDivElement>();

onMounted(() => {
  if (editor.value) {
    monacoEditor = initMonaco(editor.value, {
      value: props.value,
      readOnly: false,
      language: props.lang,
      theme: "vs-dark",
      fontSize: 16,
    });

    monacoEditor.onDidChangeModelContent((event) => {
      const codeStr = monacoEditor.getValue();
      emit("input", codeStr);
    });
  }
});
</script>

<template>
  <div class="code-editor" ref="editor"></div>
</template>

<style lang="scss">
.code-editor {
  width: 100%;
  height: 800px;
}
</style>
