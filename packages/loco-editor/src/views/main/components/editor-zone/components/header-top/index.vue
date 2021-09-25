<template>
  <div class="header-top">
    <div class="device-picker">
      <i class="iconfont icon-phone"></i>
      <div class="device-name btn" @click="toggleShowDeviceList">
        {{editViewport.device}}
        <i class="iconfont icon-caret-down"></i>
      </div>
      <div class="pick-list" v-if="showDeviceList">
        <div class="pick-list-item custom">自定义...</div>
        <div
          class="pick-list-item"
          v-for="item in deviceList"
          :key="item.name">{{item.name}}</div>
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
import { deviceList } from '@/modules/edit-viewport/device'
import { notify } from '@/modules/notify'

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
  deviceList = deviceList
  showDeviceList = false
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  rorateDevice () {
    this.setEditViewport({
      key: 'horizontal',
      value: !this.editViewport.horizontal
    })
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  toggleShowDeviceList () {
    this.showDeviceList = !this.showDeviceList
    notify({
      title: 'Info',
      message: 'This is an info message',
      type: 'info'
      // duration: 0
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
    font-size: 14px;
    display: flex;
    align-items: center;
    position: relative;
    overflow: visible;

    .pick-list {
      position: absolute;
      top: 105%;
      background-color: $leftBarDetailBgColor;
      border: 1px solid rgb(33, 33, 33);
      border-radius: 3px;
      box-shadow: rgb(0 0 0 / 15%) 0px 5px 10px;
      max-height: 500px;
      width: 120%;
      overflow-y: scroll;
      left: 15px;
      &::-webkit-scrollbar {
        display: none; /* Chrome Safari */
      }

      .pick-list-item {
        width: 100%;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        box-sizing: border-box;
        color: $mainFontColor;
        text-align: left;

        &.custom {
          margin-bottom: 4px;
          &::after {
            content: '';
            display: block;
            height: 1px;
            background-color: $mainBgColorLight;
          }
        }

        &:hover {
          background-color: $optionHoveredBgColor;
          color: $optionHoveredColor;
        }
      }
    }

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
