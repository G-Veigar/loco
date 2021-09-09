<template>
  <div id="loco-test">
    <spacing-setter></spacing-setter>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import spacingSetter from '../../components/style-setter/spacing-setter/index.vue'

@Options({
  name: 'editor-test',
  components: {
    spacingSetter
  }
})
export default class Editor extends Vue {
}
</script>

<style lang="scss">
#loco-editor {
  height: 100vh;
  display: flex;
}
</style>
