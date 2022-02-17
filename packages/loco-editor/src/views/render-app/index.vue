<script lang="ts" setup>
import { ref, onMounted } from "vue";
import locoRender from "@/modules/loco-render/index.vue";
import locoComponent from "@/modules/loco-component";
import { app } from "@/app";
import Schema from "../../modules/loco-schema/schema.class";
import messenger from "@/modules/messenger";
import { useRouter, useRoute } from 'vue-router'

// const router = useRouter()
const route = useRoute()

console.log('route.query', route.query)

const renderMode = route.query.mode ? route.query.mode as string : 'prod'

app.use(locoComponent);

const schema: any = ref(null);
const hoverBoxStyle: any = ref(null);

function handleDragover(e: any): void {
  e.preventDefault();
}

function handleHover(e: any): void {
  const { nodeId } = e;
  const el = document.getElementById(nodeId);
  if (el) {
    const rectData = el.getBoundingClientRect();
    hoverBoxStyle.value = {
      left: `${rectData.left}px`,
      top: `${rectData.top}px`,
      width: `${rectData.width}px`,
      height: `${rectData.height}px`,
    };
  }
}

function handleDrop(e: any): void {
  const targetClass = e.target.classList;
  const data = e.dataTransfer.getData("materialData");
  // const files = e.dataTransfer.files

  e.preventDefault();
  // const { x, y } = e
  // window.parent.postMessage({
  //   type: 'drop',
  //   data: {
  //     dropPos: {
  //       x,
  //       y
  //     },
  //     component: data,
  //     type: files[0].type
  //   }
  // }, '*')
  if (data && schema.value) {
    const newNode = schema.value.createNode({
      tag: data,
      name: data,
    });
    schema.value.rootNode.appendChild(newNode);
    // TODO: 优化，找到更好的schema同步方式
    messenger.emit("loco-schema", {
      scopeNode: "rootNode",
      type: "addNewNode",
      params: {
        tag: data,
        name: data,
      },
    });
  }
}

onMounted(() => {
  messenger.init(window.parent, {});
  messenger.on("schemaInit", (data) => {
    schema.value = new Schema(data.data);
  });
});
</script>

<template>
  <div class="loco-render-app" @dragover="handleDragover" @drop="handleDrop">
    <loco-render
      :schema="schema"
      :mode="renderMode"
      @hover="handleHover"
    ></loco-render>
    <div class="hover-box" :style="hoverBoxStyle"></div>
    <link
      rel="stylesheet"
      href="//at.alicdn.com/t/font_2912932_j4fdpgcwuso.css"
    />
  </div>
</template>

<style lang="scss">
@import "@/style/var.scss";

.loco-render-app {
  height: 100vh;
  color: $mainFontColor;
}
.hover-box {
  position: fixed;
  border: 1px solid blue;
  left: 0;
  top: 0;
}
</style>
