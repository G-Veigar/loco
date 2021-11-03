<template>
  <div class="slot-zone" :style="zoneStyle">
    slot-zone
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator'

@Options({
  name: 'slot-zone'
})
export default class BaseContainer extends Vue {
  @Prop({ type: String, required: true })
  id!: string;

  @Prop({ type: String, default: 'default' })
  name!: string;

  @Prop({ type: String, default: '100%' })
  width!: string;

  @Prop({ type: String, default: '100px' })
  height!: string;

  // 是否锁定slot的尺寸
  @Prop({ type: Boolean, default: false })
  sizeLock!: boolean;

  // 是否必需使用slot
  @Prop({ type: Boolean, default: false })
  required!: boolean;

  // slot可以使用的组件白名单
  @Prop({ type: Array, default: false })
  includes!: string[];

  get zoneStyle () {
    return {
      width: this.width,
      height: this.height
    }
  }

  handleDrop (e: any): void{
    // const data = e.dataTransfer.getData('materialData') as string
    // // 如果拖拽的组件不在白名单中
    // if (this.includes && !this.includes.includes(data)) {
    //   alert(`当前slot不允许使用${data}组件`)
    // }
    // // const files = e.dataTransfer.files
    // e.preventDefault()
    // e.stopPropagation()
    // const { x, y } = e
    // window.parent.postMessage({
    //   type: 'drop',
    //   data: {
    //     isDropToSlot: true,
    //     dropPos: {
    //       x,
    //       y
    //     },
    //     component: data,
    //     id: this.id
    //     // type: files[0].type
    //   }
    // }, '*')
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
  border: 3px dashed #FFA500;
  border-radius: 4px;
}
</style>
