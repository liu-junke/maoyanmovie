<template>
    <div class="expected-item swiper-slide" data-id="1217023" style="
    background-color: white;
    ">
      <div class="poster default-img-bg">
        <img :src = "data.img | img2Filter" onerror="this.style.visibility='hidden'">
        <span class="wish-bg"></span>
        <span class="wish"><span class="wish-num">505441</span>人想看</span>
        <div class="toggle-wish" data-wishst="0" data-movieid="1217023">
          <span></span>
        </div>
      </div>
      <h5 class="name line-ellipsis">{{data.nm}}</h5>
      <p class="date">{{time}}</p>
    </div>  
</template>

<script>
export default {
    props:['data'],
    computed:{
        time(){
            return this.data.comingTitle.split(' ')[0]
        }
    }
}
</script>

<style lang="stylus" scoped>
    .swiper-wrapper 
      .swiper-slide 
        width .85rem!important  
        height 1.57rem
        margin-right .1rem
        text-align center
        font-size .18rem
        background #ccc
        display -webkit-box
        display -ms-flexbox
        display -webkit-flex
        display flex
        -webkit-box-pack center
        -ms-flex-pack center
        -webkit-justify-content center
        justify-content center
        -webkit-box-align center
        -ms-flex-align center
        -webkit-align-items center
        align-items center  
</style>
<style scoped>
@import '../../assets/css/futurestyle.css'
</style>