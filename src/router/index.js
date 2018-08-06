import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Goods from '@/pages/goods/goods'
import Activity from '@/pages/activity/activity'
import News from '@/pages/news/news'
import Service from '@/pages/service/service'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      meta: {index: 0},
      component: Home
    },
    {
      path: '/home',
      meta: {index: 0},
      component: Home
    },
    {
      path: '/goods',
      meta: {index: 1},
      component: Goods
    },
    {
      path: '/news',
      meta: {index: 2},
      component: News
    },
    {
      path: '/activity',
      meta: {index: 3},
      component: Activity
    },
    {
      path: '/service',
      meta: {index: 4},
      component: Service
    }
  ]
})
