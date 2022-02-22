<template>
  <div class="loco-tab" :style="tabWrapperStyle">
    <div
      class="loco-tab-item"
      v-for="(item, index) in tabs"
      :key="item.value"
      :ref="setItemRef"
      @click="handleClick(item, index)"
    >
      {{ item.label }}
    </div>
    <div
      class="active-bar"
      v-if="activeBarVisiable"
      :style="activeBarStyle"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
type TabItem = {
  label: string;
  value: string;
};

type TabType = "normal" | "slide" | "auto";

type SpaceType = "between" | "around" | "full";

const props = withDefaults(
  defineProps<{
    tabs: TabItem[];
    tabType: TabType;
    spaceType: SpaceType;
    slideItemMin: number;
    showActvieBar: boolean;
    sticky: boolean;
  }>(),
  {
    tabType: "auto",
    spaceType: "between",
    slideItemMin: 5,
    showActvieBar: true,
    sticky: true,
  }
);

const activeBarReady = ref(false);

const itemsPosArr = ref([]);

const itemRefs = ref([]);

const activeValue = ref("tab3");
const activeIndex = ref(2);

const tabWrapperStyle = computed(() => {
  const res: any = {};
  if (props.sticky) {
    res.position = "sticky";
    res.top = "0";
  }
  // 如果是normal 平铺展示方式
  if (
    props.tabType === "normal" ||
    (props.tabType === "auto" && props.tabs.length < props.slideItemMin)
  ) {
    let justifyContent;
    switch (props.spaceType) {
      case "between":
        justifyContent = "space-between";
        break;
      case "around":
        justifyContent = "space-around";
        break;
    }
    res.display = "flex";
    res.justifyContent = justifyContent;
  } else {
    res.display = "flex";
    res.flexWrap = "nowrap";
    res.overflow = "auto";
  }
  return res;
});

const activeBarVisiable = computed(() => {
  return props.showActvieBar && activeBarReady.value;
});

const activeBarStyle = computed(() => {
  if (activeBarVisiable.value) {
    const { left, width } = itemsPosArr.value[activeIndex.value];
    return {
      left: `${left}px`,
      width: `${width}px`,
    };
  } else {
    return {};
  }
});

function handleClick(item: any, index: number): void {
  activeValue.value = item.value;
  activeIndex.value = index;
}

function setItemRef(el: HTMLElement): void {
  if (el) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    itemRefs.value.push(el);
  }
}

function initActiveBar(): void {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const posArr = [];
  itemRefs.value.forEach((item, index) => {
    posArr.push({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      left: item.offsetLeft,
    });
    if (index !== 0) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const lastItemPos = posArr[index - 1];
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      lastItemPos.width = item.offsetLeft - lastItemPos.left;
    }
  });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  itemsPosArr.value = posArr;
  activeBarReady.value = true;
}

onMounted(() => {
  if (props.showActvieBar) {
    initActiveBar();
  }
});
</script>

<style lang="scss" scoped>
// @import './style.scss';
.loco-tab {
  width: 100%;
  position: relative;
  background-color: #fff;
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
}

.loco-tab-item {
  text-align: center;
}

.active-bar {
  position: absolute;
  bottom: 0;
  height: 4px;
  background-color: red;
  transition: left 0.4s;
}
</style>
