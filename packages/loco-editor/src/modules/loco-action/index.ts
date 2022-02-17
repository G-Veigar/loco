import actions from './actions'

let actionScope: null = null

function invokeAction(actionName: string, params: any) {
  // @ts-ignore
  const action = actions[actionName]
  action({
    ...params,
    scope: actionScope
  })
}

function initActionScope(scope: any) {
  actionScope = scope
}

export {
  initActionScope,
  invokeAction
}
