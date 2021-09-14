<template>
  <div class="header-top">header-top</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'header-top'
})
export default class HeaderTop extends Vue {

}
</script>

<style lang="scss" scoped>
@import '@/style/var.scss';

.header-top {
  width: 100%;
  display: flex;
  align-items: center;
  height: $headerTopHeight;
  box-sizing: border-box;
  background-color: $mainBgColorLight;
  border-bottom: 1px solid $mainBorderColor;
}
</style>
