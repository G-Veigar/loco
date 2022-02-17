<script lang="ts" setup>
const props = defineProps<{
  type: string | undefined;
  selectedValue: string | undefined;
}>();

const emit = defineEmits<{
  (event: "select", val: any): void;
}>();

function selectBorder(): void {
  emit("select", props.type);
}
</script>

<template>
  <div
    class="border-option"
    :class="{ selected: selectedValue === type }"
    @click="selectBorder"
  >
    <div class="demo-box" :class="type"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/style/var.scss";
.border-option {
  width: 24px;
  height: 24px;
  border-radius: 2px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  &.selected {
    background-color: $optionSelectedBgColor;
  }

  .demo-box {
    width: 12px;
    height: 12px;
    box-sizing: border-box;
    border: 2px solid $optionBgColor;

    &.top {
      border-top: 2px solid $optionColor;
    }

    &.right {
      border-right: 2px solid $optionColor;
    }

    &.left {
      border-left: 2px solid $optionColor;
    }

    &.bottom {
      border-bottom: 2px solid $optionColor;
    }

    &.all {
      border: 2px solid $optionColor;
    }
  }
}
</style>
