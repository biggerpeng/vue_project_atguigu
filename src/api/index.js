import requests from './request'
import mockRequests from './mockAjax'

// 创建并导出分类请求函数
export const getBaseCategoryList = () =>
  requests({ url: '/product/getBaseCategoryList', methods: 'get' })

// mock banner模拟请求
/* export const getBanner = () => {
  mockRequests.get('/banner')
} */

// 获取banner图
export const getBanner = () => mockRequests.get('/banner')

// 获取floor数据
export const getFloor = () => mockRequests.get('/floor')
