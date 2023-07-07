import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PlatsView from '@/views/PlatsView.vue'
import DessertView from '@/views/DessertView.vue'
import CartView from '@/views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/plats',
      name: 'plats',
      component: PlatsView
    },
    {
      path: '/dessert',
      name: 'dessert',
      component: DessertView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    }
  ]
})

export default router
