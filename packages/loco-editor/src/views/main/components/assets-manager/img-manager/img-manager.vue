<script lang="ts" setup>
// import { ref, onMounted } from "vue";
import imgItem from "./img-item.vue";
</script>

<template>
  <div class="img-manager">
    <img-item v-for="item in 5" :key="item"></img-item>
  </div>
</template>

<style lang="scss">
@import "@/style/var.scss";

.img-manager {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
