import editorPluginOfficialComponents from '@loco/editor-plugin-official-components'
import { EditorPlugin } from '@loco/types'

function installEditorPlugin (plugin: EditorPlugin): void {
}

// 根据当前账号加载editor插件
function installAccountEditorPlugins (): promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    resolve(true)
  })
}

export { installEditorPlugin }
