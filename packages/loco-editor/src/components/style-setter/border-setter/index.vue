<script lang="ts" setup>
import borderRadiusSetter from "./border-radius-setter/index.vue";
import borderSelector from "./border-selector/index.vue";
import borderStyleSetter from "./border-style-setter/index.vue";
</script>

<template>
  <div class="border-setter">
    <div class="child-setter">
      <div class="child-setter-label">Radius</div>
      <border-radius-setter></border-radius-setter>
    </div>
    <div class="child-setter">
      <div class="child-setter-label">Border</div>
      <border-selector></border-selector>
    </div>
    <div class="child-setter">
      <div class="child-setter-label">Style</div>
      <border-style-setter></border-style-setter>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/style/var.scss";

.border-setter {
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
