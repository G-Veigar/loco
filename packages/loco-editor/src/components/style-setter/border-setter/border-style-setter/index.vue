<template>
  <div class="border-style-setter">
    <picker-bar>
      <picker-bar-item>x</picker-bar-item>
      <picker-bar-item>——</picker-bar-item>
      <picker-bar-item>---</picker-bar-item>
      <picker-bar-item>···</picker-bar-item>
    </picker-bar>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import pickerBar from '../../../base-input/picker-bar/index.vue'
import pickerBarItem from '../../../base-input/picker-bar/picker-bar-item.vue'

@Options({
  name: 'BorderStyleSetter',
  components: {
    pickerBar,
    pickerBarItem
  }
})
export default class BorderStyleSetter extends Vue {

}
</script>

<style lang="scss">
@import '@/style/var.scss';

.border-style-setter {
  flex: auto;
}
</style>
