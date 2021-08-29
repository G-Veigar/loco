<template>
  <div class="editor-left-bar">
    editor-left-bar
    <!-- <left-bar-nav
      :plugins="pluginList"
      :current="currentPluginName"
      @pluginChange="handlePluginChange"></left-bar-nav> -->
    <!-- <div class="tool-wrapper">
      <keep-alive>
        <component v-if="currentPluginComponent" :is="currentPluginComponent"></component>
      </keep-alive>
    </div> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import LeftBarNav from './components/left-bar-nav.vue'

@Options({
  name: 'editor-left-bar',
  components: {
    LeftBarNav
  }
})
export default class EditorLeftBar extends Vue {
}
</script>

<style>

</style>
