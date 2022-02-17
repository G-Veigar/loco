<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    visiable: boolean;
  }>(),
  {
    visiable: true
  }
);
</script>

<template>
  <div class="loco-dialog" v-show="visiable">
    <div class="dialog-card">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// @import "./style.scss";
.loco-dialog {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  .dialog-card {
    width: 300px;
    background-color: #fff;
    z-index: 1;
    border-radius: 8px;
  }
}
</style>
