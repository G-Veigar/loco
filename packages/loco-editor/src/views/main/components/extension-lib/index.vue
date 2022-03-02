<script lang="ts" setup>
import { ref } from "vue";
import extensionGroup from "./extension-group.vue";
import extensionItem from "./extension-item.vue";

const searchVal = ref("");
const activeTab = ref("shop");
</script>

<template>
  <div class="extension-lib">
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
          :class="{ active: activeTab === 'shop' }"
          @click="activeTab = 'shop'"
        >
          商店
        </div>
        <div
          class="tab-item"
          :class="{ active: activeTab === 'installed' }"
          @click="activeTab = 'installed'"
        >
          已安装
        </div>
      </div>
    </div>
    <div class="extension-group-wrapper">
      <div v-show="activeTab === 'shop'">
        <extension-item
          name="Vue"
          icon="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fblog.yaobieting.com%2Fwp-content%2Fuploads%2F2015%2F06%2Flogo-1.png&refer=http%3A%2F%2Fblog.yaobieting.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648316401&t=ef777c092af9b7b88e7317fc8c2e67d4"
          description="这是一个没什么用的vue插件"
          author="Loco"
          :isOfficial="true"
          :downloadAmount="123"
          :rate="4.3"
        ></extension-item>
        <extension-item
          name="React"
          icon="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs4.51cto.com%2Fwyfs01%2FM01%2F44%2F82%2FwKioOVK37u-gR__UAABqGmksOc4807.png&refer=http%3A%2F%2Fs4.51cto.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648318175&t=16ab12b8c3d6488312cca83a7708fcde"
          description="这是一个没什么用的React插件"
          author="Loco"
          :isOfficial="true"
          :downloadAmount="47"
          :rate="4.1"
        ></extension-item>
        <extension-item
          name="Webpack"
          icon="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.zhimg.com%2Fv2-b3cbe05a99bbd53039fe6bb8ead786db_ipico.jpg&refer=http%3A%2F%2Fpic4.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648318429&t=b249a97bcc18dfe7e98b479b34ba600a"
          description="这是一个没什么用的Webpack插件"
          author="Loco"
          :isOfficial="true"
          :downloadAmount="47"
          :rate="4.1"
        ></extension-item>
        <extension-item
          name="Vue"
          icon="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fblog.yaobieting.com%2Fwp-content%2Fuploads%2F2015%2F06%2Flogo-1.png&refer=http%3A%2F%2Fblog.yaobieting.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648316401&t=ef777c092af9b7b88e7317fc8c2e67d4"
          description="这是一个没什么用的vue插件"
          author="Loco"
          :isOfficial="true"
          :downloadAmount="123"
          :rate="4.3"
        ></extension-item>
        <extension-item
          name="React"
          icon="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs4.51cto.com%2Fwyfs01%2FM01%2F44%2F82%2FwKioOVK37u-gR__UAABqGmksOc4807.png&refer=http%3A%2F%2Fs4.51cto.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648318175&t=16ab12b8c3d6488312cca83a7708fcde"
          description="这是一个没什么用的React插件"
          author="Loco"
          :isOfficial="true"
          :downloadAmount="47"
          :rate="4.1"
        ></extension-item>
        <extension-item
          name="Webpack"
          icon="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.zhimg.com%2Fv2-b3cbe05a99bbd53039fe6bb8ead786db_ipico.jpg&refer=http%3A%2F%2Fpic4.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648318429&t=b249a97bcc18dfe7e98b479b34ba600a"
          description="这是一个没什么用的Webpack插件"
          author="Loco"
          :isOfficial="true"
          :downloadAmount="47"
          :rate="4.1"
        ></extension-item>
        <extension-item
          name="Vue"
          icon="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fblog.yaobieting.com%2Fwp-content%2Fuploads%2F2015%2F06%2Flogo-1.png&refer=http%3A%2F%2Fblog.yaobieting.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648316401&t=ef777c092af9b7b88e7317fc8c2e67d4"
          description="这是一个没什么用的vue插件"
          author="Loco"
          :isOfficial="true"
          :downloadAmount="123"
          :rate="4.3"
        ></extension-item>
        <extension-item
          name="React"
          icon="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs4.51cto.com%2Fwyfs01%2FM01%2F44%2F82%2FwKioOVK37u-gR__UAABqGmksOc4807.png&refer=http%3A%2F%2Fs4.51cto.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648318175&t=16ab12b8c3d6488312cca83a7708fcde"
          description="这是一个没什么用的React插件"
          author="Loco"
          :isOfficial="true"
          :downloadAmount="47"
          :rate="4.1"
        ></extension-item>
        <extension-item
          name="Webpack"
          icon="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.zhimg.com%2Fv2-b3cbe05a99bbd53039fe6bb8ead786db_ipico.jpg&refer=http%3A%2F%2Fpic4.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648318429&t=b249a97bcc18dfe7e98b479b34ba600a"
          description="这是一个没什么用的Webpack插件"
          author="Loco"
          :isOfficial="true"
          :downloadAmount="47"
          :rate="4.1"
        ></extension-item>
      </div>
      <div v-show="activeTab === 'installed'">
        <extension-item
          name="Webpack"
          icon="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.zhimg.com%2Fv2-b3cbe05a99bbd53039fe6bb8ead786db_ipico.jpg&refer=http%3A%2F%2Fpic4.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648318429&t=b249a97bcc18dfe7e98b479b34ba600a"
          description="这是一个没什么用的Webpack插件"
          author="Loco"
          :isOfficial="true"
          :downloadAmount="47"
          :rate="4.1"
          :installed="true"
        ></extension-item>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/style/var.scss";

.extension-lib {
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
    font-size: 14px;
    cursor: pointer;
    &.active {
      background-color: #2b2b2b;
      color: #eee;
    }
  }
}
</style>
