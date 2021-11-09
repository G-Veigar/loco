import { Vue } from 'vue-class-component'
import Schema from '../modules/loco-schema'
import SchemaNode from '../modules/loco-schema/schema-node.class'

export type EditorPluginConfig = {
  name: string;
  icon: string;
  component: Vue;
};

export type EditorStorePlugins = any;
export type EditorStoreState = {
  plugins: EditorStorePlugins;
  activePlugin: EditorPluginConfig | null,
  editViewport: any,
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

export type SchemaStoreState = {
  schema: Schema | null,
  currentNodes: SchemaNode[] | null
}
