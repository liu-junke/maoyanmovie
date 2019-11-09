<template>
    <div>
        <FutureList :exmovies = "exmovies"></FutureList>
    </div>
</template>

<script>
import FutureList from './FutureList'
import { mapActions,mapState } from 'vuex'
export default {
  components:{
    FutureList
  },
  methods:{
    ...mapActions(['getExpertMovies'])
  },
  mounted(){
    this.getExpertMovies()
  },
  computed:{
    ...mapState({
      exmovies:state=>state.home.exmovies
    })
  }
}
</script>

<style lang="stylus" scoped>
div
  font-size .2rem
  flex 1
  background-color #f5f5f5
</style>