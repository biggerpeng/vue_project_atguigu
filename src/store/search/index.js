import { getSearchInfo } from '@/api'
const state = {
  searchList: {}
}
const getters = {
  goodsList(state) {
    return state.searchList.goodsList || []
  },
  attrsList(state) {
    return state.searchList.attrsList || []
  },
  trademarkList(state) {
    return state.searchList.trademarkList || []
  }
}
const actions = {
  async getSearchInfo({ commit }, params = {}) {
    const result = await getSearchInfo(params)
    commit('GETSEARCHINFO', result.data)
  }
}
const mutations = {
  GETSEARCHINFO(state, value) {
    state.searchList = value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
