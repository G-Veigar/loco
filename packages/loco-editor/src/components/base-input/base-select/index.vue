<template>
  <el-select>
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator'

Options({
  name: 'base-select'
})
export default class BaseSelect extends Vue {
  @Prop({ type: Array, default: [] })
  options!: {value: any, label: string}[]
}
</script>

<style lang="scss">

</style>
