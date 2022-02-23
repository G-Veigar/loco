import { createRouter, createWebHistory } from "vue-router";
const main = () => import("../views/main/index.vue");
const renderApp = () => import("../views/render-app/index.vue");
const preview = () => import("../views/preview/index.vue");
const testPage = () => import("../views/test-page/index.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "editor-main",
      component: main,
    },
    {
      path: "/render-app",
      name: "render-app",
      component: renderApp,
    },
    {
      path: "/preview",
      name: "preview",
      component: preview,
    },
    {
      path: "/test",
      name: "testPage",
      component: testPage,
    },
  ],
});

export default router;

// import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// const main = () => import('../views/main/index.vue')
// const renderApp = () => import('../views/render-app/index.vue')
// const test = () => import('../views/test/index.vue')

// const routes: Array<RouteRecordRaw> = [
//   {
//     path: '/',
//     name: 'editor-main',
//     component: main
//   },
//   {
//     path: '/render-app',
//     name: 'render-app',
//     component: renderApp
//   },
//   {
//     path: '/test',
//     name: 'editor-test',
//     component: test
//   }
// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

// export default router
