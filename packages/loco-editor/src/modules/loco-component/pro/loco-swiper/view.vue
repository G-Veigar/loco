<template>
  <div class="loco-swiper">
    <swiper
      :modules="swiperModules"
      :slides-per-view="1"
      :space-between="2"
      :autoplay="autoPlayConfig"
      :pagination="paginationConfig"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="item in items" :key="item.id">
        <!-- <div class="swiper-item">{{item.id}}</div> -->
        <slot v-bind:item="item"></slot>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator'
import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/autoplay/autoplay.min.css'

@Options({
  name: 'loco-swiper',
  components: {
    Swiper,
    SwiperSlide
  }
})
export default class LocoSwiper extends Vue {
  @Prop({ type: Boolean, default: true })
  autoplay!: boolean

  @Prop({ type: Number, default: 3000 })
  autoplayDelay!: number

  @Prop({ type: Boolean, default: true })
  pagination!: boolean

  @Prop({ type: Boolean, required: true })
  items!: boolean

  swiperModules = [Pagination, Autoplay]

  get autoPlayConfig () {
    if (this.autoplay) {
      return {
        clickable: false
      }
    } else {
      return false
    }
  }

  get paginationConfig () {
    if (this.pagination) {
      return {
        delay: this.autoplayDelay
      }
    } else {
      return false
    }
  }

  onSwiper (swiper: any) {
    console.log(swiper)
  }

  onSlideChange () {
    console.log('slide change')
  }
}
</script>

<style lang="scss">
.loco-swiper {
  .swiper-item {
    height: 100px;
    background-color: #ccc;
  }
  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
  }
  .swiper-pagination-bullet-active {
    background-color: #fff;
  }
}
</style>
