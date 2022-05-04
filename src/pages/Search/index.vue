<template>
  <div>
    Search组件
    <h1>params参数：{{ $route.params }}</h1>
    <h1>query参数：{{ $route.query }}</h1>
    <!-- <h1>{{ keyword }}</h1> -->
  </div>
</template>

<script>
  export default {
    name: 'Search',
    // props: ['keyword', 'a', 'b']
    props: ['a', 'b']
  }
</script>

<style>
</style>