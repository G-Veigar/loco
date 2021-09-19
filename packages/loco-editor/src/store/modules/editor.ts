import { EditorPluginConfig, EditorStoreState } from '@/types'

const module = {
  state: (): EditorStoreState => ({
    plugins: {},
    activePlugin: null,
    contextMenu: {
      menuList: [
        {
          label: 'hehe',
          id: 'hehe',
          action: () => { console.log('hehe') }
        },
        {
          isGroup: true,
          id: 'haha-grounp',
          items: [
            {
              label: 'haha',
              id: 'haha',
              childs: [
                {
                  label: 'haha111',
                  id: 'haha111',
                  action: () => { console.log('haha111') }
                },
                {
                  label: 'haha222',
                  id: 'haha222',
                  action: () => { console.log('haha222') }
                }
              ]
            },
            {
              label: 'xixi',
              id: 'xixi',
              action: () => { console.log('xixi') }
            }
          ]
        },
        {
          label: 'kds kc',
          id: 'kds',
          action: () => { console.log('kds kc') }
        }
      ],
      show: true,
      position: {
        left: 500,
        top: 250
      },
      childMenus: {
        left: 0,
        top: 0,
        childs: undefined
      }
    }
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
    },
    setContextMenu (state: EditorStoreState, options: {key: string, value: unknown}):void {
      const { key, value } = options
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      state.contextMenu[key] = value
    }
  }
}

export default module
