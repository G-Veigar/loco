import type { FlowStateConfig } from "../state.class";
import { activityInfoConfig, activityInfoProps } from "./activity-info";
import { appInfoConfig, appInfoProps } from "./app-info";

type StateType = "object" | "array" | "boolean" | "string" | "number";

type StateGetter = () => any;

type StateSetter = (val: any) => void;

const globalStateConfig = {
  name: "全局状态",
  key: "$jimu",
  props: {
    [activityInfoConfig.key]: activityInfoConfig,
    [appInfoConfig.key]: appInfoConfig,
  },
};

export default globalStateConfig;
