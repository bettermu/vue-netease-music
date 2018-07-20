import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/Index'
// import Recommend from 'cp/recommend/recommend'
// import Singer from 'cp/singer/singer'
// import Rank from 'cp/rank/rank'
// import Search from 'cp/search/search'
// import User from 'cp/user/user'
// import MusicList from 'cp/music-list/music-list'
// import SingerDetail from 'cp/singer-detail/singer-detail'
// import RankDetail from 'cp/rank-detail/rank-detail'

Vue.use(Router)

const Recommend = (resolve) => {
  import('cp/recommend/recommend').then((module) => {
    resolve(module)
  })
}

const Singer = (resolve) => {
  import('cp/singer/singer').then((module) => {
    resolve(module)
  })
}

const Rank = (resolve) => {
  import('cp/rank/rank').then((module) => {
    resolve(module)
  })
}

const Search = (resolve) => {
  import('cp/search/search').then((module) => {
    resolve(module)
  })
}

const SingerDetail = (resolve) => {
  import('cp/singer-detail/singer-detail').then((module) => {
    resolve(module)
  })
}

const MusicList = (resolve) => {
  import('cp/music-list/music-list').then((module) => {
    resolve(module)
  })
}

const RankDetail = (resolve) => {
  import('cp/rank-detail/rank-detail').then((module) => {
    resolve(module)
  })
}

const User = (resolve) => {
  import('cp/user/user').then((module) => {
    resolve(module)
  })
}

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
