<template>
  <div class="unit-select" v-show="selectShow">
    <div
      class="unit-option"
      v-for="item in unitOptions"
      :key="item">{{item}}</div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator'

export default class UnitSelect extends Vue {
}
</script>

<style>

</style>
