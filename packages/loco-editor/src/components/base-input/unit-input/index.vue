<script lang="ts" setup>
import { ref, computed } from "vue";
// import UnitSelect from './unit-select.vue'

const buildInUnits = {
  size: ["PX", "%", "VW", "VH", "EM", "REM"],
  time: ["MS", "S", "MIN", "H", "D"],
};

type UnitType = "size" | "time";

const props = withDefaults(
  defineProps<{
    unit: string;
    value: number | string;
    type: UnitType;
    unitList: string[];
  }>(),
  {
    unit: "px",
    type: "size",
  }
);

const selectShow = ref(false);
const inputFocusLeft = ref(0);
const inputFocusTop = ref(0);

const unitOptions = computed(() => {
  return props.unitList || buildInUnits[props.type];
});

const unitSelectStyle = computed(() => {
  return {
    left: inputFocusLeft.value + "px",
    top: inputFocusTop.value + "px",
  };
});

function handleUnitClick(e: FocusEvent): void {
  const $input = e.target as HTMLInputElement;
  const { left, top } = $input.getBoundingClientRect();
  inputFocusLeft.value = left;
  inputFocusTop.value = top;
  selectShow.value = true;
  console.log("this.inputFocusLeft", inputFocusLeft.value);
}

function handleBlur(): void {
  selectShow.value = false;
}
</script>

<template>
  <div class="unit-input">
    <input type="text" class="unit-base-input" @blur="handleBlur" />
    <div class="unit-display" @click="handleUnitClick">{{ unit }}</div>
    <div class="unit-select" v-show="selectShow" :style="unitSelectStyle">
      <div class="unit-option" v-for="item in unitOptions" :key="item">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.unit-input {
  padding: 0;
  color: rgb(217, 217, 217);
  position: relative;
  overflow: visible;
  display: flex;
  border-radius: 2px;
  background-color: rgb(43, 43, 43);
  border: 1px solid rgb(33, 33, 33);

  &:focus-within {
    box-shadow: rgb(94 166 247) 0px 0px 0px 1px;
  }

  .unit-base-input {
    margin: 0;
    width: 100%;
    box-sizing: border-box;
    background-color: transparent;
    border: none;

    &:focus {
      outline: none;
    }
  }

  .unit-display {
    width: 40px;
  }

  .unit-select {
    background-color: rgb(77, 77, 77);
    border: 1px solid #333333;
    box-shadow: rgb(0 0 0 / 15%) 0px 5px 10px;
    border-radius: 3px;
    position: fixed;
    width: 40px;
    z-index: 1;
    cursor: default;
  }
}
</style>
