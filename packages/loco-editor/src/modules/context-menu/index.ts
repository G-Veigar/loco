import { callHook, HOOK } from '@/modules/hook'

type menuConfig = {
  label: string,
  action: () => void,
  childMenus: menuConfig[]
}

function initContextMenu ():void {
  document.addEventListener('contextmenu', e => {
    callHook(HOOK.contextMenu, {
      target: e.target
    })
  })
}

function registerContextMenu (options:{menus: menuConfig[]}): void {
  console.log(options)
}

export {
  initContextMenu,
  registerContextMenu
}
