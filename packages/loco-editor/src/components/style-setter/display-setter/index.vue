<script lang="ts" setup>
import displayPicker from "./display-picker/index.vue";
</script>

<template>
  <div class="display-setter">
    <div class="child-setter">
      <div class="child-setter-label">Display</div>
      <display-picker></display-picker>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/style/var.scss";
.display-setter {
  background-color: $mainBgColorLight;
  .child-setter {
    display: flex;
    .child-setter-label {
      width: 60px;
      flex: none;
      line-height: 30px;
      color: rgb(217, 217, 217);
    }
  }
}
</style>
