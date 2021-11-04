<template>
  <div id="editor-left-bar">
    <left-bar-nav
      :top-plugins="mockPluginList"
      :bottom-plugins="mockBottomPluginList"
      :current="currentPluginName"
      @pluginChange="handlePluginChange"></left-bar-nav>
    <div class="tool-bar" v-show="toolBarShow">
      <tool-header :title="currentPluginName" @close="handleClose"></tool-header>
      <component v-if="currentPluginComponent" :is="currentPluginComponent"></component>
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
    toolHeader
    // componentLib,
    // componentTree
  }
})
export default class EditorLeftBar extends Vue {
  @editorStore.State(state => state.plugins)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly plugins: any;

  toolBarShow = true

  // TODO: 去掉mock数据
  currentPluginName = '组件库'

  mockPluginList = [
    { name: '组件库', icon: 'icon-ts-tubiao_component', component: componentLib },
    { name: '组件树', icon: 'icon-node-tree', component: componentTree },
    { name: '页面管理', icon: 'icon-file-text-fill' },
    { name: '静态资源管理', icon: 'icon-folder-open-fill' },
    { name: '插件市场', icon: 'icon-shopping-fill' },
    { name: '审查', icon: 'icon-contentAudit' }
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

  get currentPluginComponent () {
    const currentPlugin = this.mockPluginList.find((plugin: any) => {
      return plugin.name === this.currentPluginName
    })
    if (currentPlugin) {
      return currentPlugin?.component
    }
  }

  handleClose (): void{
    this.toolBarShow = false
    this.currentPluginName = ''
  }

  handlePluginChange (plugin: string): void{
    if (this.currentPluginName === plugin) {
      this.toolBarShow = !this.toolBarShow
      if (!this.toolBarShow) {
        this.currentPluginName = ''
      }
    } else {
      this.currentPluginName = plugin
      this.toolBarShow = true
    }
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
