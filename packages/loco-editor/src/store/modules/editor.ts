import { EditorPluginConfig, EditorStoreState } from '@/types'

const module = {
  state: (): EditorStoreState => ({
    plugins: {},
    activePlugin: null
  }),

  mutations: {
    installEditorPlugin (state: EditorStoreState, plugin: EditorPluginConfig): void {
      if (!state.plugins) {
        state.plugins = {
          [plugin.name]: {
            name: plugin.name,
            icon: '',
            leftPanel: null
          }
        }
      } else {
        if (!state.plugins[plugin.name]) {
          state.plugins[plugin.name] = {
            name: plugin.name,
            icon: '',
            leftPanel: null
          }
        }
      }
    },
    setActivePlugin (state: EditorStoreState, plugin: EditorPluginConfig): void{
      state.activePlugin = plugin
    }
  }
}

export default module
