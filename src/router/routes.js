import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
export default [
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
      show: false //决定footer显示
    }
  },
  {
    path: '/detail/:skuId',
    component: Detail
  },
  {
    path: '/addcartsuccess',
    name: 'addcartsuccess',
    component: AddCartSuccess
  },
  // 重定向
  {
    path: '*',
    redirect: '/home'
  }
]
