// import { callHook, HOOK } from "@/modules/hook";
import { useContextMenuStore } from "@/stores/context-menu";

const contextMenuStore = useContextMenuStore();

type menuConfig = {
  label: string;
  action: () => void;
  childMenus: menuConfig[];
};

function initContextMenu(): void {
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
}

function registerContextMenu(options: { menus: menuConfig[] }): void {
  console.log(options);
}

export { initContextMenu, registerContextMenu };
