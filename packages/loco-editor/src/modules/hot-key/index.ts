import hotkeys from 'hotkeys-js'
import hotkeyGrounps from './config'

type HotkeyConfig = {
  key: string, // 按键组合
  ctx?: string, // 上下文名字，只有处于当前上下文才会触发，默认 'global' 全局生效
  desc: string, // 描述
  prevent?: boolean, // 是否preventDefault，阻止触发系统自带快捷键，默认true
  handler: (e: Event) => void, // 处理函数
}

function initHotkeys (): void {
  hotkeyGrounps.forEach(grounpItem => {
    const { keys } = grounpItem
    keys.forEach(hotkeyConfig => {
      registerHotkey(hotkeyConfig)
    })
  })
}

function registerHotkey (hotkeyConfig: HotkeyConfig): void {
  const { key, prevent, handler, ctx = 'all' } = hotkeyConfig
  // 注册快捷键
  hotkeys(key, ctx, function (event) {
    // Prevent the default refresh event under WINDOWS system
    if (prevent) {
      event.preventDefault()
    }
    handler(event)
  })
}

function setHotKeyCtx (ctx: string): void {
  hotkeys.setScope(ctx)
}

export {
  initHotkeys,
  registerHotkey,
  setHotKeyCtx
}
