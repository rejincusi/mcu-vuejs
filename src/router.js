import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Timeline from './views/Timeline.vue'
import Game from './views/Game.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: Timeline
    },
    {
      path: '/games',
      name: 'games',
      component: Game
    },
  ]
})
