<template>
  <div class="checkbox-wrapper">
    <el-checkbox
      v-for="item in options"
      :key="item.label"
      :label="item.value"
      :modelValue="value"
      @update:modelValue="handleValueChanged">{{item.label}}</el-checkbox>
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator'

Options({
  name: 'base-checkbox'
})
export default class BaseCheckbox extends Vue {
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
.checkbox-wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
  .el-checkbox  {
    margin-right: 0;
  }
}
</style>
