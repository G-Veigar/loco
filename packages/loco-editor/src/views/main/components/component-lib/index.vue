<template>
  <div class="component-lib">
    <component-group name="basic" :components="basicComponents"></component-group>
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
      name: 'block',
      icon: 'icon-rongqi'
    },
    {
      name: 'button',
      icon: 'icon-anniu1'
    },
    {
      name: 'text',
      icon: 'icon-textEdit'
    },
    {
      name: 'img',
      icon: 'icon-f-img'
    },
    {
      name: 'audio',
      icon: 'icon-yinpin'
    },
    {
      name: 'vedio',
      icon: 'icon-shipin-tianchong'
    }
  ]

  formComponents = [
    {
      name: 'input',
      icon: 'icon-input1'
    },
    {
      name: 'textarea',
      icon: 'icon-textarea'
    },
    {
      name: 'radio',
      icon: 'icon-radioboxfill'
    },
    {
      name: 'checkbox',
      icon: 'icon-check-box'
    },
    {
      name: 'switch',
      icon: 'icon-switch1'
    },
    {
      name: 'select',
      icon: 'icon-biaodanzujian-xialakuang'
    },
    {
      name: 'picker',
      icon: 'icon-date'
    }
  ]
}
</script>

<style lang="scss">
.component-lib {
}
</style>
