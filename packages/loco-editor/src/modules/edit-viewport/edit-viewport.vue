<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import type { Ref } from "vue";
import messenger from "@/modules/messenger";
import demoSchema, { demoSchemaStr } from "@/modules/loco-schema/demo";

const props = defineProps<{
  width: number;
  height: number;
  horizontal: boolean;
}>();

const viewportStyle = computed(() => {
  // 旋转水平状态
  if (props.horizontal) {
    return {
      width: props.height + "px",
      height: props.width + "px",
    };
  } else {
    return {
      width: props.width + "px",
      height: props.height + "px",
    };
  }
});

function handleDragOver(e: any): void {
  console.log("handleDragOver", e);
}

const renderIframe: Ref<HTMLIFrameElement | null> = ref(null);

onMounted(() => {
  const $renderIframe = renderIframe.value;
  if ($renderIframe) {
    messenger.init($renderIframe.contentWindow, {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      "loco-schema": ({ type, scopeNode, params }) => {
        if (type === "addNewNode") {
          // demoSchema.rootNode()
        }
      },
    });
    // TODO: 优化messenger.emit，改为需要先ready
    setTimeout(() => {
      messenger.emit("schemaInit", demoSchemaStr);
    }, 2000);
  }
});
</script>

<template>
  <div
    class="edit-viewport"
    :style="viewportStyle"
    @dragover.prevent="handleDragOver"
  >
    <iframe
      :width="width"
      :height="height"
      src="/render-app"
      frameborder="0"
      ref="renderIframe"
    ></iframe>
  </div>
</template>

<style lang="scss">
@import "@/style/var.scss";

.edit-viewport {
  border: 1px solid #000;
  background-color: #fff;
  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
