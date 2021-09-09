<template>
  <div id="editor-right-bar">
    <el-tabs type="border-card">
      <el-tab-pane label="样式" name="style">
        <style-setter></style-setter>
        style-setter
      </el-tab-pane>
      <el-tab-pane label="属性" name="attr">
        <!-- <prop-setter></prop-setter> -->
        prop-setter
      </el-tab-pane>
      <el-tab-pane label="事件" name="event">
        <!-- <event-setter></event-setter> -->
        event-setter
      </el-tab-pane>
      <el-tab-pane label="状态" name="data">
        <!-- <status-setter></status-setter> -->
        status-setter
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import styleSetter from '@/components/style-setter/index.vue'

@Options({
  name: 'editor-right-bar',
  components: {
    styleSetter
  },
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
  width: 300px;
  max-height: 100vh;
  overflow-y: auto;
  border-left: 1px solid #1a1a1a;
  background-color: #2b2b2b;
  display: flex;
  align-self: stretch;

  .el-tabs {
    width: 100%;
    background-color: #2b2b2b;
    border: none;
  }
  .el-tabs__header {
    background-color: #2b2b2b;
    border: none;
  }

  .el-tabs__content {
    padding: 0;
  }

  .el-tabs__item {
    border: none;
    &:hover {
      color: #fff;
    }
    &.is-active {
      background-color: #404040;
      color: #fff;
    }
  }
}
</style>
