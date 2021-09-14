<template>
  <div class="border-setter">
    <div class="child-setter">
      <div class="child-setter-label">Radius</div>
      <border-radius-setter></border-radius-setter>
    </div>
    <div class="child-setter">
      <div class="child-setter-label">Border</div>
      <border-selector></border-selector>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'
import borderRadiusSetter from './border-radius-setter/index.vue'
import borderSelector from './border-selector/index.vue'

@Options({
  components: {
    borderRadiusSetter,
    borderSelector
  }
})
export default class styleSetter extends Vue {

}
</script>

<style lang="scss">
@import '@/style/var.scss';

.border-setter {
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
