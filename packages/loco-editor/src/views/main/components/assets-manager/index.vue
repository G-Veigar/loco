<script lang="ts" setup>
import { ref } from "vue";
import extensionGroup from "./extension-group.vue";
import extensionItem from "./extension-item.vue";
import imgManager from "./img-manager/img-manager.vue";
import videoManager from "./video-manager/video-manager.vue";
import audioManager from "./audio-manager.vue";
import lottieManager from "./lottie-manager.vue";
import { ArrowDown } from "@element-plus/icons-vue";

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
            placeholder="Search Assets"
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
      <button class="upload-btn">
        <i class="iconfont icon-cloud-upload"></i>
        上传资源
      </button>
    </div>
    <div class="extension-group-wrapper">
      <extension-group name="图片">
        <img-manager></img-manager>
      </extension-group>
      <extension-group name="视频">
        <video-manager></video-manager>
      </extension-group>
      <extension-group name="音频">
        <audio-manager></audio-manager>
      </extension-group>
      <extension-group name="lottie">
        <lottie-manager></lottie-manager>
      </extension-group>
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
  background-color: $mainBgColorLight;
}

.search-bar {
  display: flex;
  align-items: center;
  padding: 0 8px;
  align-items: center;
  flex: none;
  height: 46px;
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

.upload-btn {
  height: 30px;
  width: 94%;
  margin-bottom: 6px;
  font-size: 14px;
  border: 1px solid #222;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  .icon-cloud-upload {
    font-size: 18px;
    margin-right: 4px;
  }
}
</style>
