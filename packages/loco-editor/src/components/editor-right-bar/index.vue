<template>
  <div class="editor-right-bar">editor-right-bar</div>
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

<style>

</style>
