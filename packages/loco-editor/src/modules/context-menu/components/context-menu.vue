<script lang="ts" setup>
import { computed } from "vue";
import contextMenuItem from "./context-menu-item.vue";
import { useEditorStore } from "@/stores/editor";

const editorStore = useEditorStore();

const contextMenuStyle = computed(() => {
  const { left, top } = editorStore.contextMenu.position;
  return {
    left: left + "px",
    top: top + "px",
  };
});

const childMenusStyle = computed(() => {
  const contextMenuTop = editorStore.contextMenu.position.top;
  const { top } = editorStore.contextMenu.childMenus;
  const offsetTop = top - contextMenuTop;
  return {
    top: offsetTop + "px !important",
  };
});

function showChildMenu(childMenus: any) {
  editorStore.setContextMenu({
    key: "childMenus",
    value: childMenus,
  });
}

function close() {
  editorStore.setContextMenu({
    key: "show",
    value: false,
  });
}
</script>

<template>
  <div
    class="context-menu"
    v-show="editorStore.contextMenu.show"
    tabindex="1"
    ref="contextMenu"
    @blur="close"
    :style="contextMenuStyle"
  >
    <!-- 主菜单 -->
    <div class="menu-panel main-menu">
      <div
        class="menu-group"
        v-for="item in editorStore.contextMenu.menuList"
        :key="item.id"
      >
        <context-menu-item
          v-if="!item.isGroup"
          :menu="item"
          @child="showChildMenu"
        ></context-menu-item>
        <context-menu-item
          v-else
          v-for="menuItem in item.items"
          :key="menuItem.id"
          :menu="menuItem"
          @child="showChildMenu"
        ></context-menu-item>
      </div>
    </div>
    <!-- 子菜单 -->
    <div
      class="menu-panel child-menu menu-left"
      v-show="editorStore.contextMenu.childMenus.childs"
      :style="childMenusStyle"
    >
      <context-menu-item
        v-for="item in editorStore.contextMenu.childMenus.childs"
        :key="item.id"
        :menu="item"
      ></context-menu-item>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/style/var.scss";
$mainMenuWidth: 200px;

.context-menu {
  outline: none;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  cursor: default;

  .menu-panel {
    color: $mainFontColor;
    border-radius: 3px;
    border: 1px solid #212121;
    background-color: $leftBarDetailBgColor;
    box-shadow: 0px 1px 15px rgb(0 0 0 / 20%);
  }

  .main-menu {
    width: $mainMenuWidth;
  }

  .child-menu {
    padding: 3px 0;
    min-width: 120px;
    max-width: 220px;
    position: absolute;

    &.menu-left {
      right: $mainMenuWidth - 1px;
    }

    &.menu-right {
      left: $mainMenuWidth - 1px;
    }
  }

  .menu-group {
    &:not(:last-child) {
      border-bottom: 1px solid #212121;
    }
    padding: 3px 0;
  }

  .menu-item {
    height: 26px;
    line-height: 26px;
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    &:hover {
      background-color: $optionHoveredBgColor;
    }
  }
}
</style>
