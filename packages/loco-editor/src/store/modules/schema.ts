import { SchemaStoreState } from '@/types'

const module = {
  state: (): SchemaStoreState => ({
    schema: null,
    currentNodes: null
  }),

  mutations: {
  }
}

export default module
