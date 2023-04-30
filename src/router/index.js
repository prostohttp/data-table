import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: ()=> import("@/views/Home.vue"),
      name: "home"
    },
    {
      path: "/data-table",
      component: ()=> import("@/views/DataTable.vue"),
      name: "data-table"
    }
  ]
})

export default router
