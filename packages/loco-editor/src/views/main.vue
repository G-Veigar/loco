<template>
  <div class="loco-editor">
    <editor-left-bar></editor-left-bar>
    <editor-zone></editor-zone>
    <editor-right-bar></editor-right-bar>
  </div>
</template>

<script>
import editorLeftBar from '@/components/editor-left-bar'
import editorZone from '@/components/editor-zone'
import editorRightBar from '@/components/editor-right-bar'

export default {
  name: 'editor-main',
  components: {
    editorLeftBar,
    editorZone,
    editorRightBar
  }
  // setup () {
  // }
}
</script>
