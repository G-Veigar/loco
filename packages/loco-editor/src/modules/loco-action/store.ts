import { defineStore } from "pinia";

export const useDialogStore = defineStore("loco-dialog", {
  state: () => {
    return {
      title: "",
      message: "",
      showCancelBtn: true,
      visible: false,
      result: "",
    };
  },
  actions: {
    show() {
      this.visible = true;
    },
    hide(res: "cancel" | "confirm") {
      this.visible = false;
      this.result = res;
    },
    set(params: {
      title: string;
      message: string;
      showCancelBtn: boolean;
      visible: boolean;
    }) {
      for (const key in params) {
        if (key in this) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          this[key] = params[key];
        }
      }
    },
  },
});

export const useToastStore = defineStore("loco-toast", {
  state: () => {
    return {
      message: "",
      visible: false,
    };
  },
  actions: {
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    },
    setMessage(msg: string) {
      this.message = msg;
    },
  },
});

export const useLoadingStore = defineStore("loco-loading", {
  state: () => {
    return {
      message: "",
      visible: false,
    };
  },
  actions: {
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    },
    setMessage(msg: string) {
      this.message = msg;
    },
  },
});
