<template>
  <div id="editor-left-bar">
    <left-bar-nav
      :plugins="pluginList"
      :current="currentPluginName"
      @pluginChange="handlePluginChange"></left-bar-nav>
    <div class="tool-wrapper">
      <!-- <keep-alive>
        <component v-if="currentPluginComponent" :is="currentPluginComponent"></component>
      </keep-alive> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import LeftBarNav from './components/left-bar-nav.vue'
import { namespace } from 'vuex-class'

const editorStore = namespace('editor')

@Options({
  name: 'editor-left-bar',
  components: {
    LeftBarNav
  }
})
export default class EditorLeftBar extends Vue {
  @editorStore.State(state => state.plugins)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly plugins: any;

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
}
</script>

<style lang="scss">
@import '@/style/var.scss';

#editor-left-bar {
  width: 260px;
  display: flex;

  .tool-wrapper {
    width: 100%;
    border-right: 1px solid $mainBorderColor;
    background-color: $leftBarDetailBgColor;
  }
}
</style>
