import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//导入相关页面
import index from '@/pages/index' 





export default new Router({
  routes: [
    { path: '/', component: index }
  ]
})
