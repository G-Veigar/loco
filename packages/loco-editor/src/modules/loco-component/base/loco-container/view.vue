<template>
  <div class="base-container" @scroll="handleScroll">
    <div class="inner-wrapper" :style="containerStyle">
      <!-- <div class="demo-card" v-for="item in 20" :key="item">demo-card {{item}}</div> -->
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator'
import { CONTAINER_TYPE } from './const'
// import { throttle } from 'lodash-es'

const getScrollTop = (element: any) => {
  if (element === window) {
    return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop)
  }
  return element.scrollTop
}

const getVisibleHeight = (element: any) => {
  if (element === window) {
    return document.documentElement.clientHeight
  }
  return element.clientHeight
}

@Options({
  name: 'BaseContainer'
})
export default class BaseContainer extends Vue {
  @Prop({ type: String, default: CONTAINER_TYPE.BASE })
  type!: string;

  @Prop({ type: Number, default: 1 })
  column!: number;

  @Prop({ type: String, default: 'all' })
  spaceType!: string;

  @Prop({ type: Number, default: 2 })
  spaceNum!: number;

  get containerStyle (): any {
    const gridRowGap = this.spaceType !== 'column' ? this.spaceNum : 0
    const gridColumnGap = this.spaceType !== 'row' ? this.spaceNum : 0
    return {
      gridTemplateColumns: `repeat(${this.column}, 1fr)`,
      gridGap: `${gridRowGap}px ${gridColumnGap}px`
    }
  }

  // TODO: 节流装饰器
  handleScroll (e: any): void{
    const distance = 100
    const viewportScrollTop = getScrollTop(e.target)
    const viewportBottom = viewportScrollTop + getVisibleHeight(e.target)
    const shouldTrigger = e.target.scrollHeight - viewportBottom <= 10
    if (shouldTrigger) {
      console.log('on bottom')
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style.scss';
.base-container {
  margin: 10px;
  border: 1px solid #333;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  .inner-wrapper {
    display: grid;
  }
}
.demo-card {
  height: 120px;
  background-color: #eee;
  color: #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
