<template>
  <div class="loco-tab">
    loco-tab {{visible}}
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    visible: boolean;
  }>(),
  {
    visible: false
  }
)
</script>

<style lang="sass" scoped>

</style>
