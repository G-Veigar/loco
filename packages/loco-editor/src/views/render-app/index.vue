<template>
  <div class="loco-render-app">
    <loco-render></loco-render>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import locoRender from '@/modules/loco-render/index.vue'
import locoComponent from '@/modules/loco-component'
import { app } from '@/app'

app.use(locoComponent)

@Options({
  name: 'render-app',
  components: {
    locoRender
  }
})
export default class RenderApp extends Vue {
}
</script>

<style lang="scss">
@import '@/style/var.scss';

.loco-render-app {
  height: 100vh;
  display: flex;
  color: $mainFontColor;
}
</style>
