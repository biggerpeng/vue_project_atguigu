import requests from './request'

// 创建并导出分类请求函数
export const getBaseCategoryList = () =>
  requests({ url: '/product/getBaseCategoryList', methods: 'get' })
