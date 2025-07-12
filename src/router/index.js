import { createRouter, createWebHistory } from 'vue-router'
import FlagGuessGameView from '@/views/FlagGuessGameView.vue'
import GuessWithProgressiveHintsView from '@/views/GuessWithProgressiveHintsView.vue'
import HomePageView from '@/views/HomePageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: FlagGuessGameView,
    // },
    {
      path: '/',
      name: 'home',
      component: GuessWithProgressiveHintsView,
    },
    {
      path: '/new-home',
      name: 'HomePageView',
      component: HomePageView,
    },
    {
      path: '/progressive-hints',
      name: 'GuessWithProgressiveHints',
      component: GuessWithProgressiveHintsView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
