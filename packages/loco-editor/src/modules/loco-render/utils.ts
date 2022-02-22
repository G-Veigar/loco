// type createNodeElementParmas = {
//   tag: string,
//   prop: any,
//   children: [] | null | string,
// }
import locoButton from "../loco-component/base/loco-button/view.vue";
import locoImage from "../loco-component/base/loco-image/view.vue";
import locoContainer from "../loco-component/base/loco-container/view.vue";
import locoPopup from "../loco-component/base/loco-popup/view.vue";
import locoDialog from "../loco-component/base/loco-dialog/common-dialog.vue";
import locoTab from "../loco-component/base/loco-tab/view.vue";
// TODO: delete
import cardDemo from "../loco-component/base/loco-container/card-demo.vue";
import slotZone from "../loco-component/slot-zone/index.vue";
import mitt from "mitt";
import { invokeAction, invokeComposedAction } from "@/modules/loco-action";

const emitter = mitt();

const componentMap = {
  "loco-button": locoButton,
  "loco-image": locoImage,
  "loco-container": locoContainer,
  "card-demo": cardDemo,
  "slot-zone": slotZone,
  "loco-popup": locoPopup,
  "loco-dialog": locoDialog,
  "loco-tab": locoTab,
};

function schema2RenderParmas(
  schema: any,
  h: any,
  options: {
    mode: string;
    schemaStates: any;
    schemaActions: any;
    forScopeData: any;
  }
): any {
  // if (schema._isRoot) {
  //   return schema2RenderParmas(schema.container, h)
  // }
  const { mode, schemaStates, schemaActions, forScopeData } = options;
  // 显隐逻辑控制
  if (schemaStates[schema.nodeId]?.$show === false) {
    return null;
  }

  // 循环解析
  if (schemaStates[schema.nodeId]?.$for?.length > 0 && !forScopeData) {
    const forEl = schemaStates[schema.nodeId].$for.map((forItem: any) => {
      const RenderParmas = schema2RenderParmas(schema, h, {
        ...options,
        forScopeData: forItem,
      });
      if (RenderParmas) {
        const { tag, prop, children } = RenderParmas;
        return h(tag, prop, children);
      } else {
        return null;
      }
    });
    return {
      tag: "div",
      prop: {
        class: "for-wrapper",
      },
      children: forEl,
    };
  }
  // 循环渲染数据处理
  if (forScopeData) {
    schema = { ...schema, ...forScopeData };
  }

  const res = {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    tag: componentMap[schema.tag] || "div",
    prop: {
      id: schema.nodeId,
      style: null,
    },
    children: null,
  };

  if (schema.text) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    res.prop.innerText = schema.text;
  }

  // 处理 style
  if (schema.style) {
    if (Array.isArray(schema.style)) {
      console.log("isArray");
    } else {
      res.prop.style = schema.style;
    }
  }

  // props处理逻辑
  if (schema.props) {
    res.prop = { ...res.prop, ...schema.props };
  }

  const actions = processEvent(schema, schemaActions);
  res.prop = { ...res.prop, ...actions };

  res.children = processChildNodes(schema, h, options);

  processEditMode(schema, res, mode);

  return res;
}

// 处理事件绑定
function processEvent(schema: any, schemaActions: any) {
  // 事件处理
  if (schemaActions[schema.nodeId]) {
    const actions: any = {};
    for (const key in schemaActions[schema.nodeId]) {
      const actionKey = "on" + key.slice(0, 1).toUpperCase() + key.slice(1);
      const actionOptions = schemaActions[schema.nodeId][key];
      actions[actionKey] = () => {
        if (actionOptions.type === "base") {
          invokeAction(actionOptions.action, actionOptions.params);
        } else if (actionOptions.type === "compose") {
          invokeComposedAction(actionOptions.actionData);
        }
      };
    }
    return actions;
  }
}

function processChildNodes(schema: any, h: any, options: any) {
  // 处理childNodes
  let children = [];
  if (schema.childNodes) {
    children = schema.childNodes.map((item: any) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const RenderParmas = schema2RenderParmas(item, h, options);
      if (RenderParmas) {
        const { tag, prop, children } = RenderParmas;
        return h(tag, prop, children);
      } else {
        return null;
      }
    });
  }
  return children;
}

function processEditMode(schema: any, res: any, mode: string) {
  // 编辑模式下处理
  if (mode === "edit" && schema.nodeId !== "container") {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    res.prop.onMouseover = () => {
      emitter.emit("hoverEl", {
        nodeId: schema.nodeId,
      });
    };
  }
}

export { schema2RenderParmas, emitter };
