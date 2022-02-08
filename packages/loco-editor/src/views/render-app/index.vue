<template>
  <div
    class="loco-render-app"
    @dragover="handleDragover"
    @drop="handleDrop">
    <loco-render
      :schema="schema"
      mode="edit"
      @hover="handleHover"></loco-render>
    <div class="hover-box" :style="hoverBoxStyle"></div>
    <link rel="stylesheet" href="//at.alicdn.com/t/font_2912932_j4fdpgcwuso.css">
  </div>
</template>

<script lang="ts">
import locoRender from '@/modules/loco-render/index.vue'
import locoComponent from '@/modules/loco-component'
import { app } from '@/app'
import { Vue, Options, Prop } from 'vue-property-decorator'
import Schema from '../../modules/loco-schema/schema.class'
import messenger from '@/modules/messenger'

app.use(locoComponent)

@Options({
  name: 'render-app',
  components: {
    locoRender
  }
})
export default class RenderApp extends Vue {
  schema:any = null
  hoverBoxStyle:any = null

  handleDragover (e: any):void {
    e.preventDefault()
  }

  handleHover (e: any):void {
    const { nodeId } = e
    const el = document.getElementById(nodeId)
    if (el) {
      const rectData = el.getBoundingClientRect()
      this.hoverBoxStyle = {
        left: `${rectData.left}px`,
        top: `${rectData.top}px`,
        width: `${rectData.width}px`,
        height: `${rectData.height}px`
      }
    }
  }

  handleDrop (e: any): void{
    const targetClass = e.target.classList
    const data = e.dataTransfer.getData('materialData')
    // const files = e.dataTransfer.files

    e.preventDefault()
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
    if (data) {
      const newNode = this.schema.createNode({
        tag: data,
        name: data
      })
      this.schema.rootNode.appendChild(newNode)
      // TODO: 优化，找到更好的schema同步方式
      messenger.emit('loco-schema', {
        scopeNode: 'rootNode',
        type: 'addNewNode',
        params: {
          tag: data,
          name: data
        }
      })
    }
  }

  mounted (): void{
    messenger.init(window.parent, {})
    messenger.on('schemaInit', data => {
      this.schema = new Schema(data.data)
    })
  }
}
</script>

<style lang="scss">
@import '@/style/var.scss';

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
