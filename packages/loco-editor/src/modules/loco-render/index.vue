<script lang="ts">
import { defineComponent, VNode, h } from 'vue'
import { schema2RenderParmas, emitter } from './utils'

export default defineComponent({
  name: 'loco-render',
  props: {
    schema: {
      type: Object,
      required: true
    },
    mode: {
      type: String,
      default: 'edit'
    }
  },
  render ():VNode | null{
    if (!this.schema) return null
    const { tag, prop, children } = schema2RenderParmas.call(this, this.schema.rootNode, h, this.mode)
    return h('div', {
      id: 'cooker-app'
    }, [h(tag, prop, children)])
  },
  mounted () {
    if (this.mode === 'edit') {
      emitter.on('hoverEl', (data) => {
        this.$emit('hover', data)
      })
    }
  }
})
</script>
