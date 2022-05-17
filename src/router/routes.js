export default [
  {
    path: '/home',
    // component: '../pages/Home.vue' //必须通过import引入
    component: () => import('@/pages/Home'),
    meta: {
      show: true
    }
  },
  {
    name: 'search',
    path: '/search/:keyword?',
    component: () => import('@/pages/Search'), //路由懒加载
    meta: {
      show: true
    }
  },
  {
    path: '/login',
    component: () => import('@/pages/Login'),
    meta: {
      show: false
    }
  },
  {
    path: '/register',
    component: () => import('@/pages/Register'),
    meta: {
      show: false //决定footer显示
    }
  },
  {
    path: '/detail/:skuId',
    component: () => import('@/pages/Detail'),
    meta: {
      show: true
    }
  },
  {
    path: '/addcartsuccess',
    name: 'addcartsuccess',
    component: () => import('@/pages/AddCartSuccess'),
    meta: {
      show: true
    }
  },
  {
    path: '/shopcart',
    component: () => import('@/pages/ShopCart'),
    meta: {
      show: true
    }
  },
  {
    path: '/trade',
    component: () => import('@/pages/Trade'),
    meta: {
      show: true
    },
    beforeEnter(to, from, next) {
      if (from.path === '/shopcart') {
        next()
      } else {
        next(false)
      }
    }
  },
  {
    path: '/pay',
    component: () => import('@/pages/Pay'),
    meta: {
      show: true
    },
    beforeEnter(to, from, next) {
      if (from.path === '/trade') {
        next()
      } else {
        next(false)
      }
    }
  },
  {
    path: '/paysuccess',
    component: () => import('@/pages/PaySuccess'),
    meta: {
      show: true
    }
  },
  {
    path: '/center',
    component: () => import('@/pages/Center'),
    meta: {
      show: true
    },
    children: [
      {
        path: 'myorder',
        component: () => import('@/pages/Center/MyOrder')
      },
      {
        path: 'grouporder',
        component: () => import('@/pages/Center/GroupOrder')
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
