<script lang="ts" setup>
const props = defineProps({
  name: String,
  icon: String,
  description: String,
  author: String,
  isOfficial: Boolean,
  downloadAmount: Number,
  rate: Number,
  installed: Boolean,
});
</script>

<template>
  <div class="extension-item">
    <img :src="icon" alt="" class="extension-icon" />
    <div class="middle-info-wrapper">
      <div class="extension-name">
        {{ name }}
      </div>
      <div class="extension-description">{{ description }}</div>
      <div class="extension-author">
        <i v-if="isOfficial" class="iconfont icon-guanfang2"></i>{{ author }}
      </div>
    </div>
    <div class="right-info-wrapper">
      <div class="extension-download-amount">
        <i class="iconfont icon-download1"></i>{{ downloadAmount }}
      </div>
      <div class="extension-rate">
        <i class="iconfont icon-rate"></i>{{ rate }}
      </div>
      <button class="install-btn" v-if="!installed">安装</button>
      <button class="install-btn delete" v-else>删除</button>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/style/var.scss";

.extension-item {
  padding: 4px 6px;
  display: flex;
  align-items: stretch;
  cursor: pointer;
  border-bottom: 1px solid #333;
  transition: box-shadow 0.2s;

  &:hover {
    background-color: #5d5d5d;
    color: $optionHoveredColor;
    box-shadow: 0 0 6px -1px #111 inset;
  }

  .extension-icon {
    flex: none;
    width: 40px;
    height: 40px;
    margin-right: 6px;
    align-self: center;
  }

  .middle-info-wrapper {
    flex: auto;
    text-align: left;
    .extension-name {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 4px;
    }
    .extension-description {
      font-size: 12px;
      margin-bottom: 4px;
    }
    .extension-author {
      font-size: 12px;
      display: flex;
      align-items: center;
      .icon-guanfang2 {
        margin-right: 2px;
        color: #3cb371;
      }
    }
  }

  .right-info-wrapper {
    margin-left: 4px;
    flex: none;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
    margin: 4px;
    .icon-download,
    .icon-rate {
      font-size: 12px;
      margin-right: 2px;
    }
    .extension-download-amount {
      display: flex;
      font-size: 12px;
      align-items: center;
    }
    .extension-rate {
      display: flex;
      align-items: center;
      font-size: 12px;
      margin-bottom: 2px;
    }
    .install-btn {
      font-size: 12px;
      background-color: #1e90ff;
      border: none;
      color: #fff;
      width: 40px;
      height: 18px;
      font-weight: bold;
      cursor: pointer;

      &.delete {
        background-color: #ee4522;
      }
    }
  }
}
</style>
