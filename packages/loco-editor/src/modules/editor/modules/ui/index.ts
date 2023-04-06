import { ElMessageBox } from 'element-plus'

export class EditorModuleUI {
  #editor: any;
  #domReady = false;
  #domReadyResolve: ((val: any) => void) | null = null;

  constructor(editor: any) {
    this.#editor = editor;
  }

  init() {
    if (!this.#domReady) {
      return new Promise((resolve, reject) => {
        this.#domReadyResolve = resolve;
      });
    }
  }

  async confirm(options: {
    message: string;
    title: string;
  }): Promise<boolean> {
    const { message, title } = options;
    try {
      await ElMessageBox.confirm(message, title, {});
      return true;
    } catch (err: any) {
      return false;
    }
  }

  // 编辑器DOM渲染完成调用
  ready() {
    console.log('ui ready')
    this.#domReady = true;
    if (this.#domReadyResolve) {
      this.#domReadyResolve(true);
    }
  }
}
