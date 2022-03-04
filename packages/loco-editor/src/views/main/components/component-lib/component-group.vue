<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import componentItem from "./component-item.vue";

const props = withDefaults(
  defineProps<{
    name: string;
    components: any[];
    searchVal: string;
  }>(),
  {}
);

const searchedComponents = computed(() => {
  if (props.searchVal) {
    return props.components.filter((item) => {
      return (
        item.name.includes(props.searchVal) ||
        item.namePinyin.includes(props.searchVal.toLowerCase())
      );
    });
  } else {
    return props.components;
  }
});

const folded = ref(false);

function toggleFold(): void {
  folded.value = !folded.value;
}

watch(
  () => props.searchVal,
  () => {
    folded.value = false;
  }
);
</script>

<template>
  <div class="component-group" v-show="searchedComponents.length > 0">
    <div class="component-group-header" @click="toggleFold">
      <i
        class="iconfont"
        :class="folded ? 'icon-caret-right' : 'icon-caret-down'"
      ></i>
      {{ name }}
    </div>
    <div class="component-group-wrapper" v-show="!folded">
      <component-item
        v-for="item in searchedComponents"
        :key="item.name"
        :icon="item.icon"
        :name="item.name"
      ></component-item>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/style/var.scss";

.component-group {
  .component-group-header {
    padding-left: 6px;
    text-align: left;
    background-color: $mainBgColor;
    height: 30px;
    line-height: 28px;
    border-bottom: 1px solid $mainBorderColor;
    color: $mainFontColor;
    cursor: default;
    font-size: 13px;

    .iconfont {
      font-size: 12px;
      margin-right: 6px;
    }
  }

  .component-group-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
