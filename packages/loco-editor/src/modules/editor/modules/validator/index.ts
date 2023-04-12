import { EDITOR_HOOKS } from "../../hooks";

type ValidatorRule = {
  name: string;
};

export class EditorModuleValidator {
  #editor: any;
  #rulesMap: Record<string, ValidatorRule> = {};

  constructor(editor: any) {
    this.#editor = editor;
  }

  init() {
    this.#editor.on(EDITOR_HOOKS.appSave, () => {
      this.validate();
    });
  }

  addRule(rule: ValidatorRule) {
    if (this.#rulesMap[rule.name]) {
      throw new Error(`rule name ${rule.name} is already exist`);
    } else {
      this.#rulesMap[rule.name] = rule;
    }
  }

  removeRule(name: string) {
    if (this.#rulesMap[name]) {
      delete this.#rulesMap[name];
    }
  }

  validate() {
    console.log("validate");
    return false;
  }
}
