<template>
  <div class="background-repeat-setter">
    <repeat-option
      class="background-repeat-option"
      v-for="item in backgroundRepeatOptions"
      :key="item"
      :type="item"></repeat-option>
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator'
import repeatOption from './repeat-option.vue'

interface StyleObjBackgroundRepeat {
  backgroundRepeat: string
}

@Options({
  name: 'BackgroundRepeatSetter',
  components: { repeatOption }
})
export default class BackgroundRepeatSetter extends Vue {
  @Prop({ type: Object, required: true })
  readonly styleObj: StyleObjBackgroundRepeat | undefined

  backgroundRepeatOptions = ['repeat', 'repeat-x', 'repeat-y', 'no-repeat']
}
</script>

<style lang="scss">
.background-repeat-setter {
  flex: auto;
  display: flex;
  .background-repeat-option {
    &:not(:last-of-type) {
      margin-right: 2px;
    }
  }
}
</style>
