<template>
  <div class="swiper-item-img-card" @click="handleClick">
    <img class="item-img" v-if="item.imgsrc" :src="item.imgsrc" alt="">
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator'

@Options({
  name: 'swiper-item-img-card'
})
export default class SwiperItemImgCard extends Vue {
  @Prop({ type: Object, required: true })
  item!: any

  handleClick () {
    if (this.item.link) {
      window.location.href = this.item.link
    }
  }
}
</script>

<style lang="scss">
.swiper-item-img-card {
  background-color: #ccc;
}
.item-img {
  width: 100%;
}
</style>
