<template>
  <div class="material-lib">
    <div class="input-wrapper">
      <el-input
        placeholder="搜索组件"
        suffix-icon="el-icon-search"
        v-model="searchVal" />
    </div>
    <div class="component-wrapper">
      <el-collapse v-model="activeNames">
        <el-collapse-item
          v-for="item in materialList"
          :key="item.title"
          :title="item.title"
          :name="item.title">
          <div class="item-wrapper">
            <component-item
              v-for="component in item.components"
              :material="component"
              class="mt-item"
              :dragImg="dragImgMap[component.name]"
              :key="component.name"></component-item>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script lang="ts">
import componentItem from './component-item.vue'
import event from '@/utils/event'
import { materialList } from '@/core/material'
import { Options, Vue } from 'vue-class-component'

Options({
  components: { componentItem }
})
export class leftPanel extends Vue {
  searchVal = ''
  materialList = []
  activeNames = materialList.map((item: { title: string }) => item.title)
  dragImgMap = {}

  createDragImgs (): void {
    let dragList: any[] = []
    materialList.forEach((item: { components: any }) => {
      dragList = [...dragList, ...item.components]
    })
    event.on('drag-img-created', (res: any) => {
      console.log('drag-img-created', res)
      this.dragImgMap = res
    })
    this.$nextTick(() => {
      event.emit('create-drag-img', dragList)
    })
  }

  mounted (): void{
    // this.createDragImgs()
  }
}
</script>

<style lang="scss">
.material-lib {
  padding: 0;
  .input-wrapper {
    padding: 8px;
  }
  .el-collapse-item__header {
    height: 30px;
    padding-left: 10px;
    color: #555;
    font-size: 14px;
  }
  .el-collapse-item__content {
    padding: 0;
    overflow: visible;
  }
  .item-wrapper {
    padding: 8px 4px;
    background-color: #F4F4F4;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 14px;
  }
}
</style>
