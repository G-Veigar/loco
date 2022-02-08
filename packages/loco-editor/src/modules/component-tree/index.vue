<template>
  <div class="row">
    <div class="col-8">
      <tree-node :nodes="list" />
    </div>
  </div>
</template>

<script>
import TreeNode from './tree-node.vue'

export default {
  name: 'nested-example',
  display: 'Nested',
  order: 15,
  components: {
    TreeNode
  },
  //   childNodes: [
  //   {
  //     id: '222',
  //     icon: 'icon-rongqi',
  //     name: 'hehe-child1'
  //   },
  //   {
  //     id: '333',
  //     name: 'hehe-child2',
  //     icon: 'icon-image',
  //     childNodes: [
  //       {
  //         id: '444',
  //         icon: 'icon-textEdit',
  //         name: 'hehe-child1-child1'
  //       }
  //     ]
  //   }
  // ]
  data () {
    return {
      list: [
        {
          name: 'task 1',
          icon: 'icon-rongqi',
          childNodes: [
            {
              name: 'task 2',
              icon: 'icon-image',
              childNodes: []
            }
          ]
        },
        {
          name: 'task 3',
          icon: 'icon-image',
          childNodes: [
            {
              name: 'task 4',
              icon: 'icon-textEdit',
              childNodes: []
            }
          ]
        },
        {
          name: 'task 5',
          icon: 'icon-image',
          childNodes: []
        }
      ]
    }
  }
}
</script>

<style scoped></style>
