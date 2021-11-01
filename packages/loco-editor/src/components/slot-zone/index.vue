<template>
  <div class="slot-zone" :style="zoneStyle" @drop="handleDrop">
    slot-zone
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator'

@Options({
  name: 'slot-zone'
})
export default class BaseContainer extends Vue {
  @Prop({ type: String, default: '100%' })
  width!: string;

  @Prop({ type: String, default: '100px' })
  height!: string;

  get zoneStyle () {
    return {
      width: this.width,
      height: this.height
    }
  }

  handleDrop (e: any): void{
    const data = e.dataTransfer.getData('materialData')
    // const files = e.dataTransfer.files
    e.preventDefault()
    e.stopPropagation()
    const { x, y } = e
    window.parent.postMessage({
      type: 'drop',
      data: {
        dropPos: {
          x,
          y
        },
        component: data
        // type: files[0].type
      }
    }, '*')
  }
}
</script>

<style lang="scss" scoped>
// @import './style.scss';
.slot-zone {
  flex: auto;
  background-color: #FFFACD;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed #FFA500;
  border-radius: 4px;
}
</style>
