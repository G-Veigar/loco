<script lang="ts">
export default {
  name: "BaseButton",
};
</script>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    text: string;
    disabled?: boolean;
    loading?: boolean;
  }>(),
  {
    disabled: true,
    boolean: false,
  }
);

const emit = defineEmits<{
  (event: "click", params: Event): void;
}>();

const handleClick = (e: Event) => {
  console.log("handleClick");
  emit("click", e);
};
</script>

<template>
  <button :disabled="disabled" class="loco-button" @click="handleClick">
    <slot>{{ text }}</slot>
  </button>
</template>

<style lang="scss" scoped>
.loco-button {
  min-width: 100px;
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #1989fa;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
}
</style>
