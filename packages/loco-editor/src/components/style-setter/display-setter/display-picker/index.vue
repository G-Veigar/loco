<template>
  <div class="display-picker">
    <picker-bar>
      <picker-bar-item>block</picker-bar-item>
      <picker-bar-item>flex</picker-bar-item>
      <picker-bar-item>grid</picker-bar-item>
      <picker-bar-item>inline</picker-bar-item>
      <picker-bar-item>none</picker-bar-item>
      <picker-bar-item>inline</picker-bar-item>
    </picker-bar>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import pickerBar from '../../../base-input/picker-bar/index.vue'
import pickerBarItem from '../../../base-input/picker-bar/picker-bar-item.vue'

@Options({
  name: 'displayPicker',
  components: {
    pickerBar,
    pickerBarItem
  }
})
export default class DisplayPicker extends Vue {

}
</script>

<style lang="scss" scoped>
@import '@/style/var.scss';
.display-picker {
  flex: auto;
}
</style>
