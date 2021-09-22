<template>
  <div class="edit-viewport">
    edit-viewport
  </div>
</template>

<script>
import { Vue, Options } from 'vue-property-decorator'

@Options({
  name: 'editViewport'
})
export default class EditViewport extends Vue {
}
</script>

<style lang="scss">
@import '@/style/var.scss';

.edit-viewport {
  width: 414px;
  height: 736px;
  border: 1px solid #000;
  background-color: #fff;
}
</style>
