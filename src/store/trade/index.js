import { reqGetUserAddress, reqGetTradeListInfo } from '@/api'

const state = {
  userAddress: [],
  tradeListInfo: {}
}
const getters = {}
const actions = {
  // 获取用户地址信息
  async getUserAddress({ commit }) {
    const result = await reqGetUserAddress()
    if (result.code === 200) {
      commit('GETUSERADDRESS', result.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  // 获取订单交易列表
  async getTradeListInfo({ commit }) {
    const result = await reqGetTradeListInfo()
    if (result.code === 200) {
      commit('GETTRADELISTINFO', result.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  }
}
const mutations = {
  // 获取用户地址信息
  GETUSERADDRESS(state, data) {
    state.userAddress = data
  },
  // 获取订单交易列表
  GETTRADELISTINFO(state, data) {
    state.tradeListInfo = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
