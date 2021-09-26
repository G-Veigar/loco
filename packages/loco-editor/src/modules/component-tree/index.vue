<template>
  <div class="component-tree">
    <tree-node :node="nodeData"></tree-node>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import treeNode from './tree-node.vue'

@Options({
  name: 'component-tree',
  components: {
    treeNode
  }
})
export default class ComponentTree extends Vue {
  nodeData = {
    id: '111',
    name: 'hehe',
    icon: 'icon-button',
    childNodes: [
      {
        id: '222',
        icon: 'icon-rongqi',
        name: 'hehe-child1'
      },
      {
        id: '333',
        name: 'hehe-child2',
        icon: 'icon-image',
        childNodes: [
          {
            id: '444',
            icon: 'icon-textEdit',
            name: 'hehe-child1-child1'
          }
        ]
      }
    ]
  }
}
</script>

<style>
.component-tree {
  text-align: left;
}
</style>
