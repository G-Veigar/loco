<script lang="ts" setup>
import { ref, computed } from "vue";

const props = withDefaults(
  defineProps<{
    state: {
      type: string;
      name: string;
      desc: any;
      value: any;
    };
    isRoot: boolean;
  }>(),
  {
    isRoot: true,
  }
);

const isCollapse = ref(false);

const isArrayOrObject = computed(() => {
  return props.state.type === "array" || props.state.type === "object";
});
</script>

<template>
  <div class="state-item">
    <div
      class="current-state"
      :class="{ 'has-child': isArrayOrObject, root: isRoot }"
      @click="isCollapse = !isCollapse"
    >
      <i
        class="iconfont collapse-icon"
        :class="{
          hidden: !isArrayOrObject,
          'icon-triangle-right': isCollapse,
          'icon-triangle-down': !isCollapse,
        }"
      ></i>
      <div class="state-name" :class="{ root: isRoot }">{{ state.name }}</div>
      <div class="state-detail" :class="state.type">
        <div class="detail-object" v-if="state.type === 'object'">
          <div class="type-tag">{}</div>
          <div>{{ Object.keys(state.value).length }} keys</div>
        </div>
        <div class="detail-array" v-else-if="state.type === 'array'">
          <div class="type-tag">[]</div>
          <div>{{ state.value.length }} items</div>
        </div>
        <div v-else>{{ state.value }}</div>
      </div>
    </div>
    <div class="child-states" v-if="isArrayOrObject && !isCollapse">
      <state-item
        v-for="(item, key) in state.value"
        :state="item"
        :key="key"
        :isRoot="false"
      ></state-item>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.state-item {
  .current-state {
    display: flex;
    align-items: center;
    height: 20px;
    line-height: 20px;

    &.root {
      height: 24px;
      line-height: 24px;
    }
    &.has-child {
      cursor: pointer;
    }
  }

  .child-states {
    padding: 2px 10px;
  }

  .collapse-icon {
    font-size: 12px;
    color: #ccc;
    &.hidden {
      visibility: hidden;
    }
  }
  .state-name {
    color: #eee;
    &.root {
      font-weight: bold;
    }
  }
  .state-detail {
    margin-left: 6px;
    &.array {
      color: #aaa;
    }
    &.object {
      color: #aaa;
    }
    &.string {
      color: #ca4b8a;
    }
    &.number {
      color: #64af82;
    }
    &.boolean {
      color: #dc7369;
    }
    .detail-object,
    .detail-array {
      display: flex;
      align-items: center;
      .type-tag {
        margin-right: 6px;
      }
    }
  }
}
</style>
