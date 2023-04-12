import { EDITOR_HOOKS } from "../../hooks";

export class EditorModuleApp {
  #editor: any;

  constructor(editor: any) {
    this.#editor = editor;
  }

  init() {
    // ...
  }

  save() {
    // ...
    this.#editor.emit(EDITOR_HOOKS.app_beforeSave);
    // ...
    this.#editor.emit(EDITOR_HOOKS.app_saved);
  }

  publish() {
    // ...
    this.#editor.emit(EDITOR_HOOKS.app_beforePublish);
    // ...
    this.#editor.emit(EDITOR_HOOKS.app_published);
  }
}
