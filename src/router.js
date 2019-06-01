import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Main = resolve => require(['./views/Main'], resolve)
export default new Router({
  routes: [
    {
      path: '/',  
      name: 'main',
      component: Main,
      redirect: 'home',
      children: [
        { path: '/home', component: () => import('./views/home'), name: '我的首页'  },
        { path: '/homedetail', component: () => import('./views/home/homedetail'), name: 'homedetail'  },
        { path: '/me', component: () => import('./views/me'), name: '生活札记'  },
        { path: '/medetail', component: () => import('./views/me/medetail'), name: '生活札记'  },
        { path: '/read', component: () => import('./views/read'), name: '图书阅读'  },
        { path: '/readdetail', component: () => import('./views/read/readdetail'), name: 'readdetail'  },
        { path: '/work', component: () => import('./views/work'), name: '创业漫谈'  },
        { path: '/workdetail', component: () => import('./views/work/workdetail'), name: '生活札记'  },
        { path: '/share', component: () => import('./views/share'), name: '影视分享'  },
        { path: '/sharedetail', component: () => import('./views/share/sharedetail'), name: '生活札记'  }
  
      ]
    },
    {
      path: '/uiReset', component: () => import('./views/uiReset/medetail'), name: 'resetPage'
    }
  ]
})

