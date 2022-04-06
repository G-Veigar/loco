import { defineStore } from "pinia";
import type { EditorPluginConfig } from "../types";
import { deviceList } from "../modules/edit-viewport/device";

const defaultDevice = deviceList[0];

export const useEditorStore = defineStore({
  id: "editor",
  state: () => ({
    plugins: {},
    activePlugin: null,
    editViewport: {
      device: defaultDevice.name,
      width: defaultDevice.width,
      height: defaultDevice.height,
      zoom: 100,
      horizontal: false,
    },
    expandPanel: {
      show: true,
    },
  }),
  actions: {
    installEditorPlugin(plugin: EditorPluginConfig): void {
      if (!this.plugins) {
        this.plugins = {
          [plugin.name]: {
            name: plugin.name,
            icon: "",
            leftPanel: null,
          },
        };
      } else {
        if (!this.plugins[plugin.name]) {
          this.plugins[plugin.name] = {
            name: plugin.name,
            icon: "",
            leftPanel: null,
          };
        }
      }
    },
    setActivePlugin(plugin: EditorPluginConfig): void {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.activePlugin = plugin;
    },
    setEditViewport(options: { key: string; value: unknown }): void {
      const { key, value } = options;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.editViewport[key] = value;
    },
  },
});
