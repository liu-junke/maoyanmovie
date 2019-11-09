<template>
<div class="tab-content">
				<div class="page f-hot active" data-hot=".f-hot" data-cid="c_3j5p10oz">
					<div class="list-wrap" style="margin-top: 0px;">
						<div class="most-expected swiper-container">
							<p class="title">近期最受期待</p>
							<div class="most-expected-list swiper-wrapper">
                <FutureItem :data = 'item' v-for = "item in exmovies" :key = "item.id"></FutureItem>
  </div>
</div>
	<!-- <div class="coming-list"> 
  <div>
    <p class="group-date">11月1日 周五</p>
  <div class="item" data-id="1250952" data-bid="dp_wx_home_movie_list">
  <div class="main-block">
    <div class="avatar" sort-flag="">     
      <div class="default-img-bg">
        <img src="https://p0.meituan.net/128.180/movie/ecca4f0b95340b2c57006a1bace4c3f91386100.jpg" onerror="this.style.visibility='hidden'">		
      </div>
    </div> 
    <div class="mb-outline-b content-wrapper">      
      <div class="column content">
        <div class="box-flex movie-title">
          <div class="title line-ellipsis v2dimax_title">天气之子</div>         
            <span class="version v2d imax"></span>                
        </div>
        <div class="detail column">                    
             <div class="wantsee line-ellipsis">
                <span class="person">381010</span>
                <span class="p-suffix">人想看</span>
              </div>							           	                
            <div class="actor line-ellipsis">主演: 醍醐虎汰朗,森七菜,本田翼</div>         
            <div class="actor line-ellipsis">2019-11-01上映</div>                                 
        </div>
      </div>
      <div class="button-block" data-id="1250952">       
          <div class="btn pre" data-id="1250952"><span class="fix" data-bid="dp_wx_home_movie_btn">预售</span></div>       
      </div>    
    </div>
  </div>
</div>  
       </div>
      </div> -->
     </div>
		</div>
	<div class="more"></div>
</div>
</template>

<script>
import Swiper from 'swiper'
import FutureItem from './FutureItem'
export default {
  props:['exmovies'],
  components:{
    FutureItem
  },
    mounted(){
   var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 10,
      freeMode : true,
      freeModeMomentum : false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
}
}
</script>




<style scoped>
@import '../../assets/css/futurestyle.css'
</style>
