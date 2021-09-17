<template>
  <div id="loco-editor">
    <editor-left-bar></editor-left-bar>
    <editor-zone></editor-zone>
    <editor-right-bar></editor-right-bar>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import editorLeftBar from './components/editor-left-bar/index.vue'
import editorZone from './components/editor-zone/index.vue'
import editorRightBar from './components/editor-right-bar/index.vue'
import { initHotkeys } from '@/modules/hot-key'
import { HOOK, callHook } from '@/modules/hook'

@Options({
  name: 'editor-main',
  components: {
    editorLeftBar,
    editorZone,
    editorRightBar
  }
})
export default class Editor extends Vue {
  created (): void {
    initHotkeys()
  }

  mounted (): void {
    callHook(HOOK.editorReady)
  }
}
</script>

<style lang="scss">
#loco-editor {
  height: 100vh;
  display: flex;
}
</style>
