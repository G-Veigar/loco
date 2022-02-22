import actions from "./actions";

let actionScope: any = null;

function invokeAction(actionName: string, params: any) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const action = actions[actionName];
  return action({
    ...params,
    scope: actionScope,
  });
}

function invokeComposedAction(actionData: any) {
  // 并发执行
  for (const actionQueue of actionData) {
    invokeActionQueue(actionQueue);
  }
}

function invokeActionQueue(actionQueue: any[]) {
  let index = 0;
  let currentAction = actionQueue[index];
  let currentRes: any = null;
  let res: any = null;
  const _run = async () => {
    if (currentAction.type === "base") {
      res = await invokeAction(currentAction.action, currentAction.params);
    } else if (currentAction.type === "condition") {
      // 根据结果匹配到的handle
      const conditionAction = currentAction.handles.find((item: any) => {
        return item.condition === currentRes;
      });
      if (conditionAction.type === "base") {
        res = await invokeAction(
          conditionAction.action,
          conditionAction.params
        );
      }
    }
    if (index < actionQueue.length - 1) {
      index++;
      currentRes = res;
      currentAction = actionQueue[index];
      _run();
    }
  };
  _run();
}

function initActionScope(scope: any) {
  actionScope = scope;
}

export { initActionScope, invokeAction, invokeComposedAction };
