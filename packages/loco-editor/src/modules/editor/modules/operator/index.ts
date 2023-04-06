import { OperatorHistory } from './history';
import { EDITOR_OPERATOR } from './const'

/**
 * 操作装饰器
 * @param  event The name of the event
 * @param  endEvent The name of the end event
 * @return MethodDecorator
 */
export function Operate(operateName: string) {
  return function (_target: any, propertyKey: string, descriptor: any) {
      const original = descriptor.value;
      descriptor.value = function applyOperate<T = any>(this: EditorModuleOperator, ...args: any[]): T {
          const returnValue: T = original.apply(this, args);
          const operation = {
            name: operateName,
            operator: '1',
            date: Date.now(),
            type: '1',
            params: args
          }
          this.history.add(operation)
          this._storeToWorkingSpace(operation)
          return returnValue;
      };
  };
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export class EditorModuleOperator {
  #editor: any;
  history: OperatorHistory;

  currentElement: any;

  constructor(editor: any) {
    this.#editor = editor;
    this.history = new OperatorHistory(this);
  }

  async init() {
    const operationInWorkingSpace = this.#getWorkingSpace() as any
    // 如果有本地工作区的历史记录，则应用到当前工作区
    if(operationInWorkingSpace) {
      // TODO: 去掉sleep, onMounted为啥不执行
      await sleep(50)
      const isConfirm = await this.#editor.UI.confirm({
        message: '检测编辑器未正常关闭，存在未保存的操作，是否恢复？',
        title: '提示'
      })
      console.log('isConfirm', isConfirm)
      // this.history.applyOperateList(operationInWorkingSpace, false)
    }
  }

  /**
   * 选择元素
   */
  selectElement(el: any) {
    this.currentElement = el;
  }

  // TODO: 保存历史记录到本地工作区
  _storeToWorkingSpace(operation: any) {

  }


  #getWorkingSpace() {
    return true
  }

  @Operate(EDITOR_OPERATOR.removeElement)
  removeElement() {
    console.log('removeElement')
  }
}
