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
import { defineComponent } from 'vue'
import schema, { hehe } from '../../modules/loco-schema/demo'

app.use(locoComponent)

export default defineComponent({
  name: 'render-app',
  components: {
    locoRender
  },
  methods: {
    handleDragover (e: any):void {
      e.preventDefault()
    },
    handleDrop (e: any): void{
      console.log('handleDrop', e)
      const targetClass = e.target.classList
      if (targetClass.contains('slot-zone')) {
        hehe()
      }
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
    }
  },
  setup () {
    return { schema }
  }

})
</script>

<style lang="scss">
@import '@/style/var.scss';

.loco-render-app {
  height: 100vh;
  color: $mainFontColor;
}
</style>
