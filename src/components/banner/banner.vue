<template>
      <el-row :gutter="24" class="banner">
          <swiper :options="swiperOption" class="swiperbox">
          <swiper-slide><img src="./banner01.png" alt=""></swiper-slide>
          <swiper-slide><img src="./banner01.png" alt=""></swiper-slide>
          <swiper-slide><img src="./banner01.png" alt=""></swiper-slide>
          <swiper-slide><img src="./banner01.png" alt=""></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <div class="swiper-text">
          <p>如果你无法简洁的表达你的想法，那只说明你还不够了解它.</p>
          <span>--阿尔伯特·爱因斯坦</span>
      </div>
      </el-row>
</template>

<script>
  import 'Swiper/dist/css/swiper.css' 
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
      data (){
          return {
            swiperOption: {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
            }
      }
      },
        components:{
            swiper,
            swiperSlide
        }
    }


  
</script>

<style>
.banner{height: 532px;}
.swiperbox{height: 532px;position: relative;}
.swiper-pagination{height: 10%;position: absolute;bottom: 10px;}
.swiper-text{position: absolute;width: 39.4%;left: 31.25%;top: 191px;z-index: 99;}
.swiper-text p{font-size: 36px;color: #fff;text-align: left;}
.swiper-text span{font-size: 20px;color: #fff;float: right;}
</style>