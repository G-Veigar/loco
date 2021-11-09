<template>
  <div class="component-lib">
    <component-group name="basic" :components="basicComponents"></component-group>
    <component-group name="pro" :components="proComponents"></component-group>
    <component-group name="form" :components="formComponents"></component-group>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-property-decorator'
import componentGroup from './component-group.vue'

@Options({
  name: 'component-lib',
  components: {
    componentGroup
  }
})
export default class Editor extends Vue {
  basicComponents = [
    {
      name: 'loco-block',
      icon: 'icon-rongqi'
    },
    {
      name: 'loco-button',
      icon: 'icon-anniu1'
    },
    {
      name: 'loco-text',
      icon: 'icon-textEdit'
    },
    {
      name: 'loco-image',
      icon: 'icon-f-img'
    },
    {
      name: 'loco-audio',
      icon: 'icon-yinpin'
    },
    {
      name: 'loco-vedio',
      icon: 'icon-shipin-tianchong'
    }
  ]

  proComponents = [
    {
      name: 'loco-swiper',
      icon: 'icon-shouyelunbotu'
    },
    {
      name: 'loco-popup',
      icon: 'icon-program-code'
    },
    {
      name: 'loco-lottery',
      icon: 'icon-zhuanpanshezhi'
    },
    {
      name: 'loco-upload',
      icon: 'icon-cloudupload'
    },
    {
      name: 'loco-share',
      icon: 'icon-fenxiang'
    },
    {
      name: 'loco-tabs',
      icon: 'icon-bootstrap_tabs'
    }
  ]

  formComponents = [
    {
      name: 'loco-input',
      icon: 'icon-input1'
    },
    {
      name: 'loco-textarea',
      icon: 'icon-textarea'
    },
    {
      name: 'loco-radio',
      icon: 'icon-radioboxfill'
    },
    {
      name: 'loco-checkbox',
      icon: 'icon-check-box'
    },
    {
      name: 'loco-switch',
      icon: 'icon-switch1'
    },
    {
      name: 'loco-select',
      icon: 'icon-biaodanzujian-xialakuang'
    },
    {
      name: 'loco-picker',
      icon: 'icon-date'
    },
    {
      name: 'loco-slider',
      icon: 'icon-Slider-horizontal'
    }
  ]
}
</script>

<style lang="scss">
.component-lib {
  user-select: none;
}
</style>
