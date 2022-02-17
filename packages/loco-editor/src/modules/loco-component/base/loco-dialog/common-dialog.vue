<script lang="ts" setup>
import LocoDialog from './view.vue'

const props = withDefaults(
  defineProps<{
    title: string;
    message: string;
    visiable: boolean;
    showCancelBtn: boolean;
    cancelBtnText: string;
    confirmBtnText: string;
  }>(),
  {
    visiable: true,
    showCancel: false,
    cancelBtnText: '取消',
    confirmBtnText: '确认'
  }
);

const emit = defineEmits<{
  (event: "cancel"): void;
  (event: "confirm"): void;
}>();

function cancel() {
  emit('cancel')
}

function confirm() {
  emit('confirm')
}
</script>

<template>
  <LocoDialog :visiable="visiable">
    <div class="common-dialog-wrapper">
      <div class="dialog-title" v-if="title">{{title}}</div>
      <div class="dialog-msg" v-if="message">{{message}}</div>
      <div class="dialog-btn-wrappr">
        <div
          v-if="showCancelBtn"
          class="dialog-btn dialog-btn-cancel"
          @click="cancel">{{cancelBtnText}}</div>
        <div
          class="dialog-btn dialog-btn-confirm"
          @click="confirm">{{confirmBtnText}}</div>
      </div>
    </div>
  </LocoDialog>
</template>

<style lang="scss" scoped>
// @import "./style.scss";
.common-dialog-wrapper {
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  .dialog-title {
    flex: none;
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    text-align: center;
  }
  .dialog-msg {
    flex: auto;
    padding: 4px 0 16px;
    font-size: 14px;
    color: #333;
  }

  .dialog-btn-wrappr {
    flex: none;
    display: flex;
    border-top: 1px solid #eee;
    .dialog-btn {
      flex: 1;
      font-size: 18px;
      font-weight: bold;
      height: 40px;
      line-height: 40px;

      &.dialog-btn-cancel {
        &+.dialog-btn-confirm {
          border-left: 1px solid #eee;
        }
      }
      &.dialog-btn-confirm {
        color: #333;
      }
    }
  }
}
</style>
