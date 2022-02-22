<script lang="ts" setup>
import LocoSlideItem from "./loco-slide-item.vue";

const slideList = [
  {
    id: "111",
  },
  {
    id: "222",
  },
  {
    id: "333",
  },
];
</script>

<template>
  <div class="loco-slide">
    <LocoSlideItem v-for="item in slideList" :key="item.id" :data="item" />
  </div>
</template>

<style lang="scss" scoped>
.loco-slide {
  display: flex;
  flex-wrap: nowrap;
}
</style>
