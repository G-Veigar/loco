<template>
  <div id="editor-zone">
    <header-top></header-top>
    <div class="edit-main">
      <edit-viewport
        :width="editViewport.width"
        :height="editViewport.height"
        :horizontal="editViewport.horizontal"
        ></edit-viewport>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component'
import headerTop from './components/header-top/index.vue'
import editViewport from '@/modules/edit-viewport/index.vue'
import { mapState } from 'vuex'

@Options({
  name: 'editor-zone',
  props: {
    msg: String
  },
  components: {
    headerTop,
    editViewport
  },
  computed: {
    ...mapState({
      editViewport: state => state.editor.editViewport
    })
  }
})
export default class EditorZone extends Vue {
}
</script>

<style lang="scss">
@import '@/style/var.scss';

#editor-zone {
  flex: auto;
  background-color: $mainZoneBg;
  display: flex;
  flex-direction: column;

  .edit-main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: auto;
  }
}
</style>
