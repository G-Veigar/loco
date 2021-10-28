const HOOK = {
  editorReady: 'editorReady',
  contextMenu: 'contextMenu',
  dropFromComponentLib: 'dropFromComponentLib'
}

function callHook (hookName: string, data?: unknown): void{
  console.log(hookName, data)
}

export {
  HOOK,
  callHook
}
