import { reqGetShopCart } from '@/api'
const state = {
  cartInfoList: []
}
const getters = {}
const actions = {
  async getShopCart({ commit }) {
    const result = await reqGetShopCart()
    if (result.code === 200) {
      commit('GETSHOPCART', result.data)
    } else {
      throw new Error('fail')
    }
  }
}
const mutations = {
  GETSHOPCART(state, data) {
    state.cartInfoList = data[0].cartInfoList
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
