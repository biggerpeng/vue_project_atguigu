import Vue from 'vue'
import router from './router'
import App from './App.vue'

// 引入三级联动组件TypeNav并注册为全局组件
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name, TypeNav)

// 全局注册轮播图组件
import Carousel from '@/components/Carousel'
Vue.component(Carousel.name, Carousel)

// 全局注册分页器
import Pagination from '@/components/Pagination'
Vue.component(Pagination.name, Pagination)

// 执行mock
import '@/mock/mockServe'

// 导入store
import store from '@/store'

// 引入swiper样式
import 'swiper/css/swiper.css'

// 引入api
import * as API from '@/api'

// 按需引入elementUI
import { Button, MessageBox } from 'element-ui'

Vue.component(Button.name, Button)
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert

Vue.config.productionTip = false

new Vue({
  router, //没有Vue.use(VueRouter)，vue会忽略这个配置项，因此要在路由配置文件使用路由插件
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  render: h => h(App)
}).$mount('#app')
