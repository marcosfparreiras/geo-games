import { createRouter, createWebHistory } from 'vue-router'
// import FlagGuessGameView from '@/views/FlagGuessGameView.vue'
import GuessWithProgressiveHintsView from '@/views/GuessWithProgressiveHintsView.vue'
import HomePageView from '@/views/HomePageView.vue'
import MatchTheFlagView from '@/views/MatchTheFlagView.vue'
import MatchTheFlagOverviewView from '@/views/MatchTheFlagOverviewView.vue'

import GameSelection from '@/components/GameSelection.vue'

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
      name: 'HomePage',
      component: HomePageView,
    },
    {
      path: '/new-home',
      name: 'NewHomePage',
      component: HomePageView,
    },
    {
      path: '/progressive-hints',
      name: 'GuessWithProgressiveHints',
      component: GuessWithProgressiveHintsView,
    },
    // TODO: change this route to point to an overview of the the Match The Flag games
    {
      path: '/match-flag',
      name: 'MatchTheFlagOverview',
      component: MatchTheFlagOverviewView,
    },
    // See docs fos passing route param as props to component:
    // - https://router.vuejs.org/guide/essentials/dynamic-matching
    // - https://router.vuejs.org/guide/essentials/passing-props
    {
      path: '/match-flag/:subGameSlug',
      name: 'MatchTheFlag',
      component: MatchTheFlagView,
      props: true,
    },
    {
      path: '/playground',
      name: 'Playground',
      component: GameSelection,
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
