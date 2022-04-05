<script lang="ts" setup></script>

<template>
  <div class="prize-wheel">
    <div class="wheel-main">
      <div class="wheel-btn">开始</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wheel-main {
  width: 300px;
  height: 300px;
  background-color: #aaa;
  border-radius: 50%;
  border: 1px solid #333;
  position: relative;

  .wheel-btn {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: orange;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
  }
}
</style>
