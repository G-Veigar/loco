import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import main from '../views/main.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'editor-main',
    component: main
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
