<template>
  <div class="loco-focus-mask" v-if="visible" @click="handleMaskClick">
    <div
      class="guide-main"
      :class="{transition: transition}"
      :style="guideMainStyle">
      <div
        class="guide-main-inner"
        :class="{shadow: shadow}">
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop, Watch } from 'vue-property-decorator'
import { throttle } from 'lodash-es'

function fixedBody () {
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  document.body.style.cssText += 'position:fixed;width:100%;top:-' + scrollTop + 'px;'
}

function looseBody () {
  var body = document.body
  body.style.position = ''
  var top = body.style.top
  document.body.scrollTop = document.documentElement.scrollTop = -parseInt(top)
  body.style.top = ''
}

@Options({
  name: 'loco-focus-mask'
})
export default class LocoSwiper extends Vue {
  // 引导元素，一个DOM对象
  @Prop({ required: true })
  el!: any

  // modal显示
  @Prop({ type: Boolean, required: true })
  visible!: boolean

  // 引导主体是否自动加radius
  // @Prop({ type: Boolean, default: true })
  // radius!: boolean

  // 在多个引导dom切换时，是否加过渡效果
  @Prop({ type: Boolean, default: true })
  transition!: boolean

  // 引导主体是否加box-shadow
  @Prop({ type: Boolean, default: true })
  shadow!: boolean

  // 引导主体的padding
  @Prop({ type: Number, default: 6 })
  padding!: number

  resizeTag = 1 // 记录resize变更，为了触发computed计算

  get domRect ():any {
    // 这里的resizeTag只是为了重新计算
    if (!this.el || !this.resizeTag) return null
    const rect = this.el.getBoundingClientRect()
    const rectData = {
      left: rect.left,
      top: rect.top,
      bottom: rect.bottom,
      right: rect.right,
      width: rect.width,
      height: rect.height,
      borderRadius: ''
    }
    // 处理border-radius
    // if (this.radius) {
    //   const domStyle = window.getComputedStyle(this.el)
    //   console.log(' domStyle.borderRadius', domStyle.borderRadius)
    //   rectData.borderRadius = domStyle.borderRadius
    // }
    return rectData
  }

  get guideMainStyle () {
    if (!this.domRect) return {}
    let { left, top, width, height } = this.domRect
    // 处理shadow，如果有阴影，扩大main的尺寸
    if (this.padding) {
      width += this.padding
      height += this.padding
      left -= (this.padding / 2)
      top -= (this.padding / 2)
    }
    return {
      width: `${width}px`,
      height: `${height}px`,
      left: `${left}px`,
      top: `${top}px`
    }
  }

  // get guideMainInnerStyle () {
  //   if (!this.domRect || !this.radius) return null
  //   const { borderRadius } = this.domRect
  //   return {
  //     borderRadius: borderRadius
  //   }
  // }

  handleMaskClick (): void{
    this.$emit('input', false)
  }

  handleResize ():void {
    this.resizeTag++
  }

  @Watch('visible', { immediate: true })
  onVisibleChanged (newVal: boolean):void {
    newVal ? fixedBody() : looseBody()
  }

  created (): void{
    this.handleResize = throttle(this.handleResize, 300)
  }

  mounted (): void{
    window.addEventListener('resize', this.handleResize)
  }

  beforeDestroy ():void {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>

<style lang="postcss" scoped>
.loco-focus-mask {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 100;
}
.mask-div {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);

}
.guide-main {
  position: absolute;
}
.guide-main.transition {
  transition: left 0.4s, top 0.4s, width 0.4s, height 0.4s;
}
.guide-main-inner {
  box-sizing: content-box;
  width: 100%;
  height:100%;
  border: 100vmax solid rgba(0, 0, 0, 0.7);
  position: absolute;
  left: -100vmax;
  top: -100vmax;
}
.guide-main-inner.shadow {
  box-shadow: inset 0 0 0 0 rgba(0,0,0,0.75);
}
.mask-top {
  width: 100%;
  left: 0;
  top: 0;
}
.mask-left {
  left: 0;
}
.mask-right {
  right: 0;
}
.mask-bottom {
  width: 100%;
  left: 0;
  bottom: 0;
}
</style>
