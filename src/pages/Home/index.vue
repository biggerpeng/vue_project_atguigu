<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecomend></TodayRecomend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floorList" :key="floor.id" :info="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import ListContainer from './ListContainer'
  import TodayRecomend from './TodayRecomend'
  import Rank from './Rank'
  import Like from './Like'
  import Floor from './Floor'
  import Brand from './Brand'
  export default {
    name: 'Home',
    components: {
      ListContainer,
      TodayRecomend,
      Rank,
      Like,
      Floor,
      Brand
    },
    computed: {
      ...mapState({
        floorList: state => state.home.floorList
      })
    },
    mounted() {
      this.$store.dispatch('getFloor')
      // 获取用户信息
      this.$store.dispatch('getUserInfo')
    }
  }
</script>

<style>
</style>