// 登录如注册模块

import { reqGetRegisterCode } from '@/api'

const state = {}
const getters = {}
const actions = {
  async getRegisterCode({}, phone) {
    const result = await reqGetRegisterCode(phone)
    console.log(result)
  }
}
const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
