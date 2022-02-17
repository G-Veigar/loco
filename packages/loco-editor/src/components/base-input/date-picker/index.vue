<script lang="ts" setup>
import { ref } from "vue";

const value2 = ref("");

const props = withDefaults(
  defineProps<{
    options: { value: any; label: string }[];
  }>(),
  {}
);
</script>

<template>
  <el-date-picker
    v-model="value2"
    type="date"
    placeholder="Pick a day"
    size="mini"
  >
  </el-date-picker>
</template>

<style lang="scss"></style>
