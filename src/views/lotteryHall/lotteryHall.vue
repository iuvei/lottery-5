<template>
  <div class="lottery-hall">
    <van-swipe :autoplay="3000" :show-indicators="false">
      <!--<van-swipe-item><img src="./images/banner1.png" alt=""></van-swipe-item>-->
      <!--<van-swipe-item><img src="./images/banner2.png" alt=""></van-swipe-item>-->
      <!--<van-swipe-item><img src="./images/banner3.png" alt=""></van-swipe-item>-->
      <!--<van-swipe-item><img src="./images/banner4.png" alt=""></van-swipe-item>-->
    </van-swipe>
    <div class="nocice">
      <router-link to="">
        <van-icon name="info-o"/>
        <span></span>
      </router-link>
    </div>
    <div class="hot-lottery">
      <div class="hot-lottery-item" v-for="(item, index) in hotLottery">
        {{index}}
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'

  export default {
    name: 'lotteryHall',
    components: {
      Navbar
    },
    data() {
      return {
        hotLottery: [{
          name: 'test',
          number: 222
        },{
          name: 'test',
          number: 222
        },{
          name: 'test',
          number: 222
        },{
          name: 'test',
          number: 222
        },{
          name: 'test',
          number: 222
        },{
          name: 'test',
          number: 222
        },{
          name: 'test',
          number: 222
        },{
          name: 'test',
          number: 222
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/index";

  /*margin-top: px2rem(100px);*/
  /*margin-bottom: px2rem(100px);*/
  .van-swipe {
    background: red;
    height: px2rem(300px);
    img {
      height: px2rem(300px);
      width: 100%;
    }
  }

  .nocice {
    display: block;
    background: #fff;
    font-size: px2rem(30px);
    height: px2rem(87px);
    line-height: px2rem(87px);
    border-bottom: px2rem(1px) solid #ccc;
    overflow: hidden;
    .van-icon, span {
      margin-left: px2rem(20px);
    }
  }

  .hot-lottery{
    background: red;
    margin-top: px2rem(20px);
    display: flex;
    .hot-lottery-item {
      margin-left: px2rem(1px);
      margin-bottom: px2rem(1px);
      float: left;
      box-sizing: border-box;
      width: px2rem(249px);
      height: px2rem(249px);
      background: #fff;
    }
    .first-item {}
  }
</style>
