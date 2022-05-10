import { getDetail } from '@/api/index'

const state = {
  goodInfo: {}
}
const getters = {
  categoryView(state) {
    //这里的state是局部state
    return state.goodInfo.categoryView || {}
  },
  price(state) {
    return state.goodInfo.price || 0
  },
  skuInfo(state) {
    return state.goodInfo.skuInfo || {}
  },
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || []
  }
}
const actions = {
  async getDetailData({ commit }, skuId) {
    const result = await getDetail(skuId)
    if (result.code === 200) {
      commit('GETDETAILDATA', result.data)
    } else {
      return new Error('获取详情信息失败')
    }
  }
}
const mutations = {
  GETDETAILDATA(state, data) {
    state.goodInfo = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
