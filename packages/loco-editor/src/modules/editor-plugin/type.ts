import type { EditorPluginInstallCtx } from "../editor";

export interface EditorPlugin {
  name: string;
  version?: string;
  desc?: string;
  author?: string;
  isCore?: boolean; // 是否是核心插件
  install?: any;
  editorModule?: any;
  view?: any;
  AfterEditorReady?: () => any;
  add?: () => any;
  remove?: () => any;
  disable?: () => any;
  enable?: () => any;
  update?: () => any;
}
