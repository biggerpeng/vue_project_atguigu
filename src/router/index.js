import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

// 重写VueRouter原型push方法
let originPush = VueRouter.prototype.push
VueRouter.prototype.push = function (option, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, option, resolve, reject)
  } else {
    //注意this指向问题，正常使用该方法，this应当指向VueRouter的实例$router
    originPush.call(
      this,
      option,
      () => {},
      () => {}
    )
  }
}

// 重写VueRouter原型replace方法
let originReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function (option, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, option, resolve, reject)
  } else {
    //注意this指向问题，正常使用该方法，this应当指向VueRouter的实例$router
    originReplace.call(
      this,
      option,
      () => {},
      () => {}
    )
  }
}

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

export default new VueRouter({
  routes: [
    {
      path: '/home',
      // component: '../pages/Home.vue' //必须通过import引入
      component: Home,
      meta: {
        show: true
      }
    },
    {
      name: 'search',
      path: '/search/:keyword?',
      component: Search,
      meta: {
        show: true
      }
      // props传参三种写法
      // props:true
      // props: { a: 1, b: 2 }
      /* props($route) {
        return {
          a: $route.params.keyword,
          b: $route.query.k
        }
      } */
    },
    {
      path: '/login',
      component: Login,
      meta: {
        show: false
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        show: false
      }
    },
    // 重定向
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
