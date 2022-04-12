<script lang="ts" setup>
import { ref } from "vue";
import stateManager from "./state-manager.vue";
import eventManager from "./event-manager.vue";
import actionManager from "./action-manager.vue";
import apiManager from "./api-manager.vue";

const searchVal = ref("");
const activeTab = ref("event");
</script>

<template>
  <div class="flow-manager">
    <div class="top-fixed">
      <!-- TODO: 将搜索组件抽离 -->
      <div class="search-bar">
        <div class="search-input-wrapper">
          <input
            type="text"
            class="search-input"
            placeholder="Search Extension"
            v-model="searchVal"
          />
          <i
            class="iconfont icon-close2"
            v-show="searchVal"
            @click="searchVal = ''"
          ></i>
          <i class="iconfont icon-search"></i>
        </div>
      </div>
      <div class="editor-tab">
        <div
          class="tab-item"
          :class="{ active: activeTab === 'event' }"
          @click="activeTab = 'event'"
        >
          事件配置
        </div>
        <div
          class="tab-item"
          :class="{ active: activeTab === 'state' }"
          @click="activeTab = 'state'"
        >
          状态
        </div>
        <div
          class="tab-item"
          :class="{ active: activeTab === 'action' }"
          @click="activeTab = 'action'"
        >
          动作
        </div>
        <div
          class="tab-item"
          :class="{ active: activeTab === 'api' }"
          @click="activeTab = 'api'"
        >
          网络接口
        </div>
      </div>
    </div>
    <div class="extension-group-wrapper">
      <div v-show="activeTab === 'event'">
        <event-manager></event-manager>
      </div>
      <div v-show="activeTab === 'state'">
        <state-manager></state-manager>
      </div>
      <div v-show="activeTab === 'action'">
        <action-manager></action-manager>
      </div>
      <div v-show="activeTab === 'api'">
        <api-manager></api-manager>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/style/var.scss";

.flow-manager {
  width: 300px;
  user-select: none;
  flex: auto;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}

.top-fixed {
  position: sticky;
  top: 0;
}

.search-bar {
  display: flex;
  align-items: center;
  padding: 0 8px;
  align-items: center;
  flex: none;
  height: 46px;
  background-color: $mainBgColorLight;
  border-bottom: 1px solid #444;

  .search-input-wrapper {
    flex: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-input {
    box-sizing: border-box;
    background-color: transparent;
    outline: none;
    border: 1px solid #333;
    height: 30px;
    line-height: 30px;
    border-radius: 4px;
    color: #fff;
    background-color: #333;
    flex: auto;
    font-size: 14px;
    box-sizing: border-box;
    padding-left: 6px;
    padding-right: 48px;
    transition: all 0.2s;
    box-shadow: 0 0 5px -1px #ccc;

    &:hover,
    &:focus {
      box-shadow: 0 0 5px -2px #fff;
      border: 1px solid #aaa;
    }
  }

  .icon-search {
    position: absolute;
    right: 14px;
    z-index: 1;
    font-size: 18px;
    color: #aaa;
    cursor: pointer;

    &:hover {
      color: #fff;
    }
  }

  .icon-close2 {
    position: absolute;
    right: 36px;
    z-index: 1;
    font-size: 14px;
    cursor: pointer;
    color: #aaa;

    &:hover {
      color: #fff;
    }
  }
}

.editor-tab {
  display: flex;
  height: 26px;
  line-height: 26px;
  box-sizing: content-box;
  align-items: stretch;
  padding: 0px 8px 6px;
  overflow: hidden;
  background-color: $mainBgColorLight;
  border-bottom: 1px solid #2b2b2b;
  .tab-item {
    flex: 1;
    border: 1px solid #222;
    background-color: rgb(94, 94, 94);
    text-align: center;
    font-size: 12px;
    cursor: pointer;
    &.active {
      background-color: #2b2b2b;
      color: #eee;
    }
  }
}
</style>
