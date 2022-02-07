<template>
  <div class="loco-wrapper" :class="{active}">
    <template v-if="active && resizable">
      <div
        v-for="item in pointList"
        class="resize-point"
        :class="item"
        :key="item"
        @mousedown="handleMouseDownOnPoint(item)">
      </div>
    </template>
    <slot ref="hehe"></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator'

@Options({
  name: 'loco-wrapper'
})
export default class LocoSelect extends Vue {
  @Prop({ type: Boolean, required: true, default: true })
  active!: boolean;

  @Prop({ type: Boolean, required: true, default: false })
  resizable!: boolean;

  pointList = [
    'top-center',
    'top-right',
    'center-right',
    'bottom-right',
    'bottom-center',
    'bottom-left',
    'center-left',
    'top-left'
  ]

  mounted () {
    // if (this.$slots.default) {
    //   const el = this.$slots.default()[0].el
    //   if (el) {
    //     el.style.resize = 'both'
    //     el.style.overflow = 'hidden'
    //     el.addEventListener('resize', (e: any) => {
    //       console.log('e', e)
    //     })
    //   }
    // }
  }
}
</script>

<style lang="scss">
.loco-wrapper {
  display: inline-block; // TAG:设置inline-block让宽度自适应
  position: relative;
  &.active {
    outline: #4662D9 solid 1px;
  }
  &:not(.active):hover {
    outline: rgb(103, 183, 236) solid 1px;
  }
}
.resize-point {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid #4662D9;
  position: absolute;
  background-color: #fff;
  transform: translate(-50%, -50%);
  &.top-left {
    top: 0;
    left: 0;
    cursor: nwse-resize;
  }
  &.top-center {
    top: 0;
    left: 50%;
    cursor: ns-resize;
  }
  &.top-right {
    top: 0;
    left: 100%;
    cursor: nesw-resize;
  }
  &.center-right {
    top: 50%;
    left: 100%;
    cursor: ew-resize;
  }
  &.bottom-right {
    top: 100%;
    left: 100%;
    cursor: nwse-resize;
  }
  &.bottom-center {
    top: 100%;
    left: 50%;
    cursor: ns-resize;
  }
  &.bottom-left {
    top: 100%;
    left: 0;
    cursor: nesw-resize;
  }
  &.center-left {
    top: 50%;
    left: 0;
    cursor: ew-resize;
  }
}
</style>
