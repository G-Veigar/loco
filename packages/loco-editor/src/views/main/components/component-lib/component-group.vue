<template>
  <div class="component-group">
    <div class="component-group-header" @click="toggleFold">
      <i class="iconfont" :class="folded ? 'icon-caret-right' : 'icon-caret-down'"></i>
      {{name}}
    </div>
    <div class="component-group-wrapper" v-show="!folded">
      <component-item
        v-for="item in components"
        :key="item.name"
        :icon="item.icon"
        :name="item.name"></component-item>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue, Prop } from 'vue-property-decorator'
import componentItem from './component-item.vue'

@Options({
  name: 'componentGroup',
  components: {
    componentItem
  }
})
export default class Editor extends Vue {
  @Prop({ type: String, required: true })
  name!: string

  @Prop({ type: Array, required: true })
  components!: any[]

  folded = false

  toggleFold ():void {
    this.folded = !this.folded
  }
}
</script>

<style lang="scss">
@import '@/style/var.scss';

.component-group {
  .component-group-header {
    padding-left: 6px;
    text-align: left;
    background-color: $mainBgColor;
    height: 30px;
    line-height: 28px;
    border-bottom: 1px solid $mainBorderColor;
    color: $mainFontColor;
    cursor: default;
    font-size: 13px;

    .iconfont {
      font-size: 12px;
      margin-right: 6px;
    }
  }

  .component-group-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
