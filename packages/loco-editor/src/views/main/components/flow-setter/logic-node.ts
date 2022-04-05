const ports = {
  groups: {
    top: {
      position: "top",
      attrs: {
        circle: {
          r: 6,
          magnet: true,
          stroke: "#31d0c6",
          strokeWidth: 2,
          fill: "#fff",
        },
      },
    },
    bottom: {
      position: "bottom",
      attrs: {
        circle: {
          r: 6,
          magnet: true,
          stroke: "#31d0c6",
          strokeWidth: 2,
          fill: "#fff",
        },
      },
    },
  },
  items: [
    {
      group: "top",
    },
    {
      group: "right",
    },
    {
      group: "bottom",
    },
    {
      group: "left",
    },
  ],
};

// 开始节点
// 事件触发
export const beginNode = {
  inherit: "circle",
  width: 50,
  height: 50,
  attrs: {
    body: {
      refPoints: "0,10 10,0 20,10 10,20",
      strokeWidth: 1,
      stroke: "#5F95FF",
      fill: "#EFF4FF",
    },
    text: {
      fontSize: 12,
      fill: "#262626",
    },
  },
  ports: {
    groups: ports.groups,
    items: [
      {
        id: "port1",
        group: "bottom",
      },
    ],
  },
};

// 动作节点
// 0输出节点
// 1输出节点
// N输出节点
export const actionNode = {
  inherit: "rect",
  width: 80,
  height: 40,
  attrs: {
    body: {
      refPoints: "0,10 10,0 20,10 10,20",
      strokeWidth: 1,
      stroke: "#5F95FF",
      fill: "#EFF4FF",
    },
    text: {
      fontSize: 12,
      fill: "#262626",
    },
  },
  ports: {
    groups: ports.groups,
    items: [
      {
        id: "port1",
        group: "top",
      },
    ],
  },
};

// 条件分支节点
// 是否分支（2个分叉）
// 多个分支
export const conditionNode = {
  inherit: "polygon",
  width: 80,
  height: 60,
  attrs: {
    body: {
      refPoints: "0,10 10,0 20,10 10,20",
      strokeWidth: 1,
      stroke: "#5F95FF",
      fill: "#EFF4FF",
    },
    text: {
      fontSize: 12,
      fill: "#262626",
    },
  },
  ports: {
    groups: ports.groups,
    items: [
      {
        id: "port1",
        group: "top",
      },
      {
        id: "port2",
        group: "bottom",
      },
    ],
  },
};

export const registerLogicNode = (Graph: any) => {
  Graph.registerNode("begin", beginNode);
  Graph.registerNode("condition", conditionNode);
  Graph.registerNode("action", actionNode);
};
