<template>
  <div id="editor-left-bar">
    <left-bar-nav
      :top-plugins="mockPluginList"
      :bottom-plugins="mockBottomPluginList"
      :current="currentPluginName"
      @pluginChange="handlePluginChange"></left-bar-nav>
    <div class="tool-bar" v-show="toolBarShow">
      <tool-header title="组件库" @close="handleClose"></tool-header>
      <!-- <component-lib></component-lib> -->
      <component-tree></component-tree>
      <!-- <keep-alive>
        <component v-if="currentPluginComponent" :is="currentPluginComponent"></component>
      </keep-alive> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import leftBarNav from './components/left-bar-nav.vue'
import { namespace } from 'vuex-class'
import toolHeader from './components/tool-header.vue'
import componentLib from '../component-lib/index.vue'
import componentTree from '@/modules/component-tree/index.vue'

const editorStore = namespace('editor')

@Options({
  name: 'editor-left-bar',
  components: {
    leftBarNav,
    toolHeader,
    componentLib,
    componentTree
  }
})
export default class EditorLeftBar extends Vue {
  @editorStore.State(state => state.plugins)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly plugins: any;

  toolBarShow = true

  // TODO: 去掉mock数据
  currentPluginName = 'test'

  mockPluginList = [
    { name: '组件库', icon: 'icon-ts-tubiao_component' },
    { name: '组件树', icon: 'icon-node-tree' },
    { name: '页面管理', icon: 'icon-file-text-fill' },
    { name: '插件市场', icon: 'icon-shopping-fill' },
    { name: '静态资源管理', icon: 'icon-folder-open-fill' }
  ]

  mockBottomPluginList = [
    { name: '文档', icon: 'icon-read-fill' },
    { name: '设置', icon: 'icon-setting-fill' }
  ]

  get pluginList ():{name: string, icon: string}[] {
    const list = []
    for (const pluginName in this.plugins) {
      list.push({
        name: pluginName,
        icon: this.plugins[pluginName].icon
      })
    }
    return list
  }

  handleClose (): void{
    this.toolBarShow = false
  }

  handlePluginChange (plugin: string): void{
    this.currentPluginName = plugin
  }
}
</script>

<style lang="scss">
@import '@/style/var.scss';

#editor-left-bar {
  width: $leftBarWidth;
  overflow: visible;
  position: relative;

  .tool-bar {
    background-color: #aaa;
    position: absolute;
    width: $leftToolBarWidth;
    bottom: 0;
    left: $leftBarWidth;
    top: $headerTopHeight;
    border-right: 1px solid $mainBorderColor;
    background-color: $leftBarDetailBgColor;
  }
}
</style>
