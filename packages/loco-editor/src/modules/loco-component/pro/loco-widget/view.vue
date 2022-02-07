<script setup lang="ts">
import { ref, onMounted } from '@vue/composition-api'
import { bindObserver } from '../../../../../../../packages/components/src/utils/observer'
function backToTop () {
  document.documentElement.scrollTop = 0
}

const backToTopVisible = ref(false)

const backToTopMark = ref()

onMounted(() => {
  if (backToTopMark.value) {
    bindObserver(
      backToTopMark.value,
      () => {
        backToTopVisible.value = false
      },
      () => {
        backToTopVisible.value = true
      }
    )
  }
})
</script>

<template>
    <div class="back-to-top">
        <div ref="backToTopMark" class="back-to-top-mark"></div>
        <div v-show="backToTopVisible" class="back-to-top-widget" @click="backToTop"></div>
    </div>
</template>

<style lang="stylus" scoped>
.back-to-top-mark
    position absolute
    width 0
    height 200vh
    left 0
    top 0
    background-color transparent
.back-to-top-widget
    position fixed
    right 32px
    bottom 186px
    width 80px
    height 80px
    z-index 100
    background url('../../assets/widget-back.png') no-repeat
    background-size 100% 100%
    transform rotate(90deg)
</style>
