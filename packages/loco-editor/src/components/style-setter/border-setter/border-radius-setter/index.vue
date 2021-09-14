<template>
  <div class="border-radius-setter">
    <picker-bar>
      <picker-bar-item>
        <img src="./img/square.svg" alt="">
      </picker-bar-item>
      <picker-bar-item>
        <img src="./img/square.svg" alt="">
      </picker-bar-item>
      <picker-bar-item>
        <img src="./img/custom.svg" alt="">
      </picker-bar-item>
      <picker-bar-item>
        <img src="./img/ind.svg" alt="">
      </picker-bar-item>
    </picker-bar>
    <div class="custom-wrapper">
      <el-slider></el-slider>
      <unit-input class="border-radius-input"></unit-input>
    </div>
    <div class="independent-wrapper">
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import unitInput from '@/components/base-input/unit-input/index.vue'
import pickerBar from '@/components/base-input/picker-bar/index.vue'
import pickerBarItem from '@/components/base-input/picker-bar/picker-bar-item.vue'

@Options({
  components: {
    pickerBar,
    pickerBarItem,
    unitInput
  }
})
export default class BorderRadiusSetter extends Vue {

}
</script>

<style lang="scss">
.border-radius-setter {
  flex: auto;
  .custom-wrapper {
    width: 100%;
    display: flex;
    .el-slider {
      flex: auto;
    }
    .border-radius-input {
      width: 60px;
      flex: none;
      margin-left: 8px;
    }
  }
}
</style>
