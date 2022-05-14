// 登录如注册模块

import { reqGetRegisterCode, reqUserRegister } from '@/api'

const state = {
  code: ''
}
const getters = {}
const actions = {
  // 获取验证码
  async getRegisterCode({ commit }, phone) {
    const result = await reqGetRegisterCode(phone)
    if (result.code === 200) {
      commit('GETREGISTERCODE', result.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  // 用户登录
  async userRegister({}, data) {
    const result = await reqUserRegister(data)
    if (result.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  }
}
const mutations = {
  GETREGISTERCODE(state, code) {
    state.code = code
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
