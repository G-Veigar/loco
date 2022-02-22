import { createApp, watch } from "vue";
import LocoAction from "./loco-action.vue";
import { useDialogStore, useToastStore, useLoadingStore } from "./store";

const dialogStore = useDialogStore();
const toastStore = useToastStore();
const loadingStore = useLoadingStore();

let locoAction: any;
let locoActionWrapper: any;
let dialogPmresolver: any = null;

watch(
  () => dialogStore.visible,
  (visible) => {
    // 关闭dialog
    if (!visible && dialogPmresolver) {
      dialogPmresolver(dialogStore.result);
    }
  }
);

function initWrapperIfNeed() {
  if (!locoAction) {
    locoAction = createApp(LocoAction);
    locoActionWrapper = document.createElement("div");
    document.body.appendChild(locoActionWrapper);
    locoAction.mount(locoActionWrapper);
  }
}

function showDialog(options: any) {
  initWrapperIfNeed();
  dialogStore.set(options);
  dialogStore.show();
  return new Promise((resolve, reject) => {
    dialogPmresolver = resolve;
  });
}

function showToast(options: any) {
  const { message, duration = 2500 } = options;
  initWrapperIfNeed();
  toastStore.setMessage(message);
  toastStore.show();
  setTimeout(toastStore.hide, duration);
}

function showLoading(options: any) {
  const { message } = options;
  initWrapperIfNeed();
  loadingStore.setMessage(message);
  loadingStore.show();
}

function hideLoading(options: any) {
  loadingStore.hide();
}

export { showDialog, showToast, showLoading, hideLoading };
