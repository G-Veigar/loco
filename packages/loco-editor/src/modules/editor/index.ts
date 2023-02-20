import { ref, createApp } from "vue";
import type { EditorPlugin } from "../editor-plugin/type";

export interface EditorPluginInstallCtx {
  registerContext: any; // 注册ctx注册函数
}

type EditorContext = Record<string, any>;

export class LocoEditor {
  initProgress = ref(0);
  editorInstallPluginsLength = 0;
  editorPlugins: EditorPlugin[] = [];
  editorInstallPlugins: EditorPlugin[] = [];
  name: string | undefined;
  domReady = false;
  private installPluginFinish: Promise<any> | undefined;

  editorContext: EditorContext = {};

  // 使用插件
  public use(editorPlugin: EditorPlugin) {
    this.editorPlugins.push(editorPlugin);
    if (editorPlugin.install) {
      this.editorInstallPlugins.push(editorPlugin);
    }
    if (editorPlugin.editorModule) {
      this.editorContext[editorPlugin.name] = editorPlugin.editorModule;
    }
    return this;
  }

  // 初始化编辑器
  public init() {
    const allInstall: any[] = [];
    this.editorInstallPluginsLength = this.editorInstallPlugins.length;
    this.editorInstallPlugins.forEach((plugin) => {
      const installRes = this.installPlugin(plugin);
      allInstall.push(installRes);
    });
    this.installPluginFinish = Promise.allSettled(allInstall);
  }

  // 编辑器dom ready
  public ready() {
    this.domReady = true;
    this.installPluginFinish?.then(() => {
      console.log("editor ready");
    });
  }

  // 装载插件到编辑器
  private async installPlugin(editorPlugin: EditorPlugin) {
    if (!editorPlugin.install) return;
    if (editorPlugin.view) {
      this.loadPluginView(editorPlugin.view);
    }
    try {
      await editorPlugin.install(this.editorContext);
      this.updateInitProgress();
    } catch (e) {
      const error = e as Error;
      console.error("editor plugin install error: " + error.message);
    }
  }

  // 更新编辑器初始化进度
  private updateInitProgress(addNum?: number) {
    const initTaskLength = this.editorInstallPluginsLength;
    if (!addNum) {
      addNum = Math.ceil(100 / initTaskLength);
    }
    if (addNum + this.initProgress.value >= 100) {
      this.initProgress.value = 100;
    } else {
      this.initProgress.value += addNum;
    }
  }

  // 加载插件视图并渲染
  private loadPluginView(view: any) {
    const viewInstance = createApp(view);
    const rootDom = document.createElement("div");
    viewInstance.mount(rootDom);
    document.body.appendChild(rootDom);
  }
}
