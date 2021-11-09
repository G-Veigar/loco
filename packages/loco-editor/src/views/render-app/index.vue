<template>
  <div
    class="loco-render-app"
    @dragover="handleDragover"
    @drop="handleDrop">
    <loco-render :schema="schema"></loco-render>
    <link rel="stylesheet" href="//at.alicdn.com/t/font_2912932_j4fdpgcwuso.css">
  </div>
</template>

<script lang="ts">
import locoRender from '@/modules/loco-render/index.vue'
import locoComponent from '@/modules/loco-component'
import { app } from '@/app'
import { Vue, Options, Prop } from 'vue-property-decorator'
// import { ref } from 'vue'
// import demoSchema, { demoSchemaStr } from '../../modules/loco-schema/demo'
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

  handleDragover (e: any):void {
    e.preventDefault()
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
    messenger.emit('loco-drop', data)
  }

  mounted (): void{
    messenger.init(window.parent)
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
</style>
