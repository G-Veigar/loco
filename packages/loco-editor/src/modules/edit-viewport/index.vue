<template>
  <div class="edit-viewport" :style="viewportStyle">
    edit-viewport
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator'

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
}
</script>

<style lang="scss">
@import '@/style/var.scss';

.edit-viewport {
  border: 1px solid #000;
  background-color: #fff;
}
</style>
