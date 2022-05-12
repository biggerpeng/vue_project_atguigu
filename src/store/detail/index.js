import { getDetail, reqAddOrChangeShopCart } from '@/api/index'

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
  },
  // 加入购物车或更改商品数量
  async addOrChangeShopCart({ commit }, { skuId, skuNum }) {
    const result = await reqAddOrChangeShopCart(skuId, skuNum)
    if (result.code === 200) {
      return 'ok'
      // return Promise.resolve('ok')  //等价于上一行代码，因为上面的返回值会被隐式地包装在一个Promise中
    } else {
      // throw new Error('fail') //要么会通过一个从async函数中抛出的（或其中没有被捕获到的）异常被拒绝。因此与下行代码等价
      return Promise.reject(new Error('fail'))
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
