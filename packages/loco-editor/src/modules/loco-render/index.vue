<script lang="tsx">
import { Vue, Options, Prop } from 'vue-property-decorator'
// import { VNode } from 'vue'

@Options({
  name: 'locoRender'
})
export default class LocoRender extends Vue {
  @Prop({ type: String, required: true })
  schema!: string

  render ():any {
    return <h1>locoRender</h1>
  }
}
</script>
