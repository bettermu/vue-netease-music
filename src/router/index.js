import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/Index'
import Recommend from 'cp/recommend/recommend'
import Singer from 'cp/singer/singer'
import Rank from 'cp/rank/rank'
import Search from 'cp/search/search'
import User from 'cp/user/user'
import MusicList from 'cp/music-list/music-list'
import SingerDetail from 'cp/singer-detail/singer-detail'
import RankDetail from 'cp/rank-detail/rank-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 默认跳转到 recommend
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: MusicList
        }
      ]
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: RankDetail
        }
      ]
    },
    {
      path: '/search',
      component: Search,
      children: [
        {
          path: 'singer/:id',
          component: SingerDetail
        },
        {
          path: 'list/:id',
          component: MusicList
        }
      ]
    },
    {
      path: '/user',
      component: User
    }
  ]
})
