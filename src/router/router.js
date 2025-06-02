import { createRouter, createWebHistory } from 'vue-router'
import home from '../components/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: home
  },
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
