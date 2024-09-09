import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Jobs from '@/views/Jobs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/Projects.vue')
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: Jobs
    },
  ]
})

export default router
