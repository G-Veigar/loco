<template>
  <div class="display-setter">
    <div class="child-setter">
      <div class="child-setter-label">Display</div>
      <display-picker></display-picker>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import displayPicker from './display-picker/index.vue'

@Options({
  name: 'displaySetter',
  components: {
    displayPicker
  }
})
export default class DisplaySetter extends Vue {

}
</script>

<style lang="scss" scoped>
@import '@/style/var.scss';
.display-setter {
  background-color: $mainBgColorLight;
  .child-setter {
    display: flex;
    .child-setter-label {
      width: 60px;
      flex: none;
      line-height: 30px;
      color: rgb(217, 217, 217);
    }
  }
}
</style>
