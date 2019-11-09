<template>
    <div class="home-box">
        <HomeNav></HomeNav>
        <router-view></router-view>
    </div>
</template>

<script>
import HomeNav from './HomeNav'
import MovieList from './MovieList'
export default {
  components:{
    HomeNav,
    MovieList
  }
}
</script>

<style lang="stylus">
.home-box
  flex 1
  display flex 
  flex-direction column
  overflow hidden
</style>