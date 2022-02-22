<script lang="ts" setup>
import { computed } from "vue";
import { useDialogStore, useToastStore, useLoadingStore } from "./store";
import LocoDialog from "@/modules/loco-component/base/loco-dialog/common-dialog.vue";
import LocoToast from "@/modules/loco-component/base/loco-toast/toast.vue";
import LocoLoading from "@/modules/loco-component/base/loco-loading/loco-loading.vue";

const store = useDialogStore();
const toastStore = useToastStore();
const loadingStore = useLoadingStore();

const dialogOptions = computed(() => {
  return {
    title: store.title,
    message: store.message,
    showCancelBtn: store.showCancelBtn,
    visible: store.visible,
  };
});

const toastOptions = computed(() => {
  return {
    message: toastStore.message,
    visible: toastStore.visible,
  };
});

const loadingOptions = computed(() => {
  return {
    message: loadingStore.message,
    visible: loadingStore.visible,
  };
});

function closeDialog(res: "cancel" | "confirm") {
  store.hide(res);
}
</script>

<template>
  <div class="loco-action">
    <LocoDialog
      v-bind="dialogOptions"
      @cancel="closeDialog('cancel')"
      @confirm="closeDialog('confirm')"
    />
    <LocoToast v-bind="toastOptions" />
    <LocoLoading v-bind="loadingOptions" />
  </div>
</template>
