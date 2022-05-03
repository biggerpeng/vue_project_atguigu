import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

import Home from '../pages/Home'
import Search from '../pages/Search'

export default new VueRouter({
  routes: [
    {
      path: '/home',
      // component: '../pages/Home.vue' //必须通过import引入
      component: Home
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
