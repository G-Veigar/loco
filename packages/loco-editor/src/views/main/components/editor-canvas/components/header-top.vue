<script lang="ts" setup>
import { computed, ref } from "vue";
import { deviceList } from "@/modules/edit-viewport/device";
import { confirm, alert, notify } from "@/modules/notify";
import { useEditorStore } from "@/stores/editor";
import QRcode from "qrcode";
import editor from "../../../../../modules/editor/index";
import type { tsMethodSignature } from "@babel/types";

const editorStore = useEditorStore();

const editViewport = computed(() => {
  return editorStore.editViewport;
});

const showDeviceList = ref(false);

function rorateDevice() {
  editorStore.setEditViewport({
    key: "horizontal",
    value: !editViewport.value.horizontal,
  });
}

async function toggleShowDeviceList() {
  showDeviceList.value = !showDeviceList.value;
  // const res = await confirm({
  //   title: "Info",
  //   message: "This is an info message",
  // });
  const res = await notify({
    title: "Prompt",
    message: "This is a message that does not automatically close",
  });
  console.log("toggleShowDeviceList", res);
}

function preview() {
  console.log("preview");
}

function save() {
  editor.app.save();
  console.log("save");
}

function testSet(key: string) {
  editor.operator.setVal(key, key);
}

function undo() {
  editor.operator.undo();
}

function redo() {
  editor.operator.redo();
}

let QRcodeLink = "http://172.17.25.204:3000/preview";
const QRcodeCanvas = ref();
const QRcodeVisiable = ref(false);

function showPreviewQrcode() {
  QRcodeVisiable.value = !QRcodeVisiable.value;
  QRcode.toCanvas(QRcodeCanvas.value, QRcodeLink, { margin: 2 }, (err) => {
    if (err) {
      throw Error();
    }
  });
}
</script>

<template>
  <div class="header-top">
    <div class="top-left">
      <i class="iconfont icon-feedback-line" title="反馈"></i>
    </div>
    <div class="top-middle">
      <div class="device-picker">
        <i class="iconfont icon-phone"></i>
        <div class="device-name btn" @click="toggleShowDeviceList">
          {{ editViewport.device }}
          <i class="iconfont icon-caret-down"></i>
        </div>
        <div class="pick-list" v-if="showDeviceList">
          <div class="pick-list-item custom">自定义...</div>
          <div
            class="pick-list-item"
            v-for="item in deviceList"
            :key="item.name"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
      <div class="device-ratio btn">
        {{ editViewport.width }} x {{ editViewport.height }}
      </div>
      <div class="device-zoom btn">{{ editViewport.zoom }}%</div>
      <div
        class="device-horizontal btn"
        :class="{ checked: editViewport.horizontal }"
        @click="rorateDevice"
      >
        <i class="iconfont icon-xuanzhuan1"></i>
      </div>
      <div class="device-other btn">
        <i class="iconfont icon-other1"></i>
      </div>
    </div>

    <div class="top-right">
      <div class="test" style="display: flex">
        <div @click="testSet('name')">setName</div>
        <div @click="testSet('age')">setAge</div>
        <div @click="testSet('child')">setChild</div>
        <div @click="undo">undo</div>
        <div @click="redo">redo</div>
      </div>
      <i
        class="btn iconfont icon-btn icon-save-fill"
        title="保存"
        @click="save"
      ></i>
      <i
        class="icon-btn btn iconfont icon-preview"
        title="预览"
        @click="preview"
      ></i>
      <div class="qrcode-wrapper">
        <i
          class="qrcode-btn btn iconfont icon-QR-code"
          title="扫码预览"
          @click="showPreviewQrcode"
        ></i>
        <div class="qrcode-card" v-show="QRcodeVisiable">
          <canvas class="qrcode-canvas" ref="QRcodeCanvas"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/style/var.scss";

.header-top {
  width: 100%;
  display: flex;
  align-items: center;
  height: $headerTopHeight;
  box-sizing: border-box;
  background-color: $mainBgColorLight;
  border-bottom: 1px solid $mainBorderColor;
  cursor: default;

  .top-left {
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 10px;
    .iconfont {
      font-size: 20px;
    }
  }

  .top-middle {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .top-right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10px;

    .qrcode-wrapper {
      position: relative;
      .qrcode-card {
        position: absolute;
        top: 36px;
        right: -4px;
        box-shadow: 1px 1px 5px 0px #666;
        background-color: #fff;
        padding: 0;
      }
      .qrcode-canvas {
        width: 132px !important;
        height: 132px !important;
      }
    }
    .icon-btn {
      font-size: 20px;
      margin-right: 14px;
    }

    .qrcode-btn {
      font-size: 20px;
    }
  }

  .btn {
    cursor: pointer;
    &:hover {
      color: $optionHoveredColor;
    }
  }

  .device-picker {
    font-size: 14px;
    display: flex;
    align-items: center;
    position: relative;
    overflow: visible;

    .pick-list {
      position: absolute;
      top: 105%;
      background-color: $leftBarDetailBgColor;
      border: 1px solid rgb(33, 33, 33);
      border-radius: 3px;
      box-shadow: rgb(0 0 0 / 15%) 0px 5px 10px;
      max-height: 500px;
      width: 120%;
      overflow-y: scroll;
      left: 15px;
      &::-webkit-scrollbar {
        display: none; /* Chrome Safari */
      }

      .pick-list-item {
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        box-sizing: border-box;
        color: $mainFontColor;
        text-align: left;

        &.custom {
          margin-bottom: 4px;
          &::after {
            content: "";
            display: block;
            height: 1px;
            background-color: $mainBgColorLight;
          }
        }

        &:hover {
          background-color: $optionHoveredBgColor;
          color: $optionHoveredColor;
        }
      }
    }

    .icon-phone {
      font-size: 22px;
      margin-right: 4px;
    }

    .icon-caret-down {
      font-size: 12px;
      margin-left: 2px;
    }
  }

  .device-ratio {
    margin-left: 16px;
    font-size: 14px;
  }

  .device-zoom {
    margin-left: 16px;
    font-size: 14px;
  }

  .device-horizontal {
    margin-left: 16px;
    transition: transform 0.5s;

    .iconfont {
      font-size: 22px;
    }

    &.checked {
      transform: rotate(90deg);
    }
  }

  .device-other {
    margin-left: 16px;
    .iconfont {
      font-size: 22px;
    }
  }
}

.test {
  div {
    border: 1px solid #aaa;
  }
}
</style>
