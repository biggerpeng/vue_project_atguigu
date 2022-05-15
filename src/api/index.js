import requests from './request'
import mockRequests from './mockAjax'

// 创建并导出分类请求函数
export const getBaseCategoryList = () => requests({ url: '/product/getBaseCategoryList', methods: 'get' })

// mock banner模拟请求
/* export const getBanner = () => {
  mockRequests.get('/banner')
} */

// 获取banner图
export const getBanner = () => mockRequests.get('/banner')

// 获取floor数据
export const getFloor = () => mockRequests.get('/floor')

// 获取搜索列表
export const getSearchInfo = params =>
  requests({
    url: '/list',
    method: 'post',
    data: params
  })

// 获取详情信息
export const getDetail = skuId =>
  requests({
    url: `/item/${skuId}`,
    method: 'get'
  })

// 添加到购物车(对已有物品进行数量改动)
export const reqAddOrChangeShopCart = (skuId, skuNum) =>
  requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: 'post'
  })

// 获取购物车列表
export const reqGetShopCart = () =>
  requests({
    url: '/cart/cartList',
    method: 'get'
  })

// 删除购物车商品
export const reqDeleteShopCart = skuId =>
  requests({
    url: `/cart/deleteCart/${skuId}`,
    method: 'delete'
  })

// 更改购物车列表选中状态
export const reqUpdateShopCart = (skuId, isChecked) =>
  requests({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: 'get'
  })

// 获取注册验证码
export const reqGetRegisterCode = phone =>
  requests({
    url: `/user/passport/sendCode/${phone}`,
    method: 'get'
  })

// 注册用户
export const reqUserRegister = data =>
  requests({
    url: `/user/passport/register`,
    method: 'post',
    data
  })

// 用户登录
export const reqLogin = data =>
  requests({
    url: '/user/passport/login',
    method: 'post',
    data
  })

// 获取用户信息
export const reqGetUserInfo = () =>
  requests({
    url: '/user/passport/auth/getUserInfo',
    method: 'get'
  })

// 退出登录
export const reqLogOut = () =>
  requests({
    url: '/user/passport/logout',
    method: 'get'
  })
