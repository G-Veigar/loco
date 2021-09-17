<template>
  <div class="tool-header">
    <div class="tool-header-main">{{title}}</div>
    <div class="close-btn" @click="closeToolBar">x</div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Options } from 'vue-property-decorator'

@Options({
  name: 'toolHeader'
})
export default class ToolHeader extends Vue {
  @Prop({ type: String, required: true })
  title!: string;

  closeToolBar (): void{
    this.$emit('close')
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/var.scss';

.tool-header {
  display: flex;
  justify-content: space-between;
  color: $mainFontColor;
  padding: 10px;
  border-bottom: 1px solid $mainBorderColor;

  .close-btn {
    &:hover {
      color: $optionHoveredColor;
    }
  }
}
</style>
