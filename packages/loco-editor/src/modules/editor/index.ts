import { ref } from "vue";
import { EditorModuleValidator } from "./modules/validator";
import { EditorModuleOperator } from "./modules/operator";
import { EditorModuleUI } from "./modules/ui";
import { EditorModulePlugin } from "./modules/plugin";

interface InitTask {
  name: string;
  run: () => any;
  options?: {
    noBegin: boolean;
  };
}

export class LocoEditor {
  initProgress = ref(0);

  // 编辑器模块
  validator: EditorModuleValidator;
  operator: EditorModuleOperator;
  UI: EditorModuleUI;
  plugin: EditorModulePlugin;

  constructor() {
    this.validator = new EditorModuleValidator(this);
    this.operator = new EditorModuleOperator(this);
    this.UI = new EditorModuleUI(this);
    this.plugin = new EditorModulePlugin(this);
  }

  // 初始化编辑器
  init() {
    this.#runInitTask([
      { name: "validator", run: () => this.validator.init() },
      { name: "operator", run: () => this.operator.init() },
      { name: "UI", run: () => this.UI.init() },
      { name: "plugin", run: () => this.plugin.init() },
    ]);
  }

  #runInitTask(initTaskList: InitTask[]) {
    const initTaskLength = initTaskList.length;
    const addNum = Math.ceil(100 / initTaskLength);
    const initTaskPromiseList = initTaskList.map(async (task) => {
      try {
        console.log("初始化【" + task.name + "】开始...");
        const res = task.run();
        console.log("run res", res);
        await res;
        this.initProgress.value += addNum;
        console.log("初始化【" + task.name + "】完成!");
      } catch (e: any) {
        console.error("初始化【" + task.name + "】失败：" + e.message);
      }
    });
    return Promise.all(initTaskPromiseList);
  }
}
