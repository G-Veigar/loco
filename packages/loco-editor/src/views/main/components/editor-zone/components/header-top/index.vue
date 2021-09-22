<template>
  <div class="header-top">
    <div class="device-picker">
      <i class="iconfont icon-phone"></i>
      <div class="device-name">iPhone 6/7/8 Plus</div>
    </div>
    <div class="device-ratio">
      736 x 414
    </div>
    <div class="device-zoom">100%</div>
    <div class="device-rorate">
      <i class="iconfont icon-xuanzhuan1"></i>
    </div>
    <div class="device-other">
      <i class="iconfont icon-other1"></i>
    </div>
  </div>
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
  justify-content: center;
  align-items: center;
  height: $headerTopHeight;
  box-sizing: border-box;
  background-color: $mainBgColorLight;
  border-bottom: 1px solid $mainBorderColor;

  .device-picker {
    font-size: 12px;
    display: flex;
    align-items: center;
    .iconfont {
      font-size: 22px;
      margin-right: 4px;
    }
  }

  .device-ratio {
    margin-left: 16px;
    font-size: 14px;
  }

  .device-zoom {
    margin-left: 16px;
    font-size: 14px;
  }

  .device-rorate {
    margin-left: 16px;
    .iconfont {
      font-size: 22px;
    }
  }

  .device-other {
    margin-left: 16px;
    .iconfont {
      font-size: 22px;
    }
  }
}
</style>
