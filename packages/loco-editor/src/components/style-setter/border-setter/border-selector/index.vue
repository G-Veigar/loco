<template>
  <div class="border-picker">
    <!-- 四个border -->
    <border-option
      v-for="item in borderOptions"
      :key="item"
      :selected-value="currentBorder"
      class="border-option-item"
      :class="item"
      :type="item"
      @select="handleSelectBorder"></border-option>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import borderOption from './border-option.vue'

@Options({
  name: 'borderPicker',
  components: {
    borderOption
  }
})
export default class BorderPicker extends Vue {
  borderOptions = ['top', 'bottom', 'left', 'right', 'all']
  currentBorder = 'left'

  handleSelectBorder (type: string):void {
    this.currentBorder = type
  }
}
</script>

<style lang="scss" scoped>
.border-picker {
  display: grid;
  gap: 4px;
  .border-option-item {
    &.top {
      grid-column-start: 2;
      grid-row-start: 1;
    }

    &.right {
      grid-column-start: 3;
      grid-row-start: 2;
    }

    &.bottom {
      grid-column-start: 2;
      grid-row-start: 3;
    }

    &.left {
      grid-column-start: 1;
      grid-row-start: 2;
    }

    &.all {
      grid-column-start: 2;
      grid-row-start: 2;
    }
  }
}
</style>
