import type { FlowStateConfig } from "../state.class";

const activityInfoConfig: FlowStateConfig = {
  name: "活动信息",
  key: "activityInfo",
  getter() {
    return {};
  },
};

const activityInfoProps = {
  activityId: {
    name: "积木活动id",
    key: "activityId",
    type: "string",
  },
  isIOS: {
    name: "活动名称",
    key: "isIOS",
    type: "string",
  },
  pageTitle: {
    name: "页面标题",
    key: "pageTitle",
    type: "string",
  },
  // TODO, 活动归属，活动备注
};

export { activityInfoConfig, activityInfoProps };
