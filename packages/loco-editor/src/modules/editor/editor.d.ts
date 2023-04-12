import { LocoEditor } from "./index";

declare module "vue" {
  interface ComponentCustomProperties {
    $editor: LocoEditor;
  }
}
