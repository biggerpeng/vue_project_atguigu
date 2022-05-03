import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router //没有Vue.use(VueRouter)，vue会忽略这个配置项，因此要在路由配置文件使用路由插件
}).$mount('#app')
