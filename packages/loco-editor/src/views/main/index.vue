<template>
  <div id="loco-editor">
    <editor-left-bar></editor-left-bar>
    <editor-zone></editor-zone>
    <editor-right-bar></editor-right-bar>
    <context-menu></context-menu>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import editorLeftBar from './components/editor-left-bar/index.vue'
import editorZone from './components/editor-zone/index.vue'
import editorRightBar from './components/editor-right-bar/index.vue'
import contextMenu from '@/modules/context-menu/components/context-menu.vue'
import { initHotkeys } from '@/modules/hot-key'
import { HOOK, callHook } from '@/modules/hook'
import { initContextMenu } from '@/modules/context-menu'

@Options({
  name: 'editor-main',
  components: {
    editorLeftBar,
    editorZone,
    editorRightBar,
    contextMenu
  }
})
export default class Editor extends Vue {
  created (): void {
    initHotkeys()
    initContextMenu()
    window.addEventListener('message', data => {
      console.log('postmessage', data)
    })
  }

  mounted (): void {
    callHook(HOOK.editorReady)
  }
}
</script>

<style lang="scss">
@import '@/style/var.scss';

#loco-editor {
  height: 100vh;
  display: flex;
  color: $mainFontColor;

  .el-notification {
  padding: 10px !important;

    &.right {
      right: 308px !important;
    }
  }
}

.el-overlay {
  background-color: rgba(0,0,0,.85) !important;
}

.el-message-box {
  box-shadow: rgb(0 0 0 / 30%) 0px 0px 0px 1px;
  background-color: $mainBgColorLight !important;
  border: none;
  border-radius: 3px !important;
}

.el-message-box__header {
  background-color: $leftBarDetailBgColor !important;
  border-bottom: 1px solid #212121;
  .el-message-box__title {
    color: $mainFontColor !important;
  }
  .el-message-box__close {
    color: $mainFontColor !important;
  }
}

.el-message-box__container {
  color: $mainFontColor !important;
}

.el-message-box__btns {
  .el-button {
    border: 1px solid rgb(51, 51, 51) !important;
    border-radius: 2px !important;
  }
}
</style>
