import { app } from './app'
import './registerServiceWorker'
import router from './router'
import store from './store'
import requiredElements from './element-plus'
import 'modern-normalize'

// 按需注册element-plus组件
requiredElements.forEach(element => {
  app.component(element.name, element)
})

app.use(store).use(router).mount('#app')
