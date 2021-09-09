import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import requiredElements from './element-plus'
import 'modern-normalize'

const app = createApp(App)

// 注册element-plus组件
requiredElements.forEach(element => {
  app.component(element.name, element)
})

app.use(store).use(router).mount('#app')
