import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/MyOrder'
import GroupOrder from '@/pages/Center/GroupOrder'
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
    component: Detail,
    meta: {
      show: true
    }
  },
  {
    path: '/addcartsuccess',
    name: 'addcartsuccess',
    component: AddCartSuccess,
    meta: {
      show: true
    }
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta: {
      show: true
    }
  },
  {
    path: '/trade',
    component: Trade,
    meta: {
      show: true
    }
  },
  {
    path: '/pay',
    component: Pay,
    meta: {
      show: true
    }
  },
  {
    path: '/paysuccess',
    component: PaySuccess,
    meta: {
      show: true
    }
  },
  {
    path: '/center',
    component: Center,
    meta: {
      show: true
    },
    children: [
      {
        path: 'myorder',
        component: MyOrder
      },
      {
        path: 'grouporder',
        component: GroupOrder
      },
      // 子路由重定向
      {
        path: '/center',
        redirect: '/center/myorder'
      }
    ]
  },
  // 重定向
  {
    path: '*',
    redirect: '/home'
  }
]
