<template>
  <div class="demo-card">demo-card</div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator'

@Options({
  name: 'demo-card'
})
export default class BaseContainer extends Vue {
}
</script>

<style lang="scss" scoped>
.demo-card {
  height: 120px;
  background-color: #eee;
  color: #aaa;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
