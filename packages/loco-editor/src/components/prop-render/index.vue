<script lang="ts" setup>
import { ref } from "vue";
import propComponentMap from "./prop-component-map";

const config = ref({
  state: ["active", "disabled"],
  prop: [
    {
      grounpName: "基础配置",
      items: [
        {
          label: "按钮文字",
          path: "text",
          type: "text",
          default: "按钮",
          required: false,
        },
        {
          label: "点击操作",
          path: "action",
          type: "select",
          props: {
            options: [
              {
                label: "跳转其他页面",
                value: "navTo",
              },
              {
                label: "什么都不做",
                value: "none",
              },
            ],
          },
          default: "按钮",
          required: false,
        },
        {
          if: ($scope: any): boolean => {
            return $scope.path === "navTo";
          },
          label: "跳转链接",
          key: "link",
          type: "text",
        },
        {
          label: "开关",
          key: "switch",
          type: "switch",
        },
        {
          label: "数目",
          key: "radio",
          type: "radio",
          props: {
            options: [
              {
                label: "1个",
                value: 1,
              },
              {
                label: "2个",
                value: 2,
              },
              {
                label: "3个",
                value: 3,
              },
            ],
          },
        },
        {
          label: "数目2",
          key: "checkbox",
          type: "checkbox",
          props: {
            options: [
              {
                label: "1个",
                value: 1,
              },
              {
                label: "2个",
                value: 2,
              },
              {
                label: "3个",
                value: 3,
              },
            ],
          },
        },
        {
          label: "文本",
          key: "textarea",
          type: "text",
          props: {
            type: "textarea",
          },
        },
        {
          label: "范围",
          key: "slider",
          type: "slider",
        },
        {
          label: "开始日期",
          key: "date",
          type: "date",
        },
        {
          label: "背景色",
          key: "color",
          type: "color",
        },
        {
          label: "个数2",
          key: "number",
          type: "number",
        },
      ],
    },
    {
      grounpName: "样式配置",
      items: [
        {
          label: "字体",
          path: "style",
          type: "text",
        },
        // {
        //   label: '其他',
        //   path: 'other',
        //   type: 'custom' // 自定义输入组件
        //   // component: ''
        // }
      ],
    },
  ],
});

const activeNames = ref([]);

const componentMap = ref(propComponentMap);
</script>

<template>
  <div class="prop-render">
    <el-collapse v-model="activeNames">
      <el-collapse-item
        v-for="propGroup in config.prop"
        :key="propGroup.grounpName"
        :title="propGroup.grounpName"
        :name="propGroup.grounpName"
      >
        <div
          class="item-setter"
          v-for="item in propGroup.items"
          :key="item.path"
        >
          <div class="prop-item-label">{{ item.label }}</div>
          <div class="input-wrapper">
            <component
              :is="componentMap[item.type]"
              v-bind="item.props"
            ></component>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style lang="scss">
@import "@/style/var.scss";

.prop-render {
  .el-collapse {
    border: none;
  }
  .el-collapse-item__header {
    color: rgb(217, 217, 217);
    background-color: rgb(43, 43, 43);
    border-bottom: 1px solid rgb(33, 33, 33);
    height: 30px;
    padding-left: 10px;
  }
  .el-collapse-item__wrap {
    border: none;
  }
  .el-collapse-item__content {
    padding-bottom: 0;
    background-color: $mainBgColorLight;
  }

  .prop-item-label {
    width: 70px;
    padding: 0 6px;
    flex: none;
    line-height: 30px;
    color: rgb(217, 217, 217);
  }

  .input-wrapper {
    padding-right: 10px;
    flex: auto;
    display: flex;
  }

  .item-setter {
    display: flex;
    align-items: center;
  }

  .el-select {
    width: 100%;
    flex: auto;
  }

  .el-input__inner {
    background-color: $mainBgColor;
    border: 1px solid #212121;
    height: 24px;
    line-height: 24px;
    border-radius: 2px;
    padding: 0 5px;
    font-size: 16px;
  }
}
</style>
