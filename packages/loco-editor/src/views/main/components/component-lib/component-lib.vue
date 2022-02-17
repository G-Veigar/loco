<script lang="ts" setup>
import { ref } from "vue";
import componentGroup from "./component-group.vue";

const basicComponents = [
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
];

const proComponents = [
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
];

const formComponents = [
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
];
</script>

<template>
  <div class="component-lib">
    <component-group
      name="基础组件"
      :components="basicComponents"
    ></component-group>
    <component-group
      name="高级组件"
      :components="proComponents"
    ></component-group>
    <component-group
      name="表单组件"
      :components="formComponents"
    ></component-group>
  </div>
</template>

<style lang="scss">
.component-lib {
  user-select: none;
}
</style>
