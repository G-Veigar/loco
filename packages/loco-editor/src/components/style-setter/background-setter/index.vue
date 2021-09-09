<template>
  <div class="background-setter">
    <div class="child-setter">
      <div class="child-setter-label">Position</div>
      <background-position-setter></background-position-setter>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator'
import backgroundPositionSetter from './background-position-setter/index.vue'

interface StyleObjBackground {
  backgroundColor: string;
  backgroundPosition: string;
  backgroundSize: string;
  backgroundRepeat: string;
  backgroundOrigin: string;
  backgroundImage: string;
}

@Options({
  name: 'BackgroundSetter',
  components: {
    backgroundPositionSetter
  }
})
export default class BackgroundSetter extends Vue {
  @Prop({ type: Object, required: true })
  readonly styleObj: StyleObjBackground | undefined
}
</script>

<style lang="scss">
.background-setter {
  background-color: #404040;
  .child-setter {
    display: flex;
    .child-setter-label {
      width: 60px;
      line-height: 30px;
      color: rgb(217, 217, 217);
    }
  }
}
</style>
