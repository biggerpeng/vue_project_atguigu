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
