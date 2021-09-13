<template>
  <div class="style-setter">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="间隔" name="间隔">
        <spacing-setter></spacing-setter>
      </el-collapse-item>
      <el-collapse-item title="尺寸" name="尺寸">
        <size-setter></size-setter>
      </el-collapse-item>
      <el-collapse-item title="定位" name="定位">
        定位
      </el-collapse-item>
      <el-collapse-item title="背景" name="背景">
        <background-setter></background-setter>
      </el-collapse-item>
      <el-collapse-item title="test" name="test">
        <picker-bar :value="currentTest" @select="handleSelect">
          <picker-bar-item value="hehe">heheddddddddd</picker-bar-item>
          <picker-bar-item value="haha">haha</picker-bar-item>
        </picker-bar>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import spacingSetter from './spacing-setter/index.vue'
import sizeSetter from './size-setter/index.vue'
import backgroundSetter from './background-setter/index.vue'
import pickerBar from '../base-input/picker-bar/index.vue'
import pickerBarItem from '../base-input/picker-bar/picker-bar-item.vue'

@Options({
  components: {
    spacingSetter,
    sizeSetter,
    backgroundSetter,
    pickerBar,
    pickerBarItem
  }
})
export default class styleSetter extends Vue {
  activeNames = ['间隔', '尺寸', '定位', '背景', 'test']
  currentTest = 'hehe'

  handleChange (val: string):void {
    console.log(val)
  }

  // 处理样式设置
  handleInput (val: string):void {
    console.log(val)
  }

  handleSelect (val: string):void {
    this.currentTest = val
  }
}
</script>

<style lang="scss">
.style-setter {
  .el-collapse {
    border: none;
  }
  .el-collapse-item__header {
    color: rgb(217, 217, 217);
    background-color: rgb(43, 43, 43);
    border-bottom: 1px solid rgb(33, 33, 33);
    height: 30px;
    padding-left: 10px;
  }
  .el-collapse-item__wrap {
    border: none;
  }
  .el-collapse-item__content {
    padding-bottom: 0;
  }
}
</style>
