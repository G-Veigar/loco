<template>
  <div class="background-size-setter">
    <!-- block-picker -->
    <div class="block-picker">
      <div class="size-option">cover</div>
      <div class="size-option">contain</div>
      <div class="size-option small">100·100</div>
      <div class="size-option small">100·Auto</div>
    </div>

    <div class="expression-and-input">
      <background-size-expression></background-size-expression>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator'
import backgroundSizeExpression from './background-size-expression.vue'

interface StyleObjBackgroundSize {
  backgroundSize: string
}

@Options({
  name: 'BackgroundSizeSetter',
  components: { backgroundSizeExpression }
})
export default class BackgroundSizeSetter extends Vue {
  @Prop({ type: Object, required: true })
  readonly styleObj: StyleObjBackgroundSize | undefined
}
</script>

<style lang="scss">
@import '@/style/var.scss';

.background-size-setter {
  flex: auto;
  .block-picker {
    display: flex;
    cursor: default;
    .size-option {
      background-color: $optionBgColor;
      color: #D9D9D9;
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      &:not(:last-of-type) {
        margin-right: 2px;
      }
      &.small {
        font-size: 12px;
      }
    }
  }
}
</style>
