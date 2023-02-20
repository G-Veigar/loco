<script lang="ts" setup>
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    col: number;
    listData: any[];
    itemComponent: any;
    rowGap: number;
    colGap: number;
  }>(),
  {
    col: 1,
    rowGap: 0,
    colGap: 0,
  }
);

const containerStyle = computed(() => {
  const res: any = {};
  const fr1 = "1fr ";
  res.gridTemplateColumns = fr1.repeat(props.col);
  res.gap = `${props.rowGap}px ${props.colGap}px`;
  return res;
});
</script>

<template>
  <div class="loco-list-container" :style="containerStyle">
    <component
      class="loco-list-item"
      v-for="(item, key) in listData"
      :key="key"
      :is="itemComponent"
    ></component>
  </div>
</template>

<style lang="scss" scoped>
.loco-list-container {
  display: grid;
}
</style>
