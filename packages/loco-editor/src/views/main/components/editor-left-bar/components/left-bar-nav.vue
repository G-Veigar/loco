<template>
  <div class="left-bar-nav">
    <div class="nav-top">
      <div
        class="plugin-item"
        :title="item.name"
        :class="{active: current===item.name}"
        v-for="item in topPlugins"
        :key="item.label"
        @click="changePlugin(item)">
        <i class="iconfont plugin-icon" :class="item.icon"></i>
      </div>
    </div>
    <div class="nav-bottom">
      <div
        class="plugin-item"
        :title="item.name"
        :class="{active: current===item.name}"
        v-for="item in bottomPlugins"
        :key="item.label"
        @click="changePlugin(item)">
        <i class="iconfont plugin-icon" :class="item.icon"></i>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Options } from 'vue-property-decorator'
import { EditorPluginConfig } from '@/types'

@Options({
  name: 'leftBarNav'
})
export default class LeftBarNav extends Vue {
  @Prop({ type: Array, required: true })
  topPlugins!: any;

  @Prop({ type: Array, required: true })
  bottomPlugins!: any;

  @Prop({ type: String, required: true })
  current!: string;

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
  box-sizing: border-box;
  border-right: 1px solid $mainBorderColor;
  padding-bottom: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.plugin-item {
  cursor: pointer;
  width: $leftBarWidth;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #cfcfcf;

  &.active {
    background: $mainBgColor;
    color: #fafafa;
  }

  &:hover {
    color: #fafafa;
  }

  .plugin-icon {
    font-size: 22px;
  }
}
</style>
