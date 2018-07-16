import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Recommend from '@/components/recommend/recommend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    }
  ]
})
