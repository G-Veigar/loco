import { callHook, HOOK } from '@/modules/hook'
import store from '@/store'

type menuConfig = {
  label: string,
  action: () => void,
  childMenus: menuConfig[]
}

function initContextMenu ():void {
  document.addEventListener('contextmenu', (e: any) => {
    // callHook(HOOK.contextMenu, {
    //   target: e.target,
    //   x: e.x,
    //   y: e.y
    // })
    store.commit('setContextMenu', {
      key: 'position',
      value: {
        left: e.x,
        top: e.y
      }
    })
    store.commit('setContextMenu', {
      key: 'show',
      value: true
    })
    e.preventDefault()
  })
}

function registerContextMenu (options:{menus: menuConfig[]}): void {
  console.log(options)
}

export {
  initContextMenu,
  registerContextMenu
}
