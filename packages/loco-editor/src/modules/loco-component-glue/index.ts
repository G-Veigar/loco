import { defineStore } from "pinia";

export const useElGlueStore = defineStore("elGlue", {
  state: () => {
    return {
      states: {},
    };
  },
  actions: {
    registerComponent(componentSchema: { eid: string; props: any }) {
      const { eid, props } = componentSchema;
      // TODO: fix
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.states[eid] = { ...props };
    },
    setProp(options: { eid: string; key: string; value: any }) {
      const { eid, key, value } = options;
      // TODO: fix
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.states[eid][key] = value;
    },
  },
});
