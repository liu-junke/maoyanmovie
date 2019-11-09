<template>
        <ul>
            <router-link tag="li" to = "/city" active-class = "active" class="city">
                <span> 杭州 </span>
                <i class="fas fa-caret-down"></i>
            </router-link>
            <li class="nav-nav">
               <router-link :to = "{name:'hotmovie'}" class="hotmovie" tag = "a" active-class= "active">正在热映</router-link>
               <router-link :to = "{name:'futuremovie'}" class="futuremovie" tag = "a" active-class= "active">即将上映</router-link> 
            </li>
            <router-link to = "/search" tag = "li" class="search">
                <a href="javascript:;">
                    <i class="fas fa-search" ></i>
                </a>
            </router-link>
        </ul>
</template> 

<style lang="stylus">
@import '../../assets/css/border.styl';
@import '../../assets/css/theme.styl';
ul
  display flex
  justify-content space-around
  list-style none
  height .4rem
  border 0 0 1px 0,#ccc
  margin 0
  padding 0
  .city
    flex 70
    display flex
    justify-content center
    align-items center
    span 
      font-size .15rem
      color #666
    i
      font-size .08rem  
      color #666
      margin-left .03rem
  .nav-nav
     flex 255
     display flex
     justify-content space-around
     align-items center
     a
       font-size .15rem
       text-decoration none 
       color #666  
       height 100%
       line-height .44rem
       font-weight bold
       padding 0 .15rem 
       border-bottom .02rem solid transparent
       &.active
         color $theme_color
         border-bottom .02rem solid $theme_color
  .search
    flex 50
    width .4rem
    height .4rem
    a
      display flex 
      width 100% 
      height 100% 
      justify-content center 
      align-items center
      text-decoration none 
      i
        font-size .2rem
        color $theme_color
        
</style>