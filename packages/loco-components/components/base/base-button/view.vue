<template>
  <button class="base-button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Vue, Options} from 'vue-class-component'

@Options({
  props: {
    src: {
      required: true,
      type: String,
    },
    loadingImg: {
      type: String,
    },
    errorImg: {
      type: String,
    },
    desc: {
      type: String,
    },
    lazyLoad: {
      type: Boolean,
      default: false,
    },
  },
})
export default class BaseButton extends Vue {
  src: string;
  loadingImg?: string;
  errorImg?: string;
  desc?: string
  lazyLoad?: boolean

  handleLoadError() {
    if (this.errorImg) {
      this.src = this.errorImg;
    }
  }

  created() {
    if (this.loadingImg) {
      const realSrc = this.src;
      const img = new Image();
      img.onload = () => {
        this.src = realSrc;
      };
      img.onerror = () => {
        this.src = this.errorImg;
      };
      img.src = realSrc;
      this.src = this.loadingImg;
    }
  }
};
</script>


<style>

</style>
