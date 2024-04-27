import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import CommentsView from '@/views/CommentsView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/:pathMatch(.*)*', redirect: (to) => `${to.path}/` },
  { path: '/commentaires', component: CommentsView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router