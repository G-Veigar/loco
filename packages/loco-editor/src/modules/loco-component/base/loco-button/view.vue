<template>
  <button class="base-button">
    <slot>确定</slot>
  </button>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

@Options({
  name: 'BaseButton'
})
export default class BaseButton extends Vue {
}
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
