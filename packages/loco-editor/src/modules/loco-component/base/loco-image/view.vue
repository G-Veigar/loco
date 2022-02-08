<template>
  <img
    class="base-image"
    @error="handleLoadError"
    :src="src"
    alt="" />
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

@Options({
  props: {
    src: {
      required: true,
      type: String
    },
    loadingImg: {
      type: String
    },
    errorImg: {
      type: String
    },
    desc: {
      type: String
    },
    lazyLoad: {
      type: Boolean,
      default: false
    }
  }
})
export default class BaseImage extends Vue {
  src: string|undefined;
  loadingImg?: string;
  errorImg?: string;
  desc?: string
  lazyLoad?: boolean

  handleLoadError (): void{
    if (this.errorImg) {
      this.src = this.errorImg
    }
  }

  created (): void{
    if (this.loadingImg) {
      const realSrc = this.src
      const img = new Image()
      img.onload = () => {
        this.src = realSrc
      }
      img.onerror = () => {
        if (this.errorImg) {
          this.src = this.errorImg
        }
      }
      img.src = realSrc as string
      this.src = this.loadingImg
    }
  }
}
</script>

<style lang="scss" scoped>
.base-image {
  width: 100%;
}
</style>
