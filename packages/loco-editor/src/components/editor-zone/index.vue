<template>
  <div id="editor-zone">editor-zone</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'editor-zone',
  props: {
    msg: String
  }
})
export default class EditorZone extends Vue {
  msg!: string
}
</script>

<style lang="scss">
// .mobile-device {
//   transform: scale(0.7);
// }

// #viewer-readonly {
//   background-color: #fff;
//   width: 100%;
//   height: 100%;
//   border-radius: 40px;

//   iframe {
//     border: none;
//   }
// }

#editor-zone {
  flex: auto;
}

// .viewer {
//   background-color: #fff;
//   width: 375px;
//   height: 600px;

//   iframe {
//     width: 100%;
//     height: 100%;
//     border: 1px solid #aaa;
//   }
// }
</style>
