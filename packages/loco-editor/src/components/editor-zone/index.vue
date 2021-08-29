<template>
  <div class="editor-zone">editor-zone</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'editor-zone',
  props: {
    msg: String
  }
})
export default class EditorZone extends Vue {
  msg!: string
}
</script>

<style>

</style>
