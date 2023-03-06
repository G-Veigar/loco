<script lang="ts" setup>
import { ref } from "vue";
import { ElTree } from "element-plus";
import type Node from "element-plus/es/components/tree/src/model/node";
import type { DragEvents } from "element-plus/es/components/tree/src/model/useDragNode";
// import type {
//   AllowDropType,
//   NodeDropType,
// } from "element-plus/es/components/tree/src/tree.type";

const handleDragStart = (node: Node, ev: DragEvents) => {
  console.log("drag start", node);
};
const handleDragEnter = (
  draggingNode: Node,
  dropNode: Node,
  ev: DragEvents
) => {
  console.log("tree drag enter:", dropNode.label);
};
const handleDragLeave = (
  draggingNode: Node,
  dropNode: Node,
  ev: DragEvents
) => {
  console.log("tree drag leave:", dropNode.label);
};
const handleDragOver = (draggingNode: Node, dropNode: Node, ev: DragEvents) => {
  console.log("tree drag over:", dropNode.label);
};
const handleDragEnd = (
  draggingNode: Node,
  dropNode: Node,
  dropType: any,
  ev: DragEvents
) => {
  console.log("tree drag end:", dropNode && dropNode.label, dropType);
};
const handleDrop = (
  draggingNode: Node,
  dropNode: Node,
  dropType: any,
  ev: DragEvents
) => {
  console.log("tree drop:", dropNode.label, dropType);
};
const allowDrop = (draggingNode: Node, dropNode: Node, type: any) => {
  if (dropNode.data.label === "Level two 3-1") {
    return type !== "inner";
  } else {
    return true;
  }
};
const allowDrag = (draggingNode: Node) => {
  return !draggingNode.data.label.includes("Level three 3-1-1");
};

const data = [
  {
    label: "Level one 1",
    children: [
      {
        label: "Level two 1-1",
        children: [
          {
            label: "Level three 1-1-1",
          },
        ],
      },
    ],
  },
  {
    label: "Level one 2",
    children: [
      {
        label: "Level two 2-1",
        children: [
          {
            label: "Level three 2-1-1",
          },
        ],
      },
      {
        label: "Level two 2-2",
        children: [
          {
            label: "Level three 2-2-1",
          },
        ],
      },
    ],
  },
  {
    label: "Level one 3",
    children: [
      {
        label: "Level two 3-1",
        children: [
          {
            label: "Level three 3-1-1",
          },
        ],
      },
      {
        label: "Level two 3-2",
        children: [
          {
            label: "Level three 3-2-1",
          },
        ],
      },
    ],
  },
];

const list = ref([
  {
    label: "task 1",
    icon: "icon-rongqi",
    children: [
      {
        label: "task 2",
        icon: "icon-image",
        children: [],
      },
    ],
  },
  {
    label: "task 3",
    icon: "icon-image",
    children: [
      {
        label: "task 4",
        icon: "icon-textEdit",
        children: [],
      },
    ],
  },
  {
    label: "task 5",
    icon: "icon-image",
    children: [],
  },
]);
</script>

<template>
  <div class="row">
    <div class="col-8">
      <el-tree
        :allow-drop="allowDrop"
        :allow-drag="allowDrag"
        :data="list"
        draggable
        node-key="id"
        @node-drag-start="handleDragStart"
        @node-drag-enter="handleDragEnter"
        @node-drag-leave="handleDragLeave"
        @node-drag-over="handleDragOver"
        @node-drag-end="handleDragEnd"
        @node-drop="handleDrop"
      >
        <template #default="{ node, data }">
          <span class="custom-tree-node">
            <i class="iconfont" :class="data.icon"></i>
            <span>{{ node.label }}</span>
          </span>
        </template>
      </el-tree>
    </div>
  </div>
</template>

<style scoped lang="scss">
.custom-tree-node {
  display: flex;
  align-items: center;

  .iconfont {
    margin-right: 4px;
  }
}
</style>
