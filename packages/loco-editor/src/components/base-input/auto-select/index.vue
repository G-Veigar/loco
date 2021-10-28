<template>
  <component :is="selectComponent"></component>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator'

export default class LocoSelect extends Vue {
  @Prop({ type: Array, default: [] })
  options!: {value: any, label: string}[]

  @Prop({ type: Boolean, default: false })
  multiple!: boolean

  @Prop({ type: Object, default: { radio: 3, select: 10 } })
  config!: {radio: number, select: number}

  get selectComponent () {
    const optionsLength = this.options.length
    if (optionsLength < this.config.radio) {
      return this.multiple ? 'el-checkbox' : 'el-radio'
    }
  }
}
</script>

<style lang="scss">

</style>
