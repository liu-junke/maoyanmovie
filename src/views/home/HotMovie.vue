<template>
    <div>
       <MovieList :movies = "movies"></MovieList>
    </div>
</template>

<script>
import MovieList from './MovieList'
import { mapActions,mapState } from 'vuex'
export default {
  components:{
    MovieList
  },
  mounted(){
    // this.$store.dispatch('getMovies')
    this.getMovies()
    
  },
 methods:{
   ...mapActions(['getMovies'])
 },
  computed:{
    // movies(){
    //   return this.$store.state.home.movies
    // },
    ...mapState({
      movies:state=>state.home.movies
      
    })
  }
}
</script>


<style lang="stylus" scoped>
  div
    flex 1 
    overflow hidden
    z-index 1
</style>