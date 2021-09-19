const HOOK = {
  editorReady: 'editorReady',
  contextMenu: 'contextMenu'
}

function callHook (hookName: string, data?: unknown): void{
  console.log(hookName, data)
}

export {
  HOOK,
  callHook
}
