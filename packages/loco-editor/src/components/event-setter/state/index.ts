import type { FlowStateConfig } from "./state.class";
import globalStateConfig from "./global";

class FlowStateUtil {
  value: any;
  _state: Record<string, any>;

  constructor() {
    this._state = {};
    this.value = {};
  }

  registerNamespace(stateConfig: any) {
    if (stateConfig.key in this._state) {
      console.warn(`FlowState: 重复注册状态${stateConfig.key}`);
    } else {
      this._state[stateConfig.key] = {
        config: stateConfig,
        cache: {},
      };
      const p = new Proxy(this._state[stateConfig.key], {
        get: (target, pathKey) => {
          const namespacePropConfig =
            this._state[stateConfig.key].config.props[pathKey];
          if (!namespacePropConfig) {
            return undefined;
          }
          // 如果有缓存，直接走缓存
          if (pathKey in this._state[stateConfig.key].cache) {
            console.log("fs: cache value");
            return this._state[stateConfig.key].cache[pathKey];
          }
          const { getter, useCache } = namespacePropConfig;
          const val = getter();
          useCache && (this._state[stateConfig.key].cache[pathKey] = val);
          return val;
        },
      });
      this.value[stateConfig.key] = p;
    }
  }
}

export function initFlowStateUtil() {
  const flowStateUtil = new FlowStateUtil();
  flowStateUtil.registerNamespace(globalStateConfig);
  return flowStateUtil;
  // {
  //     '$jimu': {},
  //     '$var': {},
  //     '$e': {},
  //     '$item': {},
  //     '$vm': {},
  //     '$prop': {}
  // }
}
