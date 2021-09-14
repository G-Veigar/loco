<template>
  <div id="editor-zone">
    <header-top>header-top</header-top>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import headerTop from './components/header-top/index.vue'

@Options({
  name: 'editor-zone',
  props: {
    msg: String
  },
  components: { headerTop }
})
export default class EditorZone extends Vue {
  msg!: string
}
</script>

<style lang="scss">
@import '@/style/var.scss';

#editor-zone {
  flex: auto;
  background-color: $mainZoneBg;
  display: flex;
  flex-direction: column;
}
</style>
