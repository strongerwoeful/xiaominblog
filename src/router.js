import Vue from 'vue'
import Router from 'vue-router'

const Demo = resolve => require(['./template.vue'], resolve);
const Main = resolve => require(['./views/Main.vue'], resolve);
const Home = resolve => require(['./views/page/Home.vue'], resolve);
const Read = resolve => require(['./views/page/Read.vue'], resolve);
const Work = resolve => require(['./views/page/Work.vue'], resolve);
const Share = resolve => require(['./views/page/Share.vue'], resolve);
const Me = resolve => require(['./views/page/Me.vue'], resolve);
const Medetail = resolve => require(['./views/page/Medetail.vue'], resolve);
Vue.use(Router)
 
export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {path: '/Demo', component: Demo, name: '测试页' },
    {
      path: '/',  
      component: Main,
      redirect: 'Home',
      name: '',
      children: [
        { path: '/Home', component: Home, name: '我的首页'  },
        { path: '/Me', component: Me, name: '生活札记'  },
        { path: '/Read', component: Read, name: '图书阅读'  },
        { path: '/Work', component: Work, name: '创业漫谈'  },
        { path: '/Share', component: Share, name: '影视分享'  },
        { path: '/Medetail', component: Medetail, name: 'Me.detail'  }
      ]
    },
  ]
})

