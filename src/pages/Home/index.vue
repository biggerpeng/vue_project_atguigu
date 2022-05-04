<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecomend></TodayRecomend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
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
    }
  }
</script>

<style>
</style>