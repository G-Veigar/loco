<script lang="ts" setup>
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    id: string;
    name: string;
    width: string;
    height: string;
    sizeLock: boolean;
    required: boolean;
    includes: string[] | null;
  }>(),
  {
    name: "default",
    width: "100%",
    height: "100px",
    sizeLock: false,
    required: false,
    includes: null,
  }
);

function handleDrop(e: any): void {
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
const zoneStyle = computed(() => {
  return {
    width: props.width,
    height: props.height,
  };
});
</script>

<template>
  <div class="slot-zone" :style="zoneStyle">slot-zone</div>
</template>

<style lang="scss" scoped>
// @import './style.scss';
.slot-zone {
  flex: auto;
  background-color: #fffacd;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px dashed #ffa500;
  border-radius: 4px;
}
</style>
