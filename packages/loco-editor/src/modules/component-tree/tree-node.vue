<template>
  <div class="tree-node">
    <div class="tree-node-item">
      <div v-if="hasChild" class="tree-node-collapse-btn" @click="toggleCollapse">
        <i class="iconfont" :class="collapsed? 'icon-caret-right' : 'icon-caret-down'"></i>
      </div>
      <div class="tree-node-icon">
        <i class="iconfont" :class="node.icon"></i>
      </div>
      <div class="tree-node-name">{{node.name}}</div>
    </div>
    <div
      class="tree-node-content"
      v-if="hasChild"
      v-show="!collapsed">
      <tree-node
        v-for="childNode in node.childNodes"
        :key="childNode.id"
        :node="childNode"></tree-node>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator'

@Options({
  name: 'tree-node'
})
export default class TreeNode extends Vue {
  @Prop({ type: Object, required: true })
  node!: any

  collapsed = false

  get hasChild ():boolean {
    return this.node.childNodes && this.node.childNodes.length > 0
  }

  toggleCollapse (): void{
    this.collapsed = !this.collapsed
  }
}
</script>

<style lang="scss">
@import '@/style/var.scss';

$collapseBtnWidth: 16px;
$collapseBtnLeft: 3px;
$nodeItemPaddingLeft: 20px;

.tree-node {
  cursor: default;
  .tree-node-item {
    padding-left: $nodeItemPaddingLeft;
    display: flex;
    align-items: center;
    position: relative;
    height: 28px;
    line-height: 28px;
    font-size: 12px;
    .tree-node-collapse-btn {
      position: absolute;
      left: $collapseBtnLeft;
      top: 50%;
      transform: translateY(-50%);
      width: $collapseBtnWidth;
      height: $collapseBtnWidth;
      text-align: center;
      line-height: $collapseBtnWidth;
      &:hover {
        color: $optionHoveredColor;
      }
      .iconfont {
        font-size: 12px;
      }
    }

    .tree-node-icon {
      margin-right: 4px;
      .iconfont {
        font-size: 20px;
      }
    }
  }

  .tree-node-content {
    position: relative;
    padding-left: 20px;

    &::before {
      display: block;
      content: '';
      width: 1px;
      bottom: 0;
      left: ($collapseBtnWidth + $collapseBtnLeft - 1px) / 2 + 1px;
      top: 0;
      background-color: #aaa;
      z-index: 1;
      position: absolute;
    }
  }
}
</style>
