<script lang="ts" setup>
import { ref, computed } from "vue";
import unitInput from "@/components/base-input/unit-input/index.vue";

interface StyleObjBackgroundPosition {
  backgroundPosition: string;
}

const gridValues = [
  {
    name: "left top",
    left: 0,
    top: 0,
  },
  {
    name: "center top",
    left: 50,
    top: 0,
  },
  {
    name: "right top",
    left: 100,
    top: 0,
  },
  {
    name: "left center",
    left: 0,
    top: 50,
  },
  {
    name: "center center",
    left: 50,
    top: 50,
  },
  {
    name: "right center",
    left: 100,
    top: 50,
  },
  {
    name: "left bottom",
    left: 0,
    top: 100,
  },
  {
    name: "center bottom",
    left: 50,
    top: 100,
  },
  {
    name: "right bottom",
    left: 100,
    top: 100,
  },
];

const testValue = ref({
  name: "",
  left: 50,
  top: 50,
  leftUnit: "%",
  topUnit: "%",
});

const props = defineProps<{
  styleObj: StyleObjBackgroundPosition | undefined;
}>();

function handleGridPickerClick(gridValue: {
  left: number;
  top: number;
  name: string;
}): void {
  const { left, top, name } = gridValue;
  testValue.value = {
    name,
    left,
    top,
    leftUnit: "%",
    topUnit: "%",
  };
}

const activeGridValueName = computed(() => {
  const matchedGridValue = gridValues.find((item) => {
    if (
      item.left === testValue.value.left &&
      item.top === testValue.value.top &&
      testValue.value.leftUnit === "%" &&
      testValue.value.topUnit === "%"
    ) {
      return true;
    }
  });
  return matchedGridValue?.name;
});

const gridPickerStyle = computed(() => {
  const { left, top, leftUnit, topUnit } = testValue.value;
  return {
    backgroundPosition: `${left}${leftUnit} ${top}${topUnit}`,
  };
});
</script>

<template>
  <div class="background-position-setter">
    <!-- 九宫格设置器 -->
    <div class="grid-picker-setter" :style="gridPickerStyle">
      <div
        class="grid-value-item"
        v-for="item in gridValues"
        :key="item.name"
        :class="{ active: activeGridValueName === item.name }"
        @click="handleGridPickerClick(item)"
      ></div>
    </div>

    <!-- 手动输入设置 -->
    <div class="normal-input">
      <div class="input-item left-input">
        <div class="setter-item-label">Left</div>
        <unit-input
          class="setter-item-input"
          :unitList="['%', 'PX']"
        ></unit-input>
      </div>
      <div class="input-item top-input">
        <div class="setter-item-label">Top</div>
        <unit-input
          class="setter-item-input"
          :unitList="['%', 'PX']"
        ></unit-input>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$grid-value-size: 24px;

.background-position-setter {
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 6px 4px;

  .grid-picker-setter {
    flex: none;
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    width: $grid-value-size * 3;
    height: $grid-value-size * 3;
    background-color: rgb(43, 43, 43);
    background-image: url("./selected-bg.png");
    background-repeat: no-repeat;
    background-size: $grid-value-size $grid-value-size;
    transition: background-position 0.12s linear;
    border: 1px solid rgb(33, 33, 33);
    border-radius: 2px;

    .grid-value-item {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      &:before {
        display: block;
        content: "";
        width: 4px;
        height: 4px;
        background-color: rgb(115, 115, 115);
        border-radius: 50%;
      }

      &:hover,
      &.active {
        &:before {
          background-color: rgb(235, 235, 235);
        }
      }
    }
  }

  .normal-input {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 4px 0;

    .input-item {
      display: flex;
    }

    .setter-item-label {
      width: 50px;
      color: rgb(217, 217, 217);
      text-align: right;
      margin-right: 8px;
    }

    .setter-item-input {
      width: 50px;
    }
  }
}
</style>
