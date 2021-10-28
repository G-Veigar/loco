<template>
  <div
    class="loco-render-app"
    @dragover="handleDragover"
    @drop="handleDrop">
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
  handleDragover (e: any):void {
    e.preventDefault()
  }

  handleDrop (e: any): void{
    const data = e.dataTransfer.getData('materialData')
    const files = e.dataTransfer.files
    e.preventDefault()
    const { x, y } = e
    window.parent.postMessage({
      type: 'drop',
      data: {
        dropPos: {
          x,
          y
        },
        component: data,
        type: files[0].type
      }
    }, '*')
  }
}
</script>

<style lang="scss">
@import '@/style/var.scss';

.loco-render-app {
  height: 100vh;
  color: $mainFontColor;
}
</style>
