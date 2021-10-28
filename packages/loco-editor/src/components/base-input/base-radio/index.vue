<template>
  <div class="radio-wrapper">
    <el-radio
      v-for="item in options"
      :key="item.label"
      :label="item.value"
      :modelValue="value"
      @update:modelValue="handleValueChanged">{{item.label}}</el-radio>
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator'

Options({
  name: 'base-radio'
})
export default class BaseRadio extends Vue {
  @Prop({ type: Array, default: [] })
  options!: {value: any, label: string}[]

  @Prop({ required: true })
  value: any

  handleValueChanged (e: any): void {
    this.$emit('update:modelValue', e)
  }
}
</script>

<style lang="scss">
.radio-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
  .el-radio {
    margin-right: 0;
  }
}
</style>
