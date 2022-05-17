import VueRouter from 'vue-router'
import Vue from 'vue'
import store from '@/store'

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

import routes from './routes'

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { y: 0 }
  }
})

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  /*   try {
    // 获取用户信息
    debugger
    await store.dispatch('getUserInfo')
    // 成功获取用户信息，即代表成功登录，判断是否跳转登录页
    if (to.path === '/login') {
      next('/home')
    } else {
      next()
    }
  } catch (error) {
    // token失效，重新登录
    next('/login')
  }//死循环
 */
  /* if (to.path === '/login') {
    if (store.state.user.userInfo.name) {
      next('/home')
    } else {
      next()
    }
  } else {
    try {
      await store.dispatch('getUserInfo')
      next()
    } catch (error) {
      next('/login')
    } //无法游客使用，被强制登录，应当先判断登录，未登录直接放行
  } */
  if (store.state.user.token) {
    // 已登录
    if (to.path === '/login') {
      next('/home')
    } else {
      if (!store.state.user.userInfo.name) {
        // 如果没有用户信息
        try {
          await store.dispatch('getUserInfo')
          next()
        } catch (error) {
          store.dispatch('logOut')
          next('/login')
        }
      } else {
        next()
      }
    }
  } else {
    // 未登录
    if (to.path.indexOf('/center') !== -1 || to.path.indexOf('/pay') !== -1 || to.path.indexOf('/trade') !== -1) {
      next('/login?redirect=' + to.path) //通过query参数保存未登录时想跳转的路径，登陆成功后再跳转到该路径，而通过变量保存路径则会被覆盖
    } else {
      next()
    }
  }
  // 关键点是判断是否登录要判断token，不要判断通过token获取的用户信息，因为刷新页面仓库中的数据需要重新获取，会带来许多问题
  // 需判断情况：1、用户登录了不能跳登录页，2、没登陆则可以跳，3、每次路由跳转都要获取用户信息，若获取失败，则token失效
})

export default router
