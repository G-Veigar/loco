<script lang="ts" setup>
import { ref } from "vue";
import componentGroup from "./component-group.vue";
import pinyin from "tiny-pinyin";
import pinyin2 from "pinyin";

const res = pinyin2("弹框", {
  style: pinyin2.STYLE_NORMAL,
  heteronym: true,
  group: true,
  // segment: true,
});

// const res2 = pinyin2.compare(a, b);

console.log("拼音", res);

// console.log("对比", res2);

const isSupportPinyin = pinyin.isSupported();

const basicComponents = ref([
  {
    name: "容器",
    component: "loco-block",
    icon: "icon-rongqi",
  },
  {
    name: "按钮",
    component: "loco-button",
    icon: "icon-anniu1",
  },
  {
    name: "文本",
    component: "loco-text",
    icon: "icon-textEdit",
  },
  {
    name: "图片",
    component: "loco-image",
    icon: "icon-f-img",
  },
  {
    name: "音频",
    component: "loco-audio",
    icon: "icon-yinpin",
  },
  {
    name: "视频",
    component: "loco-vedio",
    icon: "icon-shipin-tianchong",
  },
]);

const proComponents = ref([
  {
    name: "轮播",
    component: "loco-swiper",
    icon: "icon-shouyelunbotu",
  },
  {
    name: "弹框",
    component: "loco-dialog",
    icon: "icon-dankuang",
  },
  // {
  //   name: '底部弹层',
  //   component: 'loco-popup',
  //   icon: 'icon-program-code'
  // },
  {
    name: "抽奖",
    component: "loco-lottery",
    icon: "icon-zhuanpanshezhi",
  },
  {
    name: "上传",
    component: "loco-upload",
    icon: "icon-cloudupload",
  },
  {
    name: "分享",
    component: "loco-share",
    icon: "icon-fenxiang",
  },
  {
    name: "Tab",
    component: "loco-tabs",
    icon: "icon-bootstrap_tabs",
  },
  {
    name: "挂件",
    component: "loco-widget",
    icon: "icon-widget",
  },
]);

const formComponents = ref([
  {
    name: "输入框",
    component: "loco-input",
    icon: "icon-input1",
  },
  {
    name: "文本域",
    component: "loco-textarea",
    icon: "icon-textarea",
  },
  {
    name: "单选框",
    component: "loco-radio",
    icon: "icon-radioboxfill",
  },
  {
    name: "多选框",
    component: "loco-checkbox",
    icon: "icon-check-box",
  },
  {
    name: "开关",
    component: "loco-checkbox",
    icon: "icon-switch1",
  },
  {
    name: "选择器",
    component: "loco-select",
    icon: "icon-biaodanzujian-xialakuang",
  },
  {
    name: "时间选择器",
    component: "loco-picker",
    icon: "icon-date",
  },
  {
    name: "滑动选择器",
    component: "loco-slider",
    icon: "icon-Slider-horizontal",
  },
]);

function transformPinyin(componentGroup: any) {
  if (isSupportPinyin) {
    componentGroup.forEach((element: any) => {
      element.namePinyin = pinyin.convertToPinyin(element.name).toLowerCase();
    });
  }
}

transformPinyin(basicComponents.value);
transformPinyin(proComponents.value);
transformPinyin(formComponents.value);

const searchVal = ref("");
</script>

<template>
  <div class="component-lib">
    <div class="search-bar">
      <div class="search-input-wrapper">
        <input
          type="text"
          class="search-input"
          placeholder="Search component"
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
    <div class="component-group-wrapper">
      <component-group
        name="基础组件"
        :components="basicComponents"
        :searchVal="searchVal"
      ></component-group>
      <component-group
        name="高级组件"
        :components="proComponents"
        :searchVal="searchVal"
      ></component-group>
      <component-group
        name="表单组件"
        :components="formComponents"
        :searchVal="searchVal"
      ></component-group>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/style/var.scss";

.component-lib {
  user-select: none;
  flex: auto;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}

.search-bar {
  display: flex;
  align-items: center;
  padding: 0 8px;
  position: sticky;
  align-items: center;
  top: 0;
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

.component-group-wrapper {
  overflow: auto;
  flex: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
