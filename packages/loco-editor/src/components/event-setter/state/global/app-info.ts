import type { FlowStateConfig } from "../state.class";

const appInfoConfig: FlowStateConfig = {
  name: "APP信息",
  key: "appInfo",
  useCache: true,
  getter() {
    console.log("fs: getter called");
    return {
      isInKsApp: true,
      isInKwai: true,
      isInNebula: false,
    };
  },
};

const appInfoProps = {
  isInKsApp: {
    name: "是在主APP中运行",
    key: "isInKsApp",
    desc: "主APP包括快手主站，快手极速版，快手海外版",
    type: "boolean",
  },
  isInKwai: {
    name: "是在快手主站中运行",
    key: "isInKwai",
    type: "boolean",
  },
  isInNebula: {
    name: "是在快手极速版中运行",
    key: "isInNebula",
    type: "boolean",
  },
  isInAcFun: {
    name: "是在Acfun中运行",
    key: "isInAcFun",
    type: "boolean",
  },
  isInWeChat: {
    name: "是在微信中运行",
    key: "isInWeChat",
    type: "boolean",
  },
  isInQQ: {
    name: "是在QQ中运行",
    key: "isInQQ",
    type: "boolean",
  },
};

export { appInfoConfig, appInfoProps };

export default appInfoConfig;
