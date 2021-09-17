const HOOK = {
  editorReady: 'editorReady'
}

function callHook (hookName: string): void{
  console.log(hookName)
}

export {
  HOOK,
  callHook
}
