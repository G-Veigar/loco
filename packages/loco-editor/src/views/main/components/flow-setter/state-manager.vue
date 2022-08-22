<script lang="ts" setup>
import { ref } from "vue";
import StateItem from "./state-item.vue";
import stateAddDialog from "./state-add-dialog.vue";

const activeNames = ref(["customState", "componentState", "appState"]);
const handleChange = (val: string[]) => {
  console.log(val);
};

const addNewState = () => {
  stateAddDaiogVisible.value = true;
};

const customStateList = [
  {
    name: "visible",
    desc: "是否可见",
    type: "boolean",
    value: true,
  },
  {
    name: "obj",
    type: "object",
    value: {
      a: {
        name: "a",
        desc: "aaa",
        type: "string",
        value: "aaa",
      },
      b: {
        name: "b",
        desc: "bbb",
        type: "number",
        value: 1,
      },
    },
  },
  {
    name: "list",
    type: "array",
    value: [
      {
        name: "a1",
        desc: "aaa",
        type: "string",
        value: "aaa",
      },
      {
        name: "b1",
        desc: "bbb",
        type: "number",
        value: 1,
      },
    ],
  },
];

const componentStateList = [];
const appStateList = [];

const stateAddDaiogVisible = ref(false);
</script>

<template>
  <div class="state-manager">
    <div class="btn-wrapper">
      <el-button
        type="success"
        size="small"
        class="add-state-btn"
        @click="addNewState"
        >新增自定义状态</el-button
      >
    </div>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="自定义" name="customState">
        <state-item
          v-for="(stateItem, index) in customStateList"
          :key="index"
          :state="stateItem"
        ></state-item>
      </el-collapse-item>
      <el-collapse-item title="组件" name="componentState">
        <state-item
          v-for="(stateItem, index) in componentStateList"
          :key="index"
          :state="stateItem"
        ></state-item>
      </el-collapse-item>
      <el-collapse-item title="系统应用" name="appState">
        <state-item
          v-for="(stateItem, index) in appStateList"
          :key="index"
          :state="stateItem"
        ></state-item>
      </el-collapse-item>
    </el-collapse>
    <state-add-dialog v-model="stateAddDaiogVisible"></state-add-dialog>
  </div>
</template>

<style lang="scss" scoped>
.state-group {
  .group-label {
    font-size: 14px;
    text-align: left;
  }
}
.btn-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 6px 0;
  .add-state-btn {
    width: 80%;
  }
}
</style>

<style lang="scss">
.state-manager {
  .el-collapse-item__content {
    padding: 10px 8px;
    background-color: #3e3e3e;
  }
  .el-collapse-item__header {
    padding-left: 8px;
    color: rgb(217, 217, 217);
    background-color: rgb(43, 43, 43);
    border-bottom: 1px solid rgb(33, 33, 33);
    height: 30px;
  }
  .el-collapse {
    border: none;
    --el-collapse-border-color: none;
  }
}
</style>
