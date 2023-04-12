import { OperatorHistory } from "./history";
import { EDITOR_OPERATOR } from "./const";
import { EDITOR_HOOKS } from "../../hooks";
import { ValueChange, type ValueChangeRecord } from "./history/diff";

/**
 * 操作装饰器
 * @param  event The name of the event
 * @param  endEvent The name of the end event
 * @return MethodDecorator
 */
export function Operate(operateName: string) {
  return function (_target: any, propertyKey: string, descriptor: any) {
    const original = descriptor.value;
    descriptor.value = function applyOperate<T = any>(
      this: EditorModuleOperator,
      ...args: any[]
    ): ValueChangeRecord {
      const returnValue = original.apply(this, args) as ValueChangeRecord;
      const operation = {
        user: "gaoge",
        operator: operateName,
        date: Date.now(),
        valueChangeRecord: returnValue,
      };
      this.history.add(operation);
      this._storeToWorkingSpace(operation);
      return returnValue;
    };
  };
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getLastValByPath(obj: any, path: string) {
  const pathArr = path.split(".");
  let val = obj;
  for (let i = 0; i < pathArr.length - 1; i++) {
    val = val[pathArr[i]];
  }
  return val;
}

const testDataManager: any = {
  data: {},
  setVal(keyPath: string, value: any) {
    const pathArr = keyPath.split(".");
    const valChangeRecord: any = {};
    const valChangeRecordCurrent: any = valChangeRecord;
    const lastKey = pathArr[pathArr.length - 1];
    let currentVal = this.data;
    for (let i = 0; i < pathArr.length - 1; i++) {
      const currentKey = pathArr[i];
      valChangeRecordCurrent[currentKey] = {};
      currentVal = currentVal[currentKey];
    }
    let diffData;
    if (lastKey in currentVal) {
      diffData = new ValueChange("update", currentVal[lastKey], value);
    } else {
      diffData = new ValueChange("add", null, value);
    }
    currentVal[lastKey] = value;
    valChangeRecordCurrent[lastKey] = diffData;
    return valChangeRecordCurrent;
  },
  remove(key: string) {
    let diffData;
    if (key in this.data) {
      diffData = new ValueChange("remove", this.data[key], null);
      delete this.data[key];
    }
    return diffData;
  },
  async applyValueChange(
    valueChangeRecord: ValueChangeRecord,
    isGoBack: boolean
  ) {
    for (const key in valueChangeRecord) {
      const valueChange = valueChangeRecord[key];
      if (valueChange instanceof ValueChange) {
        const { type, oldVal, newVal } = valueChange;
        if (type === "add") {
          if (isGoBack) {
            delete this.data[key];
          } else {
            this.data[key] = newVal;
          }
        } else if (type === "remove") {
          if (isGoBack) {
            this.data[key] = oldVal;
          } else {
            delete this.data[key];
          }
        } else if (type === "update") {
          this.data[key] = isGoBack ? oldVal : newVal;
        }
      } else {
        this.applyValueChange(valueChange, isGoBack);
      }
    }
  },
};

export class EditorModuleOperator {
  #editor: any;
  history: OperatorHistory;

  currentElement: any;

  constructor(editor: any) {
    this.#editor = editor;
    this.history = new OperatorHistory(this, testDataManager);
  }

  async init() {
    this.#handleLeaveEditor();
    this.#recoverWorkingSpaceIfNeed();
  }

  /**
   * 处理离开编辑器的情况
   */
  #handleLeaveEditor() {
    this.#editor.on(EDITOR_HOOKS.beforeunload, (e: any) => {
      // 如果本地工作区有未保存的操作，则提示用户
      if (this.#getWorkingSpace()) {
        e.preventDefault();
        e.returnValue = "";
      }
    });
    this.#editor.on(EDITOR_HOOKS.unload, (e: any) => {
      this.#clearWorkingSpace();
    });
  }

  /**
   * 恢复本地工作区
   */
  async #recoverWorkingSpaceIfNeed() {
    const operationInWorkingSpace = this.#getWorkingSpace() as any;
    // 如果有本地工作区的历史记录，则应用到当前工作区
    if (operationInWorkingSpace) {
      // TODO: 去掉sleep, onMounted为啥不执行
      await sleep(50);
      const isConfirm = await this.#editor.UI.confirm({
        message: "检测编辑器未正常关闭，存在未保存的操作，是否恢复？",
        title: "提示",
      });
      // TOOD: 执行恢复操作
      // if (isConfirm) {
      //   this.history.applyOperateList(operationInWorkingSpace, false)
      // }
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
    // TODO
  }

  #getWorkingSpace() {
    return true;
  }

  #clearWorkingSpace() {
    // TODO
  }

  insertElementBefore(element: any) {
    console.log("insertElementBefore");
  }

  insertElementAfter(element: any) {
    console.log("insertElementAfter");
  }

  @Operate(EDITOR_OPERATOR.removeElement)
  removeElement(element: any) {
    // console.log("removeElement");
    // return this.schema.removeElement(element);
  }

  @Operate(EDITOR_OPERATOR.setElementProps)
  setElementProps(element: any, props: any) {
    console.log("setElementProps");
  }

  @Operate(EDITOR_OPERATOR.setElementStyle)
  setElementStyle(element: any, style: any) {
    console.log("setElementStyle");
  }

  @Operate(EDITOR_OPERATOR.setVal)
  setVal(key: string, value: any) {
    const res = testDataManager.setVal(key, value);
    console.log("testDataManager.data", testDataManager.data, this.history);
    return res;
  }

  /**
   * 撤销
   */
  undo() {
    this.history.go(-1);
    console.log("testDataManager.data", testDataManager.data, this.history);
  }

  /**
   * 重做
   */
  redo() {
    this.history.go(1);
    console.log("testDataManager.data", testDataManager.data, this.history);
  }
}
