<template>
  <div class="background-type-setter">
    <picker-bar>
      <picker-bar-item>img</picker-bar-item>
      <picker-bar-item>渐变</picker-bar-item>
      <picker-bar-item>渐变2</picker-bar-item>
    </picker-bar>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import pickerBar from '../../../base-input/picker-bar/index.vue'
import pickerBarItem from '../../../base-input/picker-bar/picker-bar-item.vue'

@Options({
  name: 'backgroundTypeSetter',
  components: {
    pickerBar,
    pickerBarItem
  }
})
export default class BackgroundTypeSetter extends Vue {

}
</script>
