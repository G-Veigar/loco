import { createApp } from "vue";
import type { EditorPlugin } from "../../../editor-plugin/type";

type EditorContext = Record<string, any>;

export class EditorModulePlugin {
  #editor: any;
  editorInstallPluginsLength = 0;
  editorPlugins: EditorPlugin[] = [];
  editorInstallPlugins: EditorPlugin[] = [];
  editorContext: EditorContext = {};

  private installPluginFinish: Promise<any> | undefined;

  constructor(editor: any) {
    this.#editor = editor;
  }

  init() {
    const allInstall: any[] = [];
    this.editorInstallPluginsLength = this.editorInstallPlugins.length;
    this.editorInstallPlugins.forEach((plugin) => {
      const installRes = this.#installPlugin(plugin);
      allInstall.push(installRes);
    });
    this.installPluginFinish = Promise.allSettled(allInstall);
  }

  // 使用插件
  use(editorPlugin: EditorPlugin) {
    this.editorPlugins.push(editorPlugin);
    if (editorPlugin.install) {
      this.editorInstallPlugins.push(editorPlugin);
    }
    if (editorPlugin.editorModule) {
      this.editorContext[editorPlugin.name] = editorPlugin.editorModule;
    }
    return this;
  }

  // 装载插件到编辑器
  async #installPlugin(editorPlugin: EditorPlugin) {
    if (!editorPlugin.install) return;
    if (editorPlugin.view) {
      // TODO: 去掉setTimeout会主应用onMounted不执行
      setTimeout(() => {
        this.#loadPluginView(editorPlugin.view);
      }, 0);
    }
    try {
      await editorPlugin.install(this.editorContext);
    } catch (e) {
      const error = e as Error;
      console.error("editor plugin install error: " + error.message);
    }
  }

  // 加载插件视图并渲染
  #loadPluginView(view: any) {
    const viewInstance = createApp(view);
    const rootDom = document.createElement("div");
    document.body.appendChild(rootDom);
    viewInstance.mount(rootDom);
  }
}
