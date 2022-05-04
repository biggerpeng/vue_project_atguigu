import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// 创建axios实例
const requests = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// 设置拦截器

// 请求拦截器
requests.interceptors.request.use(config => {
  nprogress.start()
  return config
})
// 相应拦截器
requests.interceptors.response.use(
  response => {
    nprogress.done()
    return response.data
  },
  error => {
    nprogress.done()
    return Promise.reject(new Error('faile'))
  }
)

// 导出二次封装的axios
export default requests
