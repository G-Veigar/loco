<script lang="ts" setup>
import unitInput from "@/components/base-input/unit-input/index.vue";

interface StyleObjSize {
  width: number | string;
  height: number | string;
  maxWidth: number | string;
  maxHeight: number | string;
  minWidth: number | string;
  minHeight: number | string;
}

const props = defineProps<{
  styleObj: StyleObjSize | undefined;
}>();
</script>

<template>
  <div class="size-setter">
    <!-- width + height -->
    <div class="setter-line">
      <div class="setter-item">
        <div class="setter-item-label">W</div>
        <unit-input class="setter-item-input"></unit-input>
      </div>
      <div class="setter-item">
        <div class="setter-item-label">H</div>
        <unit-input class="setter-item-input"></unit-input>
      </div>
    </div>
    <!-- max-width + max-height -->
    <div class="setter-line">
      <div class="setter-item">
        <div class="setter-item-label">Max W</div>
        <unit-input class="setter-item-input"></unit-input>
      </div>
      <div class="setter-item">
        <div class="setter-item-label">Max H</div>
        <unit-input class="setter-item-input"></unit-input>
      </div>
    </div>
    <!-- min-width + min-height -->
    <div class="setter-line">
      <div class="setter-item">
        <div class="setter-item-label">Min W</div>
        <unit-input class="setter-item-input"></unit-input>
      </div>
      <div class="setter-item">
        <div class="setter-item-label">Min H</div>
        <unit-input class="setter-item-input"></unit-input>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/style/var.scss";

.size-setter {
  background-color: $mainBgColorLight;
  .setter-line {
    display: flex;
  }
  .setter-item {
    display: flex;
    width: 50%;
    .setter-item-label {
      width: 50px;
      color: rgb(217, 217, 217);
      text-align: right;
      margin-right: 8px;
    }
    .setter-item-input {
      width: 50px;
    }
  }
}
</style>
