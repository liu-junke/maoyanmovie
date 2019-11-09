<template>
    <footer>
        <ul>
            <router-link :to = "item.path" active-class = "active" tag = "li" v-for = "item in tabbars" :key = "item.id">
                <i class="fas" :class = "[ item.icon ]"></i>
                <span> {{ item.text }} </span>
            </router-link>  
        </ul>
    </footer>
</template>

<script>
export default {
    data(){
        return{
            tabbars:[
                {
                    id:1,
                    path:'/home',
                    text:'电影',
                    icon:'fa-film'
                },
                {
                    id:2,
                    path:'/cinema',
                    text:'影院',
                    icon:'fa-hotel'
                },
                {
                    id:3,
                    path:'/mine',
                    text:'我的',
                    icon:'fa-user'
                }
            ]
        }
    }
}
</script>>

<style lang="stylus" scoped>
 @import '../../assets/css/theme.styl';
 @import '../../assets/css/border.styl';
footer
  width 100%
  height .48rem
  border 1px 0 0 0,#ccc
  position relative
  z-index 100000
  ul
    height .48rem
    display flex
    justify-content space-around
    li
      list-style none
      display flex   
      flex-direction column 
      justify-content center
      align-items center
      &.active
        i
          color $theme_color
        span 
          color $theme_color  
      i
        font-size .2rem
        color: #696969
        margin-top .03rem
      span 
        font-size .12rem 
        color: #696969
        margin-top .05rem 
</style>