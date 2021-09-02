<template>
  <div id="editor-right-bar">editor-right-bar</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'editor-right-bar',
  props: {
    msg: String
  }
})
export default class EditorLeftBar extends Vue {
  msg!: string
}
</script>

<style lang="scss">
#editor-right-bar {
  width: 360px;
  max-height: 100vh;
  overflow-y: auto;
  border-left: 1px solid #ccc;
  background: #99330022;
}
</style>
