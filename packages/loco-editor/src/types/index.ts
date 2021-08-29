import { Vue } from 'vue-class-component'

export type EditorPluginConfig = {
  name: string;
  icon: string;
  component: Vue;
};

export interface EditorStoreState {
  plugins: Record<string, unknown> | null;
  activePlugin: EditorPluginConfig | null
}
