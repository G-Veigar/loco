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

  showMessage() {
    // ...
  }

  // 编辑器DOM渲染完成调用
  ready() {
    this.#domReady = true;
    if (this.#domReadyResolve) {
      this.#domReadyResolve(true);
    }
  }
}
