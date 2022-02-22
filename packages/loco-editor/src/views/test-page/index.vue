<script lang="ts" setup>
import { ref, onMounted } from "vue";
import LocoSlide from "@/modules/loco-component/base/loco-slide/loco-slide.vue";
import LocoPopup from "@/modules/loco-component/base/loco-popup/view.vue";
import LocoDialog from "@/modules/loco-component/base/loco-dialog/view.vue";

document.addEventListener("touchstart", (e) => {
  console.log("touchstart", e.target);
});

const popupVisible = ref(false);
const dialogVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    // popupVisible.value = true;
    dialogVisible.value = true;
  }, 2000);
});
</script>

<template>
  <div class="test-page">
    <LocoSlide />
    <LocoPopup v-model:visible="popupVisible">111</LocoPopup>
    <LocoDialog v-model:visible="dialogVisible">
      <div class="dialog-box">222</div>
    </LocoDialog>
  </div>
</template>

<style lang="scss" scoped>
.dialog-box {
  height: 200px;
}
</style>
