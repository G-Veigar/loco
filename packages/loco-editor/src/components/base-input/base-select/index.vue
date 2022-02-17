<script lang="ts" setup>
const props = defineProps<{
  options: { value: any; label: string }[];
}>();
</script>

<template>
  <el-select>
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<style lang="scss"></style>
