<script lang="ts" setup>
import { ref, computed, watch, nextTick } from "vue";
// import locoAction from "../../../loco-action";
import "animate.css";

type animationEffects = "fade" | "bounce" | "zoom" | "slide";

type popupPosition = "middle" | "bottom";

type closeBtnPosition = "center-bottom" | "inner-top-right" | "outer-top-right";

type closeBtnType = "normal" | "round";

type closeBtnIcon = "icon-close1" | "icon-close2";

const animateNameMap = {
  zoom: ["animate__zoomIn", "animate__zoomOut"],
  zoomDown: ["animate__zoomInDown", "animate__zoomOutUp"],
  bounce: ["animate__bounceIn", "animate__bounceOut"],
  fade: ["animate__fadeIn", "animate__fadeOut"],
  fadeDown: ["animate__fadeInDown", "animate__fadeOutUp"],
  slide: ["animate__slideInDown", "animate__slideOutDown"],
  slideUp: ["animate__slideInUp", "animate__slideOutDown"],
  tada: ["animate__tada", "animate__fadeOut"],
  rubberBand: ["animate__rubberBand", "animate__fadeOut"],
  jello: ["animate__jello", "animate__fadeOut"],
  backInOut: ["animate__backInDown", "animate__backOutDown"],
};

const visible = ref(false);
const popupShow = ref(false);
const popupMainShow = ref(false);

const props = withDefaults(
  defineProps<{
    type: popupPosition;
    maskClose: boolean;
    animated: boolean;
    outAnimated: boolean;
    effect: animationEffects;
    showCloseBtn: boolean;
    closeBtnPos: closeBtnPosition;
    closeBtnType: closeBtnType;
  }>(),
  {
    type: "bottom",
    boolean: true,
    animated: true,
    outAnimated: true,
    effect: "fade",
    showCloseBtn: true,
    closeBtnPos: "inner-top-right",
    closeBtnType: "normal",
  }
);

const animateName = computed(() => {
  const res = animateNameMap[props.effect];
  if (!props.outAnimated) {
    res[1] = "";
  }
  return res;
});

const popupStyle = computed(() => {
  const res: any = {};
  switch (props.type) {
    case "middle":
      res.display = "flex";
      res.alignItems = "center";
      res.justifyContent = "center";
      break;
  }
  return res;
});

const popupMainStyle = computed(() => {
  const res: any = {};
  switch (props.type) {
    case "middle":
      res.width = "70%";
      res.borderRadius = "8px";
      break;
    case "bottom":
      res.position = "absolute";
      res.width = "100%";
      res.bottom = "0";
      res.borderRadius = "20px";
      res.borderBottomLeftRadius = "0";
      res.borderBottomRightRadius = "0";
      break;
  }
  return res;
});

const clostBtnIcon = computed(() => {
  let res: closeBtnIcon = "icon-close1";
  if (props.type === "middle") {
    switch (props.closeBtnPos) {
      case "inner-top-right":
        res = "icon-close1";
        break;
      case "center-bottom":
      case "outer-top-right":
        res = props.closeBtnType === "round" ? "icon-close2" : "icon-close1";
    }
  }
  return res;
});

const closeBtnStyle = computed(() => {
  const res: any = {};
  switch (props.closeBtnPos) {
    case "inner-top-right":
      res.right = "10px";
      res.top = "10px";
      break;
    case "center-bottom":
      res.left = "50%";
      res.bottom = "-60px";
      res.color = "#FFFFFF";
      res.transform = "translateX(-50%)";
      break;
    case "outer-top-right":
      res.right = "-20px";
      res.top = "-50px";
      res.color = "#FFFFFF";
      break;
  }
  return res;
});

const fontSizeStyle = computed(() => {
  const res: any = {};
  if (props.closeBtnPos === "inner-top-right") {
    res.fontSize = "18px";
  } else {
    res.fontSize = "30px";
  }
  return res;
});

function handleAnimationEnd(): void {
  if (!popupMainShow.value) {
    popupShow.value = false;
  }
}

const emit = defineEmits<{
  (event: "updata:visible", visible: boolean): void;
}>();

function handleClickMask() {
  if (props.maskClose) {
    emit("updata:visible", false);
  }
}

watch(
  () => visible.value,
  (value) => {
    // 弹出弹框
    if (value) {
      popupShow.value = true;
      nextTick(() => {
        popupMainShow.value = true;
      });
    } else {
      popupMainShow.value = false;
      if (!props.outAnimated || !props.animated) {
        popupShow.value = false;
      }
    }
  }
);
</script>

<template>
  <div
    class="loco-popup"
    v-if="popupShow"
    :style="popupStyle"
    @click="handleClickMask"
  >
    <transition
      v-if="animated"
      name="custom-classes-transition"
      :enter-active-class="`animate__animated ${animateName[0]}`"
      :leave-active-class="`animate__animated ${animateName[1]}`"
    >
      <div
        class="popup-main"
        v-show="popupMainShow"
        :style="popupMainStyle"
        @animationend="handleAnimationEnd"
      >
        <div class="close-btn" v-if="showCloseBtn" :style="closeBtnStyle">
          <i class="iconfont" :class="clostBtnIcon" :style="fontSizeStyle"></i>
        </div>
        <slot></slot>
      </div>
    </transition>
    <div v-else :style="popupMainStyle" class="popup-main">
      <div class="close-btn" v-if="showCloseBtn">
        <i class="iconfont icon-close1"></i>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loco-popup {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
}
.popup-main {
  height: 400px;
  background-color: #fff;
  animation-duration: 400ms; /* don't forget to set a duration! */
  position: relative;
}
.close-btn {
  color: #666;
  padding: 4px;
  position: absolute;
  .icon-close1 {
    font-size: 22px;
  }
}
</style>
