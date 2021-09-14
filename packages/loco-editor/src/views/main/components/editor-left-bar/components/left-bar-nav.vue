<template>
  <div class="left-bar-nav">
    <div
      class="plugin-item"
      :title="item.name"
      :class="{active: current===item.name}"
      v-for="item in plugins"
      :key="item.label"
      @click="changePlugin(item)">
      <i class="iconfont plugin-icon" :class="item.icon"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { EditorPluginConfig } from '@/types'

@Options({
  props: {
    plugins: {
      type: Array
    },
    current: {
      type: String
    }
  }
})
export default class LeftBarNav extends Vue {
  changePlugin (item: EditorPluginConfig): void {
    this.$emit('pluginChange', item.name)
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/var.scss';

.left-bar-nav {
  width: $leftBarWidth;
  height: 100%;
  background-color: $leftBarNavBgColor;
  flex: none;
  border-right: 1px solid $mainBorderColor;
}

.plugin-item {
  cursor: pointer;
  width: $leftBarWidth;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.active {
    background: #ccc;
  }
  .plugin-icon {
    font-size: 20px;
    color: #555;
  }
}
</style>
