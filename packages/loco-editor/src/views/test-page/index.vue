<script lang="ts" setup>
import { ref, onMounted } from "vue";
import LocoButton from "@/modules/loco-component/base/loco-button/view.vue";
import LocoCard from "./card.vue";
import LocoListContainer from "@/modules/loco-component/pro/loco-list-container/index.vue";
import { useElGlueStore } from "@/modules/loco-component-glue/index";
// import LocoSwiper from "@/modules/loco-component/base/loco-swiper/loco-swiper.vue";
// import LocoPopup from "@/modules/loco-component/base/loco-popup/view.vue";
// import LocoDialog from "@/modules/loco-component/base/loco-dialog/view.vue";
import PrizeWheel from "@/modules/loco-component/lottery/prize-wheel/view.vue";
// import CodeEditor from "../main/components/code-editor/code-editor.vue";

import { SwiperSlide } from "swiper/vue";

// import LocoTab from "@/modules/loco-component/pro/loco-tab/view.vue";

const elGlueStore = useElGlueStore();

// const componentGlue = new ComponentGlue();

elGlueStore.registerComponent({
  eid: "123",
  props: {
    col: 2,
    rowGap: 10,
    colGap: 10,
    listData: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    itemComponent: LocoCard,
  },
});

setTimeout(() => {
  elGlueStore.setProp({
    eid: "123",
    key: "col",
    value: 3,
  });
}, 3000);

const popupVisible = ref(false);
const dialogVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    // popupVisible.value = true;
    // dialogVisible.value = true;
  }, 2000);
});

const tabs = ref([
  {
    label: "hehe",
    value: "hehe",
  },
  {
    label: "haha",
    value: "haha",
  },
  {
    label: "xixi",
    value: "xixi",
  },
]);

function handleClick() {
  console.log("handleClick");
}
</script>

<template>
  <div class="test-page">
    <!-- <LocoListContainer v-bind="elGlueStore.states[123]"></LocoListContainer> -->
    <LocoButton text="hello" @click="handleClick"></LocoButton>
    <!-- <LocoSwiper>
      <swiper-slide>
        <div class="slide-item">111</div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-item">222</div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-item">333</div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-item">444</div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-item">555</div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-item">666</div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-item">777</div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-item">888</div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-item">999</div>
      </swiper-slide>
    </LocoSwiper>
    <LocoPopup v-model:visible="popupVisible">111</LocoPopup>
    <LocoDialog v-model:visible="dialogVisible">
      <div class="dialog-box">222</div>
    </LocoDialog> -->
    <!-- <PrizeWheel></PrizeWheel> -->
    <!-- <CodeEditor></CodeEditor> -->
    <!-- <LocoTab :tabs="tabs" /> -->
  </div>
</template>

<style lang="scss" scoped>
.dialog-box {
  height: 200px;
}

.slide-item {
  height: 100px;
  background-color: #eee;
  color: #333;
}
</style>
