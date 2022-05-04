// 引入分类网络请求api
import { getBaseCategoryList } from '@/api'

const state = {
  categoryList: []
}
const getters = {}
const actions = {
  async categoryList(context) {
    const result = await getBaseCategoryList()
    if (result.code === 200) {
      context.commit('CATEGORYLIST', result.data)
    } else {
      console.log('获取分类失败')
    }
  }
}
const mutations = {
  CATEGORYLIST(state, value) {
    state.categoryList = value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
