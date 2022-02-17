<script lang="ts" setup>
import { computed } from "vue";
import { CONTAINER_TYPE } from "./const";
// import { throttle } from 'lodash-es'

const props = withDefaults(
  defineProps<{
    type: string;
    column: number;
    spaceType: string;
    spaceNum: number;
  }>(),
  {
    type: CONTAINER_TYPE.FLEX,
    column: 2,
    spaceType: "all",
    spaceNum: 10,
  }
);

const getScrollTop = (element: any) => {
  if (element === window) {
    return Math.max(
      window.pageYOffset || 0,
      document.documentElement.scrollTop
    );
  }
  return element.scrollTop;
};

const getVisibleHeight = (element: any) => {
  if (element === window) {
    return document.documentElement.clientHeight;
  }
  return element.clientHeight;
};

// TODO: 节流处理
function handleScroll(e: any): void {
  const distance = 100;
  const viewportScrollTop = getScrollTop(e.target);
  const viewportBottom = viewportScrollTop + getVisibleHeight(e.target);
  const shouldTrigger = e.target.scrollHeight - viewportBottom <= 10;
  if (shouldTrigger) {
    console.log("on bottom");
  }
}

const containerStyle = computed(() => {
  const gridRowGap = props.spaceType !== "column" ? props.spaceNum : 0;
  const gridColumnGap = props.spaceType !== "row" ? props.spaceNum : 0;
  return {
    gridTemplateColumns: `repeat(${props.column}, 1fr)`,
    gridGap: `${gridRowGap}px ${gridColumnGap}px`,
  };
});
</script>

<template>
  <div class="base-container" @scroll="handleScroll">
    <div class="inner-wrapper" :style="containerStyle">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./style.scss";
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
