<template>
  <div
    class="edit-viewport"
    :style="viewportStyle"
    @dragover.prevent="handleDragOver">
    <iframe
    :width="width"
    :height="height"
    src="/render-app" frameborder="0"></iframe>
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator'
// import tp from './tp.html'

@Options({
  name: 'editViewport'
})
export default class EditViewport extends Vue {
  @Prop({ type: Number, required: true })
  width!: number

  @Prop({ type: Number, required: true })
  height!: number

  @Prop({ type: Boolean, required: true })
  horizontal!: boolean

  // srcdoc = '<h1>hehe</h1>'

  get viewportStyle ():{width: string, height: string} {
    // 旋转水平状态
    if (this.horizontal) {
      return {
        width: this.height + 'px',
        height: this.width + 'px'
      }
    } else {
      return {
        width: this.width + 'px',
        height: this.height + 'px'
      }
    }
  }

  handleDragOver (e: any) :void {
    console.log('handleDragOver', e)
  }
}
</script>

<style lang="scss">
@import '@/style/var.scss';

.edit-viewport {
  border: 1px solid #000;
  background-color: #fff;
  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
