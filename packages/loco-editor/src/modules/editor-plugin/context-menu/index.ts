// import { callHook, HOOK } from "@/modules/hook";
import { useContextMenuStore } from "@/stores/context-menu";
import type { EditorPlugin } from "../type";
import type { EditorPluginInstallCtx } from "../../editor";
import ContextMenu from "./components/context-menu.vue";

const contextMenuStore = useContextMenuStore();

type menuConfig = {
  label: string;
  action: () => void;
  childMenus: menuConfig[];
};

type ContextMenuRegisterOptions = {
  key: string;
  handler: any;
};

export const contextMenuPlugin: EditorPlugin = {
  name: "contextMenu",
  version: "1.0.0",
  isCore: true,
  install(ctx: EditorPluginInstallCtx) {
    document.addEventListener("contextmenu", (e: any) => {
      // callHook(HOOK.contextMenu, {
      //   target: e.target,
      //   x: e.x,
      //   y: e.y
      // })
      contextMenuStore.setContextMenu({
        key: "position",
        value: {
          left: e.x,
          top: e.y,
        },
      });

      contextMenuStore.setContextMenu({
        key: "show",
        value: true,
      });

      e.preventDefault();
    });
  },
  editorModule: {
    registerContextMenu(options: ContextMenuRegisterOptions) {
      console.log(options);
    },
  },
  view: ContextMenu,
};
