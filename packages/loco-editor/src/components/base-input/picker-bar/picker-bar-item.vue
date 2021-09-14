<template>
  <div
    class="picker-bar-item"
    @click="handleClick"
    :class="{selected: value=== currentValue}">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Options, Inject } from 'vue-property-decorator'

Options({
  emits: ['select']
})
export default class PickerBar extends Vue {
  @Prop({ required: true })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any

  @Inject()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectItem: any

  @Inject()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  currentValue: any

  // @Prop({ required: true })
  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // selectedValue: any

  handleClick (): void {
    this.selectItem(this.value)
  }
}
</script>

<style lang="scss">
@import '@/style/var.scss';

.picker-bar-item {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $optionBgColor;
  color: $optionColor;
  cursor: default;

  &:not(:last-of-type) {
    margin-right: $optionMargin;
  }
  &.selected {
    background-color: $optionSelectedBgColor;
    color: $optionSelectedColor;
  }
  &:not(.selected):hover {
    background-color: $optionHoveredBgColor;
    color: $optionHoveredColor;
  }
}
</style>
