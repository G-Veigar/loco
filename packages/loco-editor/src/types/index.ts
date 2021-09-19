import { Vue } from 'vue-class-component'

export type EditorPluginConfig = {
  name: string;
  icon: string;
  component: Vue;
};

export type EditorStorePlugins = any;
export type EditorStoreState = {
  plugins: EditorStorePlugins;
  activePlugin: EditorPluginConfig | null,
  contextMenu: {
    show: boolean;
    menuList: any[],
    position: {
      left: number,
      top: number,
    },
    childMenus: any
  }
}
