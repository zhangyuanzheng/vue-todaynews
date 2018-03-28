import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
Vue.use(Router)

Router.prototype.go = function() {
  this.isBack = true
  window.history.go(-1)
}

//导入相关页面
const home = () => import('@/pages/index/home/home')
const channel = () => import('@/pages/index/home/children/channel')




export default new Router({
  mode: 'history',
  path: __dirname,
  routes: [
    {
      path: '',
      redirect: '/index/home'
    },
    {
      name: 'home',
      path: '/index/home',
      component: home,
      children: [
        {
          name: 'channel',
          path: 'channel',
          component: channel
        },
      ]
    },
    // {
    //   path: '/channel',
    //   component:channel
    // },

  ]
})
