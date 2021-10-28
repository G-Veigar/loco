<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator'
import { h, VNode } from 'vue'
import { schema2RenderParmas } from './utils'
// TODO: remove
import demoSchema from '../loco-schema/demo'

@Options({
  name: 'locoRender'
})
export default class LocoRender extends Vue {
  // @Prop({ type: String, required: true })
  // schema!: string

  schema = demoSchema

  render ():VNode {
    const { tag, prop, children } = schema2RenderParmas.call(this, this.schema, h)
    return h('div', {
      id: 'cooker-app'
    }, [h(tag, prop, children)])
  }
}
</script>
