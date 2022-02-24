<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const modules = [Pagination, Autoplay, EffectCoverflow];

function onSwiper(swiper: any) {
  console.log(swiper);
}

function onSlideChange() {
  console.log("slide change");
}
</script>

<template>
  <div class="loco-swiper">
    <swiper
      effect="coverflow"
      :modules="modules"
      :slides-per-view="3"
      :space-between="10"
      :coverflowEffect="{
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        scale: 0.8,
        slideShadows: true,
      }"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <slot></slot>
    </swiper>
  </div>
</template>

<style lang="scss" scoped>
.loco-swiper {
  display: flex;
  flex-wrap: nowrap;

  .slide-item {
    height: 100px;
    background-color: #eee;
    color: #333;
  }
}
</style>
