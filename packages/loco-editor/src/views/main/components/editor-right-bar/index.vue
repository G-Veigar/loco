<template>
  <div id="editor-right-bar">
    <el-tabs type="border-card">
      <el-tab-pane name="style">
        <template #label>
          <i class="iconfont icon-yangshi"></i>
        </template>
        <style-setter></style-setter>
      </el-tab-pane>
      <el-tab-pane label="属性" name="attr">
        <template #label>
          <i class="iconfont icon-sliders"></i>
        </template>
        <prop-render></prop-render>
      </el-tab-pane>
      <el-tab-pane label="事件" name="event">
        <template #label>
          <i class="iconfont icon-click"></i>
        </template>
        <!-- <event-setter></event-setter> -->
        event-setter
      </el-tab-pane>
      <el-tab-pane label="动画" name="data">
        <template #label>
          <i class="iconfont icon-bim_donghua"></i>
        </template>
        <!-- <status-setter></status-setter> -->
        status-setter
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import styleSetter from '@/components/style-setter/index.vue'
import propRender from '@/components/prop-render/index.vue'

@Options({
  name: 'editor-right-bar',
  components: {
    styleSetter,
    propRender
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
@import '@/style/var.scss';

#editor-right-bar {
  width: 300px;
  max-height: 100vh;
  overflow-y: auto;
  border-left: 1px solid #1a1a1a;
  background-color: $mainBgColor;
  display: flex;
  align-self: stretch;

  .iconfont {
    font-size: 22px;
  }

  .el-tabs {
    width: 100%;
    background-color: $mainBgColor;
    border: none;
    display: flex;
    flex-direction: column;

    .el-tabs__header {
      background-color: $mainBgColor;
      border: none;
      flex: none;
    }

    .el-tabs__content {
      padding: 0;
      flex: auto;
      overflow: auto;
    }

    .el-tabs__item {
      border: none;
      height: $headerTopHeight;
      &:hover {
        color: #fff;
      }
      &.is-active {
        background-color: $mainBgColorLight;
        color: #fff;
      }
    }
  }
}
</style>
