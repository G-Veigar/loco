<template>
  <div class="loco-tab" :style="tabWrapperStyle">
    <div
      class="loco-tab-item"
      v-for="(item, index) in tabs"
      :key="item.value"
      :ref="setItemRef"
      @click="handleClick(item, index)">{{item.label}}</div>
    <div class="active-bar" v-if="activeBarVisiable" :style="activeBarStyle"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator'

type TabItem = {
  label: string,
  value: string
}

type TabType = 'normal' | 'slide' | 'auto'

type SpaceType = 'between' | 'around' | 'full'

@Options({
  name: 'loco-tab'
})
export default class LocoTab extends Vue {
  @Prop({ type: Array, required: true })
  tabs!: TabItem[]

  @Prop({ type: Array, default: 'auto' })
  tabType!: TabType

  @Prop({ type: String, default: 'between' })
  spaceType!: SpaceType

  // 当item 大于等于此选项，开启横滑滚动
  @Prop({ type: Number, default: 5 })
  slideItemMin!: number

  // 是否展示active的item底部的指示条
  @Prop({ type: Boolean, default: true })
  showActvieBar!: boolean

  // 是否展示active的item底部的指示条
  @Prop({ type: Boolean, default: true })
  sticky!: boolean

  activeBarReady = false

  itemsPosArr = []

  itemRefs = []

  activeValue = 'tab3'
  activeIndex = 2

  get tabWrapperStyle ():any {
    const res:any = {}
    if (this.sticky) {
      res.position = 'sticky'
      res.top = '0'
    }
    // 如果是normal 平铺展示方式
    if (this.tabType === 'normal' || (this.tabType === 'auto' && this.tabs.length < this.slideItemMin)) {
      let justifyContent
      switch (this.spaceType) {
        case 'between': justifyContent = 'space-between'; break
        case 'around': justifyContent = 'space-around'; break
      }
      res.display = 'flex'
      res.justifyContent = justifyContent
    } else {
      res.display = 'flex'
      res.flexWrap = 'nowrap'
      res.overflow = 'auto'
    }
    return res
  }

  get activeBarVisiable ():boolean {
    return this.showActvieBar && this.activeBarReady
  }

  get activeBarStyle () {
    if (this.activeBarVisiable) {
      const { left, width } = this.itemsPosArr[this.activeIndex]
      return {
        left: `${left}px`,
        width: `${width}px`
      }
    } else {
      return null
    }
  }

  handleClick (item:any, index: number):void {
    this.activeValue = item.value
    this.activeIndex = index
  }

  setItemRef (el: HTMLElement):void {
    if (el) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.itemRefs.push(el)
    }
  }

  initActiveBar (): void{
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const posArr = []
    this.itemRefs.forEach((item, index) => {
      posArr.push({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        left: item.offsetLeft
      })
      if (index !== 0) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const lastItemPos = posArr[index - 1]
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        lastItemPos.width = item.offsetLeft - lastItemPos.left
      }
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.itemsPosArr = posArr
    this.activeBarReady = true
  }

  mounted ():void{
    if (this.showActvieBar) {
      this.initActiveBar()
    }
  }
}
</script>

<style lang="scss" scoped>
// @import './style.scss';
.loco-tab {
  width: 100%;
  position: relative;
  background-color: #fff;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
}

.loco-tab-item {
  text-align: center;
}

.active-bar {
  position: absolute;
  bottom: 0;
  height: 4px;
  background-color: red;
  transition: left 0.4s;
}
</style>
