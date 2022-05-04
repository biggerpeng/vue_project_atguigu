import Vue from 'vue'
import router from './router'
import App from './App.vue'

// 引入三级联动组件TypeNav并注册为全局组件
import TypeNav from './pages/Home/TypeNav'
Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false

new Vue({
  router, //没有Vue.use(VueRouter)，vue会忽略这个配置项，因此要在路由配置文件使用路由插件
  render: h => h(App)
}).$mount('#app')
