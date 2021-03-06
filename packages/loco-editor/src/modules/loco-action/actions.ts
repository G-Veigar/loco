import {
  showDialog,
  showToast,
  showLoading,
  hideLoading,
} from "./component-action";

// 修改状态
function setData(options: {
  nodeId: string;
  key: string;
  value: any;
  scope: any;
}) {
  const { nodeId, key, value, scope } = options;
  scope[nodeId][key] = value;
}

function show(options: { nodeId: string; scope: any }) {
  const setDataOptions = {
    ...options,
    key: "$show",
    value: true,
  };
  setData(setDataOptions);
}

function toggleShow(options: { nodeId: string; scope: any }) {
  const { nodeId, scope } = options;
  const setDataOptions = {
    ...options,
    key: "$show",
    value: !scope[nodeId]["$show"],
  };
  setData(setDataOptions);
}

function hide(options: { nodeId: string; scope: any }) {
  const setDataOptions = {
    ...options,
    key: "$show",
    value: false,
  };
  setData(setDataOptions);
}

// 跳转
function navTo() {
  console.log("navTo");
}

// 滚动到
function scrollTo(options: { nodeId: string }) {
  console.log("滚到到", options.nodeId);
}

function loading(msg?: string) {
  console.log(msg);
}

const actions = {
  navTo,
  setData,
  show,
  toggleShow,
  hide,
  loading,
  showDialog,
  showToast,
  showLoading,
  hideLoading,
  scrollTo,
  // follow
  // share
  // download
  // upload
  // request
  // log
  // animate
};

export default actions;
