<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'
  export default {
    name: 'App',
    /* data() {
                      return {
                        isFooterShow: this.$route.path === '/home' || this.$route.path === '/search' //为什么跳转路由该属性不会更改
                      }
                    }, */
    /* computed: {
                    isFooterShow: this.$route.path === '/home' || this.$route.path === '/search' //这里$route为什么是undefine
                  }, */
    components: {
      Header,
      Footer
    },
    created() {
      this.$store.dispatch('categoryList')
    },
    mounted() {
      // 获取用户信息
      // this.$store.dispatch('getUserInfo') //APP只挂载一次，登陆后无法调用该函数
    }
  }
  // 注意代码是否多了一些多余的东西，例如``
</script>

<style>
</style>
