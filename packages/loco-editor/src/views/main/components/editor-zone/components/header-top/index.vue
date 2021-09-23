<template>
  <div class="header-top">
    <div class="device-picker btn">
      <i class="iconfont icon-phone"></i>
      <div class="device-name">
        {{editViewport.device}}
        <i class="iconfont icon-caret-down"></i>
      </div>
    </div>
    <div class="device-ratio btn">
      {{editViewport.width}} x {{editViewport.height}}
    </div>
    <div class="device-zoom btn">{{editViewport.zoom}}%</div>
    <div
      class="device-horizontal btn"
      :class="{'checked': editViewport.horizontal}"
      @click="rorateDevice">
      <i class="iconfont icon-xuanzhuan1"></i>
    </div>
    <div class="device-other btn">
      <i class="iconfont icon-other1"></i>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component'
import { mapState, mapMutations } from 'vuex'
// import { deviceList } from '@/modules/edit-viewport/device'

@Options({
  name: 'header-top',
  computed: {
    ...mapState({
      editViewport: state => state.editor.editViewport
    })
  },
  methods: {
    ...mapMutations(['setEditViewport'])
  }
})
export default class HeaderTop extends Vue {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  rorateDevice () {
    this.setEditViewport({
      key: 'horizontal',
      value: !this.editViewport.horizontal
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/var.scss';

.header-top {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: $headerTopHeight;
  box-sizing: border-box;
  background-color: $mainBgColorLight;
  border-bottom: 1px solid $mainBorderColor;
  cursor: default;

  .btn {
    &:hover {
      color: $optionHoveredColor;
    }
  }

  .device-picker {
    font-size: 12px;
    display: flex;
    align-items: center;

    .icon-phone {
      font-size: 22px;
      margin-right: 4px;
    }

    .icon-caret-down {
      font-size: 12px;
      margin-left: 2px;
    }
  }

  .device-ratio {
    margin-left: 16px;
    font-size: 14px;
  }

  .device-zoom {
    margin-left: 16px;
    font-size: 14px;
  }

  .device-horizontal {
    margin-left: 16px;
    transition: transform 0.5s;

    .iconfont {
      font-size: 22px;
    }

    &.checked {
      transform: rotate(90deg);
    }
  }

  .device-other {
    margin-left: 16px;
    .iconfont {
      font-size: 22px;
    }
  }
}
</style>
