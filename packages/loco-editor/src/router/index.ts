import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import main from '../views/main/index.vue'
import test from '../views/test/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'editor-main',
    component: main
  },
  {
    path: '/test',
    name: 'editor-test',
    component: test
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
