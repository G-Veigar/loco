type StateType = "object" | "array" | "boolean" | "string" | "number";

type StateGetter = () => any;

type StateSetter = (val: any) => void;

export type FlowStateConfig = {
  name: string; // 状态命名（中文，展示使用）
  key: string; // 状态key，
  desc?: string; // 额外描述说明
  value?: any; // 初始值&默认值，当type不为对象时有
  useCache?: boolean; // 是否使用缓存，若使用缓存，getter将只调用一次，结果会被缓存]
  getter?: StateGetter;
  setter?: StateSetter;
};
