<script lang="ts" setup>
import { ref, computed, watch, nextTick } from "vue";
import "animate.css";

const props = withDefaults(
  defineProps<{
    visible: boolean;
    maskClose: boolean;
    animated: boolean;
    outAnimated: boolean;
  }>(),
  {
    visible: false,
    maskClose: true,
    animated: true,
    outAnimated: false,
  }
);

const dialogShow = ref(false);
const dialogMaskShow = ref(false);
const dialogMainShow = ref(false);

const emit = defineEmits<{
  (event: "update:visible", visible: boolean): void;
}>();

function handleClickMask() {
  if (props.maskClose) {
    emit("update:visible", false);
  }
}

function handleAnimationEnd(): void {
  if (!dialogMainShow.value) {
    dialogShow.value = false;
  }
}

watch(
  () => props.visible,
  (value) => {
    // 弹出弹框
    if (value) {
      dialogShow.value = true;
      nextTick(() => {
        dialogMainShow.value = true;
        dialogMaskShow.value = true;
      });
    } else {
      dialogMainShow.value = false;
      dialogMaskShow.value = false;
      if (!props.outAnimated || !props.animated) {
        dialogShow.value = false;
      }
    }
  }
);
</script>

<template>
  <div class="loco-dialog" v-if="dialogShow">
    <transition
      name="custom-classes-transition"
      :enter-active-class="`animate__animated animate__fadeIn`"
      :leave-active-class="`animate__animated animate__fadeOut`"
    >
      <div
        v-show="dialogMaskShow"
        class="dialog-mask"
        @click="handleClickMask"
      ></div>
    </transition>
    <transition
      v-if="animated"
      name="custom-classes-transition"
      :enter-active-class="`animate__animated zoom-in`"
      :leave-active-class="`animate__animated animate__zoomOut`"
    >
      <div
        class="dialog-card"
        v-show="dialogMainShow"
        @animationend="handleAnimationEnd"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
// @import "./style.scss";
@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.2, 0.2, 0.2);
  }

  50% {
    opacity: 1;
  }

  75% {
    transform: scale3d(1.1, 1.1, 1.1);
  }
}

.zoom-in {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
}

.loco-dialog {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .dialog-mask {
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    animation-duration: 450ms;
  }

  .dialog-card {
    width: 300px;
    background-color: #fff;
    z-index: 1;
    border-radius: 8px;
    animation-duration: 450ms;
  }
}
</style>
