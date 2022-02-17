<script lang="ts" setup>
import backgroundTypeSetter from "./background-type-setter/index.vue";
import backgroundPositionSetter from "./background-position-setter/index.vue";
import backgroundRepeatSetter from "./background-repeat-setter/index.vue";
import backgroundSizeSetter from "./background-size-setter/index.vue";

interface StyleObjBackground {
  backgroundColor: string;
  backgroundPosition: string;
  backgroundSize: string;
  backgroundRepeat: string;
  backgroundOrigin: string;
  backgroundImage: string;
}

const props = defineProps<{
  styleObj: StyleObjBackground | undefined;
}>();
</script>

<template>
  <div class="background-setter">
    <div class="child-setter">
      <div class="child-setter-label">Type</div>
      <background-type-setter></background-type-setter>
    </div>
    <div class="child-setter">
      <div class="child-setter-label">Position</div>
      <background-position-setter></background-position-setter>
    </div>
    <div class="child-setter">
      <div class="child-setter-label">Repeat</div>
      <background-repeat-setter></background-repeat-setter>
    </div>
    <div class="child-setter">
      <div class="child-setter-label">Size</div>
      <background-size-setter></background-size-setter>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/style/var.scss";

.background-setter {
  background-color: $mainBgColorLight;
  .child-setter {
    display: flex;
    .child-setter-label {
      width: 60px;
      line-height: 30px;
      color: rgb(217, 217, 217);
    }
  }
}
</style>
