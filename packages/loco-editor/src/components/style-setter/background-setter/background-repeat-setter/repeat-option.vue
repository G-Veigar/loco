<script lang="ts" setup>
import { computed } from "vue";
const props = defineProps<{
  type: string | undefined;
}>();

const backgroundItemNum = computed(() => {
  if (props.type === "repeat") {
    return 9;
  } else if (props.type === "repeat-x" || props.type === "repeat-y") {
    return 3;
  } else {
    return 0;
  }
});
</script>

<template>
  <div class="repeat-option">
    <div class="option-no-repeat" v-if="type === 'no-repeat'">×</div>
    <div class="background-item-wrapper" v-else :class="type">
      <div
        class="background-item"
        v-for="item in backgroundItemNum"
        :key="item"
      ></div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/style/var.scss";

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
