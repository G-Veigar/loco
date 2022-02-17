<script lang="ts" setup>
import repeatOption from "./repeat-option.vue";

interface StyleObjBackgroundRepeat {
  backgroundRepeat: string;
}

const backgroundRepeatOptions = ["repeat", "repeat-x", "repeat-y", "no-repeat"];

const props = defineProps<{
  styleObj: StyleObjBackgroundRepeat | undefined;
}>();
</script>

<template>
  <div class="background-repeat-setter">
    <repeat-option
      class="background-repeat-option"
      v-for="item in backgroundRepeatOptions"
      :key="item"
      :type="item"
    ></repeat-option>
  </div>
</template>

<style lang="scss">
.background-repeat-setter {
  flex: auto;
  display: flex;
  .background-repeat-option {
    &:not(:last-of-type) {
      margin-right: 2px;
    }
  }
}
</style>
