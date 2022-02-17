import { defineStore } from "pinia";
import type { EditorPluginConfig, EditorStoreState } from "../types";
import { deviceList } from "../modules/edit-viewport/device";

const defaultDevice = deviceList[0];

export const useEditorStore = defineStore({
  id: "counter",
  state: (): EditorStoreState => ({
    plugins: {},
    activePlugin: null,
    editViewport: {
      device: defaultDevice.name,
      width: defaultDevice.width,
      height: defaultDevice.height,
      zoom: 100,
      horizontal: false,
    },
    contextMenu: {
      menuList: [
        {
          label: "hehe",
          id: "hehe",
          action: () => {
            console.log("hehe");
          },
        },
        {
          isGroup: true,
          id: "haha-grounp",
          items: [
            {
              label: "haha",
              id: "haha",
              childs: [
                {
                  label: "haha111",
                  id: "haha111",
                  action: () => {
                    console.log("haha111");
                  },
                },
                {
                  label: "haha222",
                  id: "haha222",
                  action: () => {
                    console.log("haha222");
                  },
                },
              ],
            },
            {
              label: "xixi",
              id: "xixi",
              action: () => {
                console.log("xixi");
              },
            },
          ],
        },
        {
          label: "kds kc",
          id: "kds",
          action: () => {
            console.log("kds kc");
          },
        },
      ],
      show: false,
      position: {
        left: 500,
        top: 250,
      },
      childMenus: {
        left: 0,
        top: 0,
        childs: undefined,
      },
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
    setContextMenu(options: { key: string; value: unknown }): void {
      const { key, value } = options;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.contextMenu[key] = value;
    },
    setEditViewport(options: { key: string; value: unknown }): void {
      const { key, value } = options;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.editViewport[key] = value;
    },
  },
});
