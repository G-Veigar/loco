import card from "./components/card.vue";
import locoListContainer from "../../loco-component/pro/loco-list-container/index.vue";

export default {
  // 渲染的组件
  view: locoListContainer,
  // 组件配置参数
  props: {
    col: {
      label: "每行数量",
      type: "number",
      default: "按钮",
      rules: [], // 规则
    },
    gap: {
      label: "间距",
      type: "object",
    },
    itemType: {
      label: "列表项",
      type: "component",
      options: [card],
    },
    listData: {
      label: "列表数据",
      type: "array",
      writable: true,
    },
  },
};
