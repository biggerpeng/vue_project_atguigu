// 引入分类网络请求api
import { getBaseCategoryList, getBanner } from '@/api'

const state = {
  categoryList: [],
  bannerList: [] //一定要先初始化state，否则后面加入没有响应式，打开的页面上相应的state将是undefine
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
  },
  async getBanner(context) {
    const result = await getBanner()
    console.log(result)
    if (result.code === 200) {
      // this.$store.commit('GETBANNER', result.data) 这不是组件实例，使用不了this.$store.commit
      context.commit('GETBANNER', result.data)
    } else {
      console.log('获取轮播图失败')
    }
  }
}
const mutations = {
  CATEGORYLIST(state, value) {
    state.categoryList = value
  },
  GETBANNER(state, value) {
    state.bannerList = value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
