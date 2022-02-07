<template>
  <div class="pull-down" :class="{reset: reset}" ref="pullDown" :style="{height: pullDownHeightStyle}" @transitionend="handleTransitionend">
    <slot>加载中...</slot>
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator'
import { bindObserver } from '../../../utils/observer'

@Options({
  name: 'PullDown'
})
export default class PullDown extends Vue {
  @Prop({ type: Object, required: true })
  readonly wrapper!: HTMLElement | undefined;

  maxHeight = 100

  actionHeight = 30

  actionTriggerHeight = 40

  height = 0

  minDuration = 2000

  touchStartTop = 0

  reset = false

  actionIng = false

  get pullDownHeightStyle (): string {
    return `${this.height}px`
  }

  action ():Promise<boolean> {
    return new Promise(resolve => {
      console.log('loading...')
      setTimeout(() => {
        resolve(true)
      }, 500)
    })
  }

  recordTouchStartPos (e: TouchEvent): void{
    this.touchStartTop = e.touches[0].pageY
  }

  computeTouchMove (e: TouchEvent): void{
    const diff = e.touches[0].pageY - this.touchStartTop
    const newHeight = diff / 3
    if (newHeight < this.maxHeight) {
      this.height = newHeight
    }
  }

  pullDownHeightReset (): void{
    this.reset = true
    let resetHeight = 0
    if (this.height > this.actionTriggerHeight) {
      resetHeight = this.actionHeight
      this.actionIng = true
      const actionBeginTime = Date.now()
      this.action().finally(() => {
        const actionEndTime = Date.now()
        if (this.minDuration) {
          const leftTime = this.minDuration - (actionEndTime - actionBeginTime)
          setTimeout(() => {
            this.height = 0
            this.actionIng = false
          }, leftTime)
        } else {
          this.height = 0
          this.actionIng = false
        }
      })
    }
    this.$nextTick(() => {
      this.height = resetHeight
    })
  }

  handleTransitionend (): void{
    if (this.actionIng) return
    this.reset = false
  }

  bindPullObserver (el: HTMLElement): void {
    el.addEventListener('touchstart', this.recordTouchStartPos)
    el.addEventListener('touchmove', this.computeTouchMove)
    el.addEventListener('touchend', this.pullDownHeightReset)
  }

  unbindPullObserver (el: HTMLElement): void{
    el.removeEventListener('touchmove', this.computeTouchMove)
    el.removeEventListener('touchstart', this.recordTouchStartPos)
    el.removeEventListener('touchend', this.pullDownHeightReset)
  }

  mounted (): void{
    bindObserver(this.$refs.pullDown as HTMLElement, () => {
      if (this.wrapper) {
        this.bindPullObserver(this.wrapper)
      }
    }, () => {
      if (this.wrapper) {
        this.unbindPullObserver(this.wrapper)
      }
    })
  }
}
</script>

<style class="scss">
.pull-down {
  background-color: yellow;
  overflow: hidden;
}
.pull-down.reset {
  transition: height 0.3s;
}
</style>
