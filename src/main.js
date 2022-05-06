import Vue from 'vue'
import router from './router'
import App from './App.vue'

// 引入三级联动组件TypeNav并注册为全局组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name, TypeNav)

// 执行mock
import '@/mock/mockServe'

// 导入store
import store from '@/store'

// 引入swiper样式
import 'swiper/css/swiper.css'

Vue.config.productionTip = false

new Vue({
  router, //没有Vue.use(VueRouter)，vue会忽略这个配置项，因此要在路由配置文件使用路由插件
  store,
  render: h => h(App)
}).$mount('#app')
