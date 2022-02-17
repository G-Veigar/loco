<script lang="ts" setup>
interface StyleObjSpacing {
  marginTop: number | string;
  marginRight: number | string;
  marginBottom: number | string;
  marginLeft: number | string;
  paddingTop: number | string;
  paddingRight: number | string;
  paddingBottom: number | string;
  paddingLeft: number | string;
}

const marginBarList = [
  {
    name: "marginTop",
    id: "margin-top-button",
    pathD: "m1,1 h223 l-36,24 h-151 l-36,-24z",
    color: "rgb(77, 77, 77)",
  },
  {
    name: "marginRight",
    id: "margin-right-button",
    pathD: "m223,1 v119 l-36,-24 v-71 l36,-24z",
    color: "rgb(85, 85, 85)",
  },
  {
    name: "marginBottom",
    id: "margin-bottom-button",
    pathD: "m1,119 h223 l-36,-24 h-151l-36,24z",
    color: "rgb(77, 77, 77)",
  },
  {
    name: "marginLeft",
    id: "margin-left-button",
    pathD: "m1,1 v119 l36,-24 v-71 l-36,-24z",
    color: "rgb(85, 85, 85)",
  },
];

const marginEditList = [
  {
    name: "marginTop",
    id: "margin-top-edit",
    gridArea: "1 / 2 / 2 / 3",
  },
  {
    name: "marginRight",
    id: "margin-right-edit",
    gridArea: "2 / 3 / 3 / 4",
  },
  {
    name: "marginBottom",
    id: "margin-bottom-edit",
    gridArea: "3 / 2 / 4 / 3",
  },
  {
    name: "marginLeft",
    id: "margin-left-edit",
    gridArea: "2 / 1 / 3 / 2",
  },
];

const paddingEditList = [
  {
    name: "paddingTop",
    id: "padding-top-edit",
    gridArea: "1 / 2 / 2 / 3",
  },
  {
    name: "paddingRight",
    id: "padding-right-edit",
    gridArea: "2 / 3 / 3 / 4",
  },
  {
    name: "paddingBottom",
    id: "padding-bottom-edit",
    gridArea: "3 / 2 / 4 / 3",
  },
  {
    name: "paddingLeft",
    id: "padding-left-edit",
    gridArea: "2 / 1 / 3 / 2",
  },
];

const paddingBarList = [
  {
    name: "paddingTop",
    id: "padding-top-button",
    pathD: "m1,1 h143 l-36,24 h-71 l-36,-24z",
    color: "rgb(77, 77, 77)",
  },
  {
    name: "paddingRight",
    id: "padding-right-button",
    pathD: "m143,1 v63 l-36,-24 v-15 l36,-24z",
    color: "rgb(85, 85, 85)",
  },
  {
    name: "paddingBottom",
    id: "padding-bottom-button",
    pathD: "m1,63 h143 l-36,-24 h-71 l-36,24z",
    color: "rgb(77, 77, 77)",
  },
  {
    name: "paddingLeft",
    id: "padding-left-button",
    pathD: "m1,1 v63 l36,-24 v-15 l-36,-24z",
    color: "rgb(85, 85, 85)",
  },
];

const props = defineProps<{
  styleObj: StyleObjSpacing | undefined;
}>();

function handleValueEdit(name: string): void {
  console.log("handleValueEdit", name);
}
</script>

