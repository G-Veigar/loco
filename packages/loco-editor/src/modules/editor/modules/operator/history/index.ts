import type { EditorModuleOperator } from "../index";
import type {
  ValueChange,
  CanBeApplyValueChange,
  ValueChangeRecord,
} from "./diff";

type EditorOperateHistory = {
  user: string; // 操作者
  operator: string; // 操作
  date: number; // 日期
  valueChangeRecord: ValueChangeRecord;
};

export class OperatorHistory {
  dataManager: CanBeApplyValueChange;
  historyStack: EditorOperateHistory[] = [];
  currentIndex = 0;
  // #editorOperator: EditorModuleOperator;

  constructor(operator: any, dataManager: CanBeApplyValueChange) {
    // this.#editorOperator = operator;
    this.dataManager = dataManager;
  }

  add(options: EditorOperateHistory) {
    const { user, operator, valueChangeRecord } = options;
    // 如果当前操作不是最后一次操作，则删除后面的操作
    if (
      this.historyStack.length &&
      this.historyStack.length !== this.currentIndex + 1
    ) {
      this.historyStack.length = this.currentIndex + 1;
    }
    this.historyStack.push({
      user,
      operator,
      date: Date.now(),
      valueChangeRecord,
    });
    this.currentIndex = this.historyStack.length - 1;
  }

  go(step: number) {
    let targetIndex = this.currentIndex + step;
    const isGoBack = step < 0;
    if (targetIndex < 0) {
      targetIndex = 0;
    } else if (targetIndex > this.historyStack.length - 1) {
      targetIndex = this.historyStack.length - 1;
    }
    if (targetIndex === this.currentIndex) {
      return;
    }
    const operateList = isGoBack
      ? this.historyStack.slice(targetIndex + 1, this.currentIndex + 1)
      : this.historyStack.slice(this.currentIndex + 1, targetIndex + 1);

    this.applyOperateList(operateList, isGoBack);

    this.currentIndex = targetIndex;
  }

  applyOperateList(operateList: EditorOperateHistory[], isGoBack: boolean) {
    if (isGoBack) {
      operateList.reverse();
    }
    const valueChangeRecordList = operateList.map(
      (operate) => operate.valueChangeRecord
    );
    valueChangeRecordList.forEach((valueChangeRecord) => {
      this.dataManager.applyValueChange(valueChangeRecord, isGoBack);
    });
  }
}
