// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import store from './store/index'
// import 'lib-flexible'
Vue.use(MintUI)


require('!style-loader!css-loader!less-loader!./assets/style/main.less');
require('!style-loader!css-loader!less-loader!./assets/style/animate.min.css');

Vue.config.productionTip = false



new Vue({
  el: '#app',
  router,
  store,
  beforeCreate(){
    // var winW = document.documentElement.clientWidth || document.body.clientWidth;
    // document.documentElement.style.fontSize = winW /3.75 + "px";
    // window.onresize = function(){
    //     document.documentElement.style.fontSize=(document.documentElement.clientWidth||document.body.clientWidth)/3.75+"px";
    // }
  },
  template: '<App/>',
  components: { App }
})