<template>
  <div
    class="loco-popup"
    v-if="popupShow"
    :style="popupStyle"
    @click="handleClickMask">
    <transition
      v-if="animated"
      name="custom-classes-transition"
      :enter-active-class="`animate__animated ${animateName[0]}`"
      :leave-active-class="`animate__animated ${animateName[1]}`"
    >
      <div
        class="popup-main"
        v-show="popupMainShow"
        :style="popupMainStyle"
        @animationend="handleAnimationEnd">
        <div class="close-btn" v-if="showCloseBtn" :style="closeBtnStyle"><i class="iconfont" :class="clostBtnIcon" :style="fontSizeStyle"></i></div>
        <slot></slot>
      </div>
    </transition>
    <div
      v-else
      :style="popupMainStyle"
      class="popup-main">
      <div class="close-btn" v-if="showCloseBtn"><i class="iconfont icon-close1"></i></div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop, Watch } from 'vue-property-decorator'
import 'animate.css'
import locoAction from '../../../loco-action'

type animationEffects = 'fade' | 'bounce' | 'zoom' | 'slide'

type popupPosition = 'middle' | 'bottom'

type closeBtnPosition = 'center-bottom' | 'inner-top-right' | 'outer-top-right'

type closeBtnType = 'normal' | 'round'

type closeBtnIcon = 'icon-close1' | 'icon-close2'

const animateNameMap = {
  zoom: ['animate__zoomIn', 'animate__zoomOut'],
  zoomDown: ['animate__zoomInDown', 'animate__zoomOutUp'],
  bounce: ['animate__bounceIn', 'animate__bounceOut'],
  fade: ['animate__fadeIn', 'animate__fadeOut'],
  fadeDown: ['animate__fadeInDown', 'animate__fadeOutUp'],
  slide: ['animate__slideInDown', 'animate__slideOutDown'],
  slideUp: ['animate__slideInUp', 'animate__slideOutDown'],
  tada: ['animate__tada', 'animate__fadeOut'],
  rubberBand: ['animate__rubberBand', 'animate__fadeOut'],
  jello: ['animate__jello', 'animate__fadeOut'],
  backInOut: ['animate__backInDown', 'animate__backOutDown']
}

@Options({
  name: 'loco-popup'
})
export default class locoPopup extends Vue {
  // @Prop({ type: Boolean, required: true })
  // visible!: boolean;
  visible = false

  @Prop({ type: String, default: 'bottom' })
  type!: popupPosition;

  @Prop({ type: Boolean, default: true })
  maskClose!: boolean;

  @Prop({ type: Boolean, default: true })
  animated!: boolean;

  @Prop({ type: Boolean, default: true })
  outAnimated!: boolean;

  @Prop({ type: String, default: 'slideUp' })
  effect!: animationEffects;

  @Prop({ type: Boolean, default: true })
  showCloseBtn!: boolean;

  @Prop({ type: Boolean, default: 'inner-top-right' })
  closeBtnPos!: closeBtnPosition;

  @Prop({ type: String, default: 'normal' })
  closeBtnType!:closeBtnType;

  popupShow = false;
  popupMainShow = false

  @Watch('visible')
  onVisibleChange (val: string):void {
    // 弹出弹框
    if (val) {
      this.popupShow = true
      this.$nextTick(() => {
        this.popupMainShow = true
      })
    } else {
      this.popupMainShow = false
      if (!this.outAnimated || !this.animated) {
        this.popupShow = false
      }
    }
  }

  get animateName () {
    const res = animateNameMap[this.effect]
    if (!this.outAnimated) {
      res[1] = ''
    }
    return res
  }

  get popupStyle ():any {
    const res:any = {}
    switch (this.type) {
      case 'middle':
        res.display = 'flex'
        res.alignItems = 'center'
        res.justifyContent = 'center'
        break
    }
    return res
  }

  get popupMainStyle ():any {
    const res:any = {}
    switch (this.type) {
      case 'middle':
        res.width = '70%'
        res.borderRadius = '8px'
        break
      case 'bottom':
        res.position = 'absolute'
        res.width = '100%'
        res.bottom = '0'
        res.borderRadius = '20px'
        res.borderBottomLeftRadius = '0'
        res.borderBottomRightRadius = '0'
        break
    }
    return res
  }

  get clostBtnIcon (): closeBtnIcon {
    let res:closeBtnIcon = 'icon-close1'
    if (this.type === 'middle') {
      switch (this.closeBtnPos) {
        case 'inner-top-right':
          res = 'icon-close1'; break
        case 'center-bottom':
        case 'outer-top-right':
          res = this.closeBtnType === 'round' ? 'icon-close2' : 'icon-close1'
      }
    }
    return res
  }

  get closeBtnStyle ():any {
    const res:any = {}
    switch (this.closeBtnPos) {
      case 'inner-top-right':
        res.right = '10px'
        res.top = '10px'
        break
      case 'center-bottom':
        res.left = '50%'
        res.bottom = '-60px'
        res.color = '#FFFFFF'
        res.transform = 'translateX(-50%)'
        break
      case 'outer-top-right':
        res.right = '-20px'
        res.top = '-50px'
        res.color = '#FFFFFF'
        break
    }
    return res
  }

  get fontSizeStyle ():any {
    const res:any = {}
    if (this.closeBtnPos === 'inner-top-right') {
      res.fontSize = '18px'
    } else {
      res.fontSize = '30px'
    }
    return res
  }

  handleAnimationEnd (): void{
    if (!this.popupMainShow) {
      this.popupShow = false
    }
  }

  handleClickMask () {
    if (this.maskClose) {
      this.$emit('updata:visible', false)
    }
  }

  mounted (): void{
    setTimeout(() => {
      this.visible = true
      // console.log('Toast', locoAction.Toast)
      locoAction.toast('hehe')
    }, 3000)
    // setTimeout(() => {
    //   this.visible = false
    // }, 8000)
  }
}
</script>

<style lang="scss" scoped>
.loco-popup {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
}
.popup-main {
  height: 400px;
  background-color: #fff;
  animation-duration: 400ms; /* don't forget to set a duration! */
  position: relative;
}
.close-btn {
  color: #666;
  padding: 4px;
  position: absolute;
  .icon-close1 {
    font-size: 22px;
  }
}
</style>
