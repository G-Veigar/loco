<template>
  <div class="font-style-setter">
    <picker-bar>
      <picker-bar-item>B</picker-bar-item>
      <picker-bar-item>I</picker-bar-item>
      <picker-bar-item>U</picker-bar-item>
      <picker-bar-item>S</picker-bar-item>
    </picker-bar>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import pickerBar from '../../../base-input/picker-bar/index.vue'
import pickerBarItem from '../../../base-input/picker-bar/picker-bar-item.vue'

@Options({
  name: 'fontStyleSetter',
  components: {
    pickerBar,
    pickerBarItem
  }
})
export default class FontStyleSetter extends Vue {

}
</script>

<style lang="scss" scoped>
.font-style-setter {
  width: 200px;
}
</style>
