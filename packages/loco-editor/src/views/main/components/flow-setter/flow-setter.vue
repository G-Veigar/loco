<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { Graph, Shape, Addon } from "@antv/x6";
import { registerLogicNode } from "./logic-node";

registerLogicNode(Graph);

let graph: Graph | null = null;
let flowContainer = ref();
let dnd: Addon.Dnd | null = null;

const data = {
  nodes: [
    {
      id: "node1",
      shape: "begin",
      x: 200,
      y: 100,
      label: "click",
    },
    // {
    //   id: "node2",
    //   shape: "condition",
    //   x: 240,
    //   y: 300,
    //   label: "condition",
    // },
    // {
    //   id: "node3",
    //   shape: "action",
    //   x: 100,
    //   y: 400,
    //   label: "action",
    // },
  ],
  // edges: [
  //   {
  //     source: "node1",
  //     target: "node2",
  //     shape: "edge",
  //     attrs: {
  //       line: {
  //         stroke: "orange",
  //       },
  //     },
  //   },
  // ],
};

function addActionNode(e: any) {
  if (dnd && graph) {
    const newNode = graph.createNode({
      shape: "action",
      label: "跳转",
    });
    dnd.start(newNode, e);
  }
}

function addConditionNode(e: any) {
  if (dnd && graph) {
    const newNode = graph.createNode({
      shape: "condition",
      label: "是否登录",
    });
    dnd.start(newNode, e);
  }
}

function runFlowData() {
  const flowData = getFlowData();
  run(flowData);
}

function getFlowData() {
  if (graph) {
    let graphJson = graph.toJSON();
    let data = parseGraphJson(graphJson);
    console.log("flowData", data);
    return data;
  }
}

function parseGraphJson(graphJson: any) {
  const { cells } = graphJson;
  const nodeMap: any = {};
  let beginNode = null;
  cells.forEach((cellItem: any) => {
    // 处理边
    if (cellItem.shape === "edge") {
      const { source, target } = cellItem;
      nodeMap[source.cell] = {
        ...nodeMap[source.cell],
        next: {
          [target.port]: target.cell,
        },
      };
    } else {
      if (cellItem.shape === "begin") {
        beginNode = cellItem;
      }
      nodeMap[cellItem.id] = {
        ...nodeMap[cellItem.id],
        node: cellItem,
      };
    }
  });
  const getTree = (node: { node: any; next: any }) => {
    const tree: any = {};
    tree.type = node.node.shape;
    console.log("type", tree.type);
    tree.next = node.next && {};
    for (let nextPort in node.next) {
      tree.next[nextPort] = getTree(nodeMap[node.next[nextPort]]);
    }
    return tree;
  };
  // TODO: 定义默认output
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const beginNextNode = nodeMap[nodeMap[beginNode.id].next.port1];
  const res = getTree(beginNextNode);
  // const data = {
  //   type: "condition",
  //   name: "isLogin",
  //   next: {
  //     true: {
  //       type: "action",
  //     },
  //     false: {
  //       type: "action",
  //     },
  //   },
  // };
  return res;
}

function invokeAction(name: string) {
  if (name === "condition") {
    console.log("判断是否登录: 是");
    return true;
  } else if (name === "action") {
    console.log("执行action");
  }
  return true;
}

async function run(logicNode: any) {
  let { type, next } = logicNode;
  const result = await invokeAction(type);
  if (next) {
    if (type === "condition") {
      // next = next[String(result)];
      next = next.port1;
    }
    run(next);
  }
}

onMounted(() => {
  graph = new Graph({
    container: flowContainer.value,
    width: 400,
    height: 600,
    background: {
      color: "#fffbe6", // 设置画布背景颜色
    },
    grid: {
      size: 10, // 网格大小 10px
      visible: true, // 渲染网格背景
    },
    snapline: true, // 对齐辅助线
    selecting: {
      enabled: true, // 开启选择
      multiple: true, // 支持多选
      // rubberband: false, // 支持框选
      // strict: false, // 启动严格框选，选框完全包围节点时才选中节点
      // movable: true, // 在多选情况下，选中的节点是否一起移动，设置为 true 时，拖动选框框选的节点一起移动
      // modifiers: 'shift', // 设置修饰键后需要点击鼠标并按下修饰键才能触发框选
      // following: false, // 在多选情况下，选中的节点是否跟随鼠标实时移动，默认为 true
      showNodeSelectionBox: true, // 是否在选中时展示节点选择框
      showEdgeSelectionBox: true, // 是否在选中时展示边选择框
      // content: "hehe", // 多选时，附加显示内容
      // filter: ['rect'] // 节点过滤器，被过滤的节点将不能被选中
    },
  });

  graph.on("node:selected", (args: any) => {
    const { cell, node, options } = args;
    console.log("selected", cell, node, options);
  });

  graph.fromJSON(data);

  dnd = new Addon.Dnd({
    target: graph,
  });

  // const Polygon = Node.define({
  //   markup: [{ tagName: "polygon" }],
  //   attrs: {
  //     polygon: {
  //       refPointsKeepOffset: "10,10 30,10 30,30", // points offset is 10,10
  //       fill: "red",
  //       stroke: "black",
  //     },
  //   },
  // });

  // const polygon = new Polygon().resize(40, 40).addTo(graph);

  // graph.addNode({
  //   shape: "condition",
  //   label: "决策",
  // });

  // Shape.Rect.config({
  //   propHooks(metadata) {
  //     const { rx, ry, ...others } = metadata;
  //     if (rx != null) {
  //       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //       // @ts-ignore
  //       others.attrs.body.rx = rx;
  //     }
  //     if (ry != null) {
  //       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //       // @ts-ignore
  //       others.attrs.body.ry = ry;
  //     }
  //     return others;
  //   },
  // });

  // 创建节点
  // const rect = new Shape.Rect({
  //   x: 100,
  //   y: 200,
  //   width: 80,
  //   height: 40,
  //   angle: 30,
  //   attrs: {
  //     body: {
  //       rx: 20,
  //       ry: 20,
  //     },
  //   },
  //   label: "rect",
  // });

  // graph.addNode(rect);

  // graph.addEdge({
  //   source: rect, // 源节点 ID
  //   target: { x: 100, y: 120 }, // 目标点
  //   attrs: {
  //     line: {
  //       // sourceMarker: "block", // 实心箭头
  //       targetMarker: {
  //         name: "circlePlus", // 椭圆
  //         // rx: 10, // 椭圆箭头的 x 半径
  //         // ry: 6, // 椭圆箭头的 y 半径
  //       },
  //     },
  //   },
  // });
});
</script>

<template>
  <div class="flow-setter">
    <div class="tool-bar">
      <button @mousedown="addConditionNode">分支节点</button>
      <button @mousedown="addActionNode">动作节点</button>
      <button @click="getFlowData">序列化节点</button>
      <button @click="runFlowData">执行逻辑</button>
    </div>
    <div class="flow-container" ref="flowContainer"></div>
  </div>
</template>

<style lang="scss">
@import "@/style/var.scss";

.flow-setter {
  .tool-bar {
    display: flex;
  }

  .flow-container {
    width: 400px;
    height: 100%;
  }
}
</style>
