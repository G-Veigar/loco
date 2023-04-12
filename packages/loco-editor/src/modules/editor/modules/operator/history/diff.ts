type BaseOperateType = "add" | "remove" | "update";

export class ValueChange {
  type: BaseOperateType;
  oldVal: any;
  newVal: any;

  constructor(type: BaseOperateType, oldVal: any, newVal: any) {
    this.type = type;
    this.oldVal = oldVal;
    this.newVal = newVal;
  }
}

export type ValueChangeRecord = Record<string, ValueChange>;
type DiffDataItem = Record<string, ValueChange | ValueChangeRecord>;

type DiffData = DiffDataItem[];

class DataDiffHelper {
  data: any;
  constructor(data: any) {
    this.data = data;
  }

  set(key: string, value: any) {
    let diffData;
    if (key in this.data) {
      diffData = new ValueChange("update", this.data[key], value);
    } else {
      diffData = new ValueChange("add", null, value);
    }
    this.data[key] = value;
    return diffData;
  }

  remove(key: string) {
    let diffData;
    if (key in this.data) {
      diffData = new ValueChange("remove", this.data[key], null);
      delete this.data[key];
    }
    return diffData;
  }
}

export interface CanBeApplyValueChange {
  applyValueChange(
    valueChangeRecord: ValueChangeRecord,
    isGoBack: boolean
  ): void;
}
