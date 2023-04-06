import type { EditorModuleOperator } from '../index'

type EditorOperateHistory = {
  name: string;
  operator: string;
  date: number;
  type: string;
  params: any;
}

export class OperatorHistory {
  historyStack: EditorOperateHistory[] = []
  currentIndex = 0
  #editorOperator: EditorModuleOperator

  constructor(operator: any) {
    this.#editorOperator = operator
  }

  add(options: EditorOperateHistory) {
    const { name, operator, type, params } = options
    this.historyStack.push({
      name,
      operator,
      date: Date.now(),
      type,
      params
    })
  }

  go(step: number) {
    let index = this.currentIndex + step
    const isGoBack = step < 0
    if(index < 0) {
      index = 0
    } else if(index > this.historyStack.length - 1) {
      index = this.historyStack.length - 1
    }
    if(index === this.currentIndex) {
      return
    }
    const operateList = isGoBack ?
      this.historyStack.slice(index, this.currentIndex) : this.historyStack.slice(this.currentIndex, index)

    this.applyOperateList(operateList, isGoBack)
  }

  applyOperateList(operateList: EditorOperateHistory[], isGoBack: boolean) {
    if(isGoBack) {
      operateList.reverse()
    }
    operateList.forEach(operate => {
      const { operator, type, params } = operate
      // const operatorInstance = this.#applyOperate(operator)
      // if(operatorInstance) {
      //   operatorInstance[type](params)
      // }
    })
  }

  #applyOperate(operator: string) {
    console.log('applyOperate', this.#editorOperator)
  }
}