<template>
  <div class="spacing-setter">
    <div class="inner-wrapper">
      <!-- margin 设置块 -->
      <div class="margin-block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="224"
          height="120"
          style="grid-area: 1 / 1 / -1 / -1"
        >
          <!-- margin 分区 -->
          <g
            class="margin-bar-item"
            v-for="item in marginBarList"
            :key="item.name"
          >
            <path
              cursor="n-resize"
              mode="delta"
              fill="currentColor"
              :d="item.pathD"
              threshold="1"
              :data-automation-id="item.id"
              delay="0"
              :style="{ color: item.color }"
            ></path>
          </g>
          <clipPath id="margin-outer">
            <rect
              x="0"
              y="0"
              width="224"
              height="120"
              fill="transparent"
              rx="2"
              ry="2"
              style="pointer-events: none"
            ></rect>
          </clipPath>
          <rect
            clip-path="url(#margin-outer)"
            x="0"
            y="0"
            width="224"
            height="120"
            fill="transparent"
            rx="2"
            ry="2"
            style="pointer-events: none; stroke-width: 2px; stroke: #333333"
          ></rect>
          <clipPath id="margin-inner">
            <rect
              x="36"
              y="24"
              width="152"
              height="72"
              fill="transparent"
              rx="2"
              ry="2"
              style="pointer-events: none"
            ></rect>
          </clipPath>
          <rect
            clip-path="url(#margin-inner)"
            x="36"
            y="24"
            width="152"
            height="72"
            fill="transparent"
            rx="2"
            ry="2"
            style="pointer-events: none; stroke-width: 2px; stroke: #333333"
          ></rect>
        </svg>

        <!-- margin value -->
        <div
          class="margin-edit-item"
          v-for="item in marginEditList"
          :key="item.name"
          :name="item.name"
          :data-automation-id="item.id"
          :style="{ gridArea: item.gridArea }"
          threshold="1"
          delay="300"
          mode="delta"
          @click="handleValueEdit(item.name)"
        >
          0
        </div>
      </div>

      <!-- padding 设置块 -->
      <div class="padding-block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="144"
          height="64"
          style="grid-area: 1 / 1 / -1 / -1"
        >
          <!-- padding 分区 -->
          <g
            class="padding-bar-item"
            v-for="item in paddingBarList"
            :key="item.name"
          >
            <path
              cursor="s-resize"
              mode="delta"
              fill="currentColor"
              :d="item.pathD"
              threshold="1"
              :data-automation-id="item.id"
              delay="0"
              :style="{ color: item.color }"
            ></path>
          </g>
          <clipPath id="padding-outer">
            <rect
              x="0"
              y="0"
              width="144"
              height="64"
              fill="transparent"
              rx="2"
              ry="2"
              style="pointer-events: none"
            ></rect>
          </clipPath>
          <rect
            clip-path="url(#padding-outer)"
            x="0"
            y="0"
            width="144"
            height="64"
            fill="transparent"
            rx="2"
            ry="2"
            style="pointer-events: none; stroke-width: 2px; stroke: #333333"
          ></rect>
          <clipPath id="padding-inner">
            <rect
              x="36"
              y="24"
              width="72"
              height="16"
              fill="transparent"
              rx="2"
              ry="2"
              style="pointer-events: none"
            ></rect>
          </clipPath>
          <rect
            clip-path="url(#padding-inner)"
            x="36"
            y="24"
            width="72"
            height="16"
            fill="transparent"
            rx="2"
            ry="2"
            style="pointer-events: none; stroke-width: 2px; stroke: #333333"
          ></rect>
        </svg>

        <!-- padding value -->
        <div
          class="padding-edit-item"
          v-for="item in paddingEditList"
          :key="item.name"
          threshold="1"
          delay="300"
          mode="delta"
          :name="item.name"
          :data-automation-id="item.id"
          :style="{ gridArea: item.gridArea }"
          @click="handleValueEdit(item.name)"
        >
          0
        </div>
      </div>

      <!-- 文本 MARGIN -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        style="grid-area: 3 / 3 / span 3 / span 3; pointer-events: none"
      >
        <text
          x="6"
          y="4"
          fill="#a6a6a6"
          font-style="italic"
          font-weight="bold"
          font-size="8"
          dominant-baseline="hanging"
        >
          PADDING
        </text>
      </svg>

      <!-- 文本 PADDING -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        style="grid-area: 1 / 1 / -1 / -1; pointer-events: none"
      >
        <text
          x="6"
          y="4"
          fill="#a6a6a6"
          font-style="italic"
          font-weight="bold"
          font-size="8"
          dominant-baseline="hanging"
        >
          MARGIN
        </text>
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.spacing-setter {
  display: flex;
  padding: 0px 8px 8px;
  background-color: rgb(64, 64, 64);
  justify-content: center;

  .inner-wrapper {
    position: relative;
    display: grid;
    margin-top: 8px;
    margin-right: 8px;
    width: 224px;
    height: 120px;
    grid-template-columns: 36px 4px 36px 1fr 36px 4px 36px;
    grid-template-rows: 24px 4px 24px 1fr 24px 4px 24px;
    outline-style: none;
    cursor: default;
    user-select: none;

    .margin-block {
      grid-area: 1 / 1 / -1 / -1;
      display: grid;
      grid-template-columns: 36px 1fr 36px;
      grid-template-rows: 24px minmax(16px, 1fr) 24px;
      justify-items: center;
      width: 224px;
      height: 120px;
    }

    .margin-bar-item {
      &:hover {
        path {
          color: rgb(95, 95, 95) !important;
        }
      }
    }

    .padding-bar-item {
      &:hover {
        path {
          color: rgb(95, 95, 95) !important;
        }
      }
    }

    .margin-edit-item {
      cursor: default;
      user-select: none;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 10px;
      font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
      font-weight: 400;
      line-height: 10px;
      letter-spacing: -0.2px;
      display: flex;
      color: rgb(217, 217, 217);
      background: transparent;
      padding: 2px;
      margin-left: -2px;
      border-radius: 2px;
      max-width: 100%;
      box-sizing: content-box;
      place-self: center;
      position: relative;
      opacity: 1;
      align-items: center;
      justify-content: center;
    }

    .padding-block {
      grid-area: 3 / 3 / span 3 / span 3;
      display: grid;
      grid-template-columns: 36px 1fr 36px;
      grid-template-rows: 24px minmax(16px, 1fr) 24px;
      justify-items: center;
      width: 144px;
      height: 64px;
    }

    .padding-edit-item {
      cursor: default;
      user-select: none;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 10px;
      font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
      font-weight: 400;
      line-height: 10px;
      letter-spacing: -0.2px;
      display: flex;
      color: rgb(217, 217, 217);
      background: transparent;
      padding: 2px;
      margin-left: -2px;
      border-radius: 2px;
      max-width: 100%;
      box-sizing: content-box;
      place-self: center;
      position: relative;
      opacity: 1;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
