<script lang="ts">
import { defineComponent, VNode, h } from 'vue'
import { schema2RenderParmas } from './utils'

export default defineComponent({
  props: {
    schema: {
      type: Object,
      required: true
    }
  },
  render ():VNode | null{
    if (!this.schema) return null
    const { tag, prop, children } = schema2RenderParmas.call(this, this.schema.rootNode, h)
    return h('div', {
      id: 'cooker-app'
    }, [h(tag, prop, children)])
  }
})
</script>
