export class EditorModuleOperator {
  #editor: any;

  currentElement: any;

  constructor(editor: any) {
    this.#editor = editor;
  }

  init() {
    // return new Promise((resolve, reject) => {
    //   setTimeout(resolve, 3000);
    // });
  }

  /**
   * 选择元素
   */
  selectElement(el: any) {
    this.currentElement = el;
  }
}
