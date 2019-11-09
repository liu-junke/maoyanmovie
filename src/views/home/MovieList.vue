<template>
    <div class="tab-content">
    <div class="page n-hot active" data-hot=".n-hot" data-cid="c_dmLad">
      <div class="list-wrap" style="margin-top: 0px;">
        <div v-if = "movies">
          <movie-item :data = "item" v-for = "item in movies.movieList" :key = "item.id"></movie-item>
        </div>        
      </div>
    </div>    
     <Loading v-if = "loadingFlag"></Loading>
 </div>
</template>

<script>
import MovieItem from './MovieItem';
import BScroll from 'better-scroll';
import { Indicator,Toast } from 'mint-ui';
import { mapActions,mapState } from 'vuex';
import _ from 'loadsh'

export default {
  props: ['movies'],
  components: {
    MovieItem
  },
   computed: {
    ...mapState({
      loadingFlag: state => state.home.loadingFlag
    })
  },
  methods:{
    ...mapActions(['getFutureMovies','showLoading','hideLoading'])
  },
  mounted () {
    let count=0
    const bs=new BScroll('.page',{
      pullUpLoad:{
        threshold:50
      }
    })  
    bs.on('pullingUp',()=>{ 
      const movieIds=this.movies.movieIds.slice(12)
      const ids=_.chunk(movieIds,10)
      console.log('ids',ids)

      if(count == ids.length){
        Toast({
          message: '已经到达底部了',
          position: 'bottom',
          duration: 2000
        });
        bs.finishPullUp()
        return;
      }

      if(count < ids.length){
        console.log('上拉加载一次') ;
        // Indicator.open('加载中...');
        this.showLoading()
        setTimeout(()=>{
        this.getFutureMovies( ids[ count ].join(',') );
        // Indicator.close();
        this.hideLoading()
        },800)
        
      }

      bs.finishPullUp()
      count++   
    })
  }
}
</script>

<style lang="stylus" scoped>
  .tab-content 
    height 100% 
    .page 
        height 100% 
</style>