// 登录如注册模块

import { reqGetRegisterCode, reqUserRegister, reqLogin, reqGetUserInfo, reqLogOut } from '@/api'

const state = {
  code: '',
  token: {},
  userInfo: {}
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
  // 用户注册
  async userRegister({}, data) {
    const result = await reqUserRegister(data)
    if (result.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  // 用户登录
  async userLogin({ commit }, data) {
    const result = await reqLogin(data)
    if (result.code === 200) {
      commit('USERLOGIN', result.data.token)
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  // 获取用户信息
  async getUserInfo({ commit }) {
    const result = await reqGetUserInfo()
    if (result.code === 200) {
      commit('GETUSERINFO', result.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  // 退出登录
  async logOut({ commit }) {
    const result = await reqLogOut()
    if (result.code === 200) {
      commit('LOGOUT')
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  }
}
const mutations = {
  // 获取验证码
  GETREGISTERCODE(state, code) {
    state.code = code
  },
  // 用户登录
  USERLOGIN(state, token) {
    state.token = token
  },
  // 获取用户信息
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo
  },
  // 退出登录
  LOGOUT(state) {
    state.token = {}
    state.userInfo = {}
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
