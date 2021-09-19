<template>
  <div
    class="context-menu-item"
    ref="menuItem"
    @mouseenter="handleMouseEnter">
    <div class="menu-label">
      {{menu.label}}
    </div>
    <i class="iconfont icon-caret-right" v-if="menu.childs && menu.childs.length > 0"></i>
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator'

@Options({
  name: 'contextMenuItem',
  components: {
  },
  computed: {
  }
})
export default class contextMenu extends Vue {
  @Prop({ required: true })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  menu!: any

  handleMouseEnter (): void{
    const $menuItem = this.$refs.menuItem as HTMLElement
    const { left, top } = $menuItem.getBoundingClientRect()
    this.$emit('child', {
      left,
      top,
      childs: this.menu.childs
    })
  }
}
</script>

<style lang="scss">
@import '@/style/var.scss';
.context-menu-item {
  height: 26px;
  line-height: 26px;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  position: relative;

  &:hover {
    background-color: $optionHoveredBgColor;
  }

  .iconfont {
    font-size: 12px;
    position: absolute;
    right: 6px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
