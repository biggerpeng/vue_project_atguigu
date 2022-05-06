import axios from 'axios'
import Mock from 'mockjs'
import banner from './banner.json'
import floor from './floor.json'

Mock.mock('/mock/banner', { code: 200, data: banner })
Mock.mock('/mock/floor', { code: 200, data: floor })

// console.log('mockServe执行')
// console.log(Mock)
// console.log(banner)

// debug
/* axios.get('/mock/banner').then(data => {
  console.log(data)
})
 */
