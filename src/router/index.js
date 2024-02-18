import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: '烘焙工坊'
      }
    },
    {
      path: '/product',
      name: 'product',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/ProductView.vue'),
      meta: {
        title: '产品列表'
      }
    },
    {
      path: '/news',
      name: 'news',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/NewsView.vue'),
      meta: {
        title: '最新消息'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `烘焙工坊 | ${to.meta.title}`
  next()
})

export default router
