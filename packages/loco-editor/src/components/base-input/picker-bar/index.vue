<template>
  <div class="picker-bar">
    <slot :selectedValue="value"></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Options } from 'vue-property-decorator'
import { computed } from 'vue'

@Options({
  provide () {
    return {
      currentValue: computed(() => this.value),
      selectItem: this.selectItem
    }
  }
})
export default class PickerBar extends Vue {
  @Prop({ default: 'px' })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any

  selectItem (val: unknown) :void {
    this.$emit('select', val)
  }
}
</script>

<style lang="scss" scoped>
.picker-bar {
  background-color: transparent;
  display: flex;
  justify-content:center;
}
</style>
