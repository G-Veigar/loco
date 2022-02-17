<script lang="ts" setup>
import { ref } from "vue";
import TreeNode from "./tree-node.vue";

const list = ref([
  {
    name: "task 1",
    icon: "icon-rongqi",
    childNodes: [
      {
        name: "task 2",
        icon: "icon-image",
        childNodes: [],
      },
    ],
  },
  {
    name: "task 3",
    icon: "icon-image",
    childNodes: [
      {
        name: "task 4",
        icon: "icon-textEdit",
        childNodes: [],
      },
    ],
  },
  {
    name: "task 5",
    icon: "icon-image",
    childNodes: [],
  },
]);
</script>

<template>
  <div class="row">
    <div class="col-8">
      <tree-node :nodes="list" />
    </div>
  </div>
</template>

<style scoped></style>
