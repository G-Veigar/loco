<template>
  <div
    class="component-item"
    draggable="true"
    @dragstart="handleDragstart">
    <div class="component-question">
      <i class="iconfont icon-question-circle-fill"></i>
    </div>
    <div class="component-icon">
      <i class="iconfont" :class="icon"></i>
    </div>
    <div class="component-name">{{name}}</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue, Prop } from 'vue-property-decorator'

@Options({
  name: 'componentItem',
  components: {
  }
})
export default class Editor extends Vue {
  @Prop({ type: String, required: true })
  name!: string

  @Prop({ type: String, required: true })
  icon!: string

  handleDragstart (e: any):void {
    e.dataTransfer.setData('materialData', this.name)
  }
}
</script>

<style lang="scss">
@import '@/style/var.scss';

.component-item {
  flex: 0 0 33.3333%;
  border-right: 1px solid rgb(51, 51, 51);
  border-bottom: 1px solid rgb(51, 51, 51);
  // cursor: pointer;
  padding: 4px 0 10px;
  position: relative;

  &:hover {
    background-color: #5d5d5d;
    color: $optionHoveredColor;

    .component-question {
      display: block;
    }
  }

  .component-question {
    position: absolute;
    right: 2px;
    top: 2px;
    display: none;
    width: 18px;
    height: 18px;
    font-size: 18px;
    color: $mainFontColor;
    &:hover {
      color: $optionHoveredColor;
      cursor: help;
    }
  }

  .component-icon {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    .iconfont {
      font-size: 40px;
    }
  }
  .component-name {
    margin-top: 2px;
  }
}
</style>
