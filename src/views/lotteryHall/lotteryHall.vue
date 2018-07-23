<template>
  <div class="lottery-hall">
    <Navbar slot="navbar">
      <span class="head-title" slot="headtitle"><img src="./images/mobile_logo.png" alt=""></span>
    </Navbar>
    <div class="content">
      <van-swipe :autoplay="3000" :show-indicators="false">
        <van-swipe-item><img src="./images/banner1.png" alt=""></van-swipe-item>
        <van-swipe-item><img src="./images/banner2.png" alt=""></van-swipe-item>
        <van-swipe-item><img src="./images/banner3.png" alt=""></van-swipe-item>
        <van-swipe-item><img src="./images/banner4.png" alt=""></van-swipe-item>
      </van-swipe>
      <div class="nocice">
        <router-link to="">
          <van-icon name="info-o" />
          <span>银行入款最高送3000元彩金！笔笔送！</span>
        </router-link>
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
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/index";
  .head-title {
    img {
      height: px2rem(70px);
      width: auto;
      margin-top: px2rem(20px);
    }
  }
  .content {
    margin-top: px2rem(100px);
    margin-bottom: px2rem(100px);
    .van-swipe {
      height: px2rem(300px);
      img {
        height: px2rem(300px);
        width: 100%;
      }
    }
    .notice {
      display: block;
      height: px2rem(87px);
      line-height: px2rem(87px);
      overflow: hidden;
      background-color: #fff;
    }
  }
</style>
