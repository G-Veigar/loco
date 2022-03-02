<script lang="ts" setup>
import videoItem from "./video-item.vue";
</script>

<template>
  <div class="video-manager">
    <video-item v-for="item in 5" :key="item"></video-item>
  </div>
</template>

<style lang="scss">
@import "@/style/var.scss";

.video-manager {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
