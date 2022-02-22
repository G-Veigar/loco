<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
    <div class="loco-toast" v-if="visible">{{ message }}</div>
  </transition>
</template>

<script lang="ts" setup>
import "animate.css";

const props = withDefaults(
  defineProps<{
    message: string;
    visible: boolean;
  }>(),
  {
    message: "",
  }
);
</script>

<style lang="scss" scoped>
.loco-toast {
  position: fixed;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  min-width: 80px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  border-radius: 4px;
  animation-duration: 0.2s;
  padding: 0 14px;
}
</style>
