import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
Vue.use(Router)

Router.prototype.go = function () {
  this.isBack = true
  window.history.go(-1)
}


//导入相关页面
const index = () => import('@/pages/index/index')
const home = () => import('@/pages/index/home/home')
const video = () => import('@/pages/index/video/video')
const collect = () => import('@/pages/index/collect/collect')
const users = () => import('@/pages/index/users/users')

const channel = () => import('@/pages/index/home/children/channel')
const search = () => import('@/pages/search/search')



export default new Router({
  mode: 'history',
  path: __dirname,
  routes: [
    {
      path: '',
      redirect: '/index/home',
      component: App,
      children: [
        {
          name: 'index',
          path: '/index',
          redirect: '/index/home',
          component: index,
          children: [
            {
              name: 'home',
              path: 'home',
              component: home,
              children: [
                {
                  name: 'channel',
                  path: 'channel',
                  component: channel
                },
              ]
            },
            {
              name: 'video',
              path: 'video',
              component: video,
            },
            {
              name: 'collect',
              path: 'collect',
              component: collect
            },
            {
              name: 'users',
              path: 'users',
              component: users
            },

          ]
        },
        {
          path: '/search',
          component: search
        },
      ]
    },





  ]
})
