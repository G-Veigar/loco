<template>
  <transition
    name="custom-classes-transition"
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
    <div class="loco-toast" v-if="visible">{{message}}</div>
  </transition>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator'
import 'animate.css'

@Options({
  name: 'loco-popup'
})
export default class locoPopup extends Vue {
  @Prop({ type: String, required: true })
  message!: string;

  // visible = true

  @Prop({ type: Boolean, required: true })
  visible!: boolean;
}
</script>

<style lang="scss" scoped>
.loco-toast {
  position: fixed;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: #FFF;
  min-width: 80px;
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  border-radius: 4px;
  animation-duration: 0.2s;
  padding: 0 10px;
}
</style>
