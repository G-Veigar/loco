<template>
  <el-date-picker
    v-model="value2"
    type="date"
    placeholder="Pick a day"
    size="mini"
  >
  </el-date-picker>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator'

Options({
  name: 'base-select'
})
export default class BaseSelect extends Vue {
  @Prop({ type: Array, default: [] })
  options!: {value: any, label: string}[]

  value2 = ''
}
</script>

<style lang="scss">

</style>
