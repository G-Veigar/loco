<template>
  <draggable
    class="dragArea"
    :list="nodes"
    :group="{ name: 'g1' }"
    item-key="name"
    tag="transition-group"
    :component-data="{
      tag: 'ul',
      type: 'transition-group',
      name: !drag ? 'flip-list' : null
    }"
    v-bind="dragOptions"
    @start="drag = true"
    @end="drag = false"
  >
    <template #item="{ element }">
      <div class="tree-node">
        <div class="tree-node-item">
          <div v-if="element.childNodes && element.childNodes.length > 0" class="tree-node-collapse-btn" @click="toggleCollapse">
            <i class="iconfont" :class="collapsed? 'icon-caret-right' : 'icon-caret-down'"></i>
          </div>
          <div class="tree-node-icon">
            <i class="iconfont" :class="element.icon"></i>
          </div>
          <div class="tree-node-name">{{element.name}}</div>
        </div>
        <div
          class="tree-node-content"
          v-if="element.childNodes && element.childNodes.length > 0"
          v-show="!collapsed">
          <tree-node
            v-if="element.childNodes"
            :nodes="element.childNodes"></tree-node>
        </div>
      </div>
    </template>
  </draggable>
</template>

<script lang="ts">
import draggable from 'vuedraggable'

import { Vue, Options, Prop } from 'vue-property-decorator'

@Options({
  name: 'tree-node',
  components: {
    draggable
  }
})
export default class TreeNode extends Vue {
  @Prop({ type: Array, required: true })
  nodes!: any

  @Prop({ type: Array, required: true })
  tasks!: any

  collapsed = false

  drag = false

  get dragOptions () {
    return {
      animation: 200,
      group: 'description',
      disabled: false,
      ghostClass: 'ghost'
    }
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
      // left: ($collapseBtnWidth + $collapseBtnLeft - 1px) / 2 + 1px;
      top: 0;
      background-color: #aaa;
      z-index: 1;
      position: absolute;
    }
  }
}
</style>

<style scoped>
ul {
  padding-left: 0;
}
.flip-list-move {
  transition: transform 0.3s;
}
.no-move {
  transition: transform 0s;
}
</style>
