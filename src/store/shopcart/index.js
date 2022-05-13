import { reqGetShopCart, reqDeleteShopCart, reqUpdateShopCart } from '@/api'
const state = {
  cartInfoList: []
}
const getters = {}
const actions = {
  // 获取购物车列表
  async getShopCart({ commit }) {
    const result = await reqGetShopCart()
    if (result.code === 200) {
      commit('GETSHOPCART', result.data)
    } else {
      throw new Error('fail')
    }
  },
  // 删除购物车商品
  async deleteShopCart({ commit }, skuId) {
    const result = await reqDeleteShopCart(skuId)
    if (result.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  // 更改购物车选中状态
  async updateShopCart({}, { skuId, isChecked }) {
    const result = await reqUpdateShopCart(skuId, isChecked)
    if (result.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  // 删除选中商品
  deleteAllChecked({ state, dispatch }) {
    let promiseAll = []
    state.cartInfoList.forEach(item => {
      item.isChecked ? promiseAll.push(dispatch('deleteShopCart', item.skuId)) : undefined //不要忘了dispatch的actions名字，提示vuex错误，就看看vuex的方法有没有用错
    })
    return Promise.all(promiseAll)
  },
  // 更改全选状态
  changeCheckAll({ state, dispatch }, isChecked) {
    let promiseAll = []
    state.cartInfoList.forEach(item => {
      const pm = dispatch('updateShopCart', { skuId: item.skuId, isChecked })
      promiseAll.push(pm)
    })
    return Promise.all(promiseAll)
  }
}
const mutations = {
  GETSHOPCART(state, data) {
    state.cartInfoList = data[0]?.cartInfoList || [] //可选链式操作符?.
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
