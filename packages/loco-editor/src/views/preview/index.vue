<script lang="ts" setup>
import { ref, onMounted } from "vue";
import locoRender from "@/modules/loco-render/index.vue";
import locoComponent from "@/modules/loco-component";
import { app } from "@/app";
// import Schema from "../../modules/loco-schema/schema.class";
import messenger from "@/modules/messenger";
import demoSchema, { demoSchemaStr } from "@/modules/loco-schema/demo";

app.use(locoComponent);

const schema: any = ref(demoSchema);
const hoverBoxStyle: any = ref(null);

onMounted(() => {
  // messenger.init(window.parent, {});
  // messenger.on("schemaInit", (data) => {
  //   schema.value = new Schema(data.data);
  // });
});
</script>

<template>
  <div class="loco-render-app">
    <loco-render :schema="schema" mode="prod"></loco-render>
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
