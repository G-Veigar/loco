import { createStore } from 'vuex'
import editorModule from './modules/editor'
// import schemaModule from './modules/schema'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    editor: editorModule
    // schema: schemaModule
  }
})
