import leftPanel from './left-panel/index.vue'

export default {
  id: 'component-lib',
  name: '组件库',
  install (editor) {
    editor.registerLelfPannel({
      icon: 'icon-component',
      leftPanel
    })
  },
  uninstall (editor) {
  }
}
