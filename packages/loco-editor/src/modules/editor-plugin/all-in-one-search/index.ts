import type { EditorPlugin } from "../type";
// import type { EditorPluginInstallCtx } from "../../editor";

type AllInOneSearchRegisterOptions = {
  label: string;
};

export const allInOneSearchPlugin: EditorPlugin = {
  name: "allInOneSearch",
  version: "1.0.0",
  isCore: true,
  install(ctx: any) {
    const { hotKey } = ctx;
    hotKey.registerHotkey({
      key: "ctrl+f, command+f",
      prevent: true,
      handler() {
        console.log("allInOneSearch open");
      },
    });
  },
  editorModule: {
    register(options: AllInOneSearchRegisterOptions) {
      console.log("registerAllInOneSearch", options);
    },
  },
};

type SearchItem = {
  label: string;
};

const coreSearchItems: SearchItem[] = [
  {
    label: "组件树",
  },
  {
    label: "组件库",
  },
  {
    label: "状态",
  },
  {
    label: "文档",
  },
  {
    label: "文档",
  },
];
