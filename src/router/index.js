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

import routes from './routes'

export default new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { y: 0 }
  }
})
