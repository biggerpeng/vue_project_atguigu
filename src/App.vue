<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'
  export default {
    name: 'App',
    components: {
      Header,
      Footer
    },
    mounted() {
      this.$router.replace({
        // name: 'Home'//这里的name是命名路由的name，不是组件name
        path: '/home'
      })
    }
  }
</script>

<style>
</style>
