<template>
  <div class="repeat-option">
    <div class="option-no-repeat" v-if="type === 'no-repeat'">×</div>
    <div
      class="background-item-wrapper"
      v-else
      :class="type">
      <div
        class="background-item"
        v-for="item in backgroundItemNum"
        :key="item"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator'

@Options({
  name: 'RepeatOption'
})
export default class RepeatOption extends Vue {
  @Prop({ type: Object, required: true })
  readonly type: string | undefined

  get backgroundItemNum ():number {
    if (this.type === 'repeat') {
      return 9
    } else if (this.type === 'repeat-x' || this.type === 'repeat-y') {
      return 3
    } else {
      return 0
    }
  }
}
</script>

<style lang="scss">
@import '@/style/var.scss';

.repeat-option {
  flex: auto;
  background-color: $optionBgColor;
  height: 21px;
  display: flex;
  justify-content: center;
  align-items: center;

  .background-item-wrapper {
    width: 17px;
    height: 17px;
    display: flex;
    justify-content: space-between;
    align-content: space-between;

    &.repeat {
      flex-wrap: wrap;
    }

    &.repeat-x {
      align-items: center;
    }

    &.repeat-y {
      flex-direction: column;
      align-items: center;
    }

    .background-item {
      width: 5px;
      height: 5px;
      background-color: $optionColor;
    }
  }

  .option-no-repeat {
    width: 17px;
    height: 17px;
    line-height: 17px;
    color: $optionColor;
    font-size: 17px;
    font-weight: bold;
    cursor: default;
  }
}
</style>
