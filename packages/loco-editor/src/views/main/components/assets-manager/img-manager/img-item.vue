<script lang="ts" setup>
import { ref, onMounted } from "vue";

const img = ref();

onMounted(() => {
  setTimeout(() => {
    console.log("img data", {
      width: img.value.naturalWidth,
      height: img.value.naturalHeight,
      size: img.value.sizes,
    });
  }, 2000);
});
</script>

<template>
  <div class="img-item">
    <img
      ref="img"
      class="img-self"
      src="https://img0.baidu.com/it/u=1443162828,2450726794&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500"
      alt=""
    />
    <div class="img-name">呵呵呵.jpg</div>
  </div>
</template>

<style lang="scss">
@import "@/style/var.scss";

.img-item {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  .img-self {
    width: 100%;
    height: 120px;
    object-fit: cover;
  }

  .img-name {
    font-size: 12px;
    height: 26px;
    line-height: 26px;
  }
}
</style>
