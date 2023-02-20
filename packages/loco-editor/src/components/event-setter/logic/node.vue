<script lang="ts" setup>
import { ref, onMounted } from "vue";
import type { Ref } from "vue";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import "highlight.js/styles/vs.css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("css", css);

const code: Ref<HTMLElement | null> = ref(null);

onMounted(() => {
  if (code.value) {
    hljs.highlightBlock(code.value);
  }
});
</script>

<template>
  <div class="container">
    <pre class="language-javascript" ref="code">
      <code>
        button.name || '123'
      </code>
    </pre>
  </div>
</template>

<style lang="scss">
@import "@/style/var.scss";

.logic-node {
  display: flex;
}
</style>
