import { ref, createApp, createVNode } from 'vue'
import Toast from './toast.vue'

type ToastOptions = {
  duration?: number
}

let instance:any = null

function createToastWrapper () {
  const div = document.createElement('div')
  div.setAttribute('id', 'toast-wrapper')
  document.body.appendChild(div)
}

const toast = (message: string, options:ToastOptions = {}):void => {
  const { duration = 2000 } = options
  if (!instance) {
    createToastWrapper()
    instance = createApp(Toast, {
      message
    })
    instance.mount('#toast-wrapper')
    console.log('createVNode', createVNode)
    // setTimeout(() => {
    //   toastOptions.visible = false
    // }, duration)
  }
}

export default toast
