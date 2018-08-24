<template>
  <div class="lottery-hall">
    <van-swipe :autoplay="3000" :show-indicators="false">
      <van-swipe-item><img src="./images/banner1.png" alt=""></van-swipe-item>
      <van-swipe-item><img src="./images/banner2.png" alt=""></van-swipe-item>
      <van-swipe-item><img src="./images/banner3.png" alt=""></van-swipe-item>
      <van-swipe-item><img src="./images/banner4.png" alt=""></van-swipe-item>
    </van-swipe>
    <div class="nocice">
      <router-link to="">
        <van-icon style="color: #6c6c6c" name="info-o"/>
        <span style="color: #6c6c6c">test</span>
      </router-link>
    </div>
    <div class="hot-lottery">
      <div class="hot-lottery-item" v-for="(item, index) in hotLottery" @click="toPage(`/${item.type}/${item.id}`)">
        <div class="lottery-icon">
          <i v-if="item.type == 'pk10'" style="color: #f22751" class="iconfont icon-pk"></i>
          <i v-if="item.type == 'syx5'" style="color: #218ddd" class="iconfont icon-xuan"></i>
          <i v-if="item.type == 'ssc'" style="color: #f96e00" class="iconfont icon-shishicai"></i>
          <i v-if="item.type == 'k3'" style="color: #e41404" class="iconfont icon-kuai3"></i></div>
        <div class="lottery-name">{{item.name}}</div>
        <div class="lottery-number">{{item.number}}</div>
      </div>
      <div class="hot-lottery-item" @click="toAllLottery">
        <div class="lottery-icon"><i class="iconfont icon-gengduo" style="color: #fa7e00"></i></div>
        <div class="lottery-name">更多</div>
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
        hotLottery: [
          {id: 1401, type: 'k3',name: '江苏',number: 222},
          {id: 1, type: 1,name: 'test',number: 222},
          {id: 1, type: 3,name: 'test',number: 222},
          {id: 1, type: 1,name: 'test',number: 222},
          {id: 1, type: 1,name: 'test',number: 222},
          {id: 1, type: 1,name: 'test',number: 222},
          {id: 1, type: 3,name: 'test',number: 222},
          {id: 1, type: 2,name: 'test',number: 222},
          {id: 1, type: 2,name: 'test',number: 222},
          {id: 1, type: 2,name: 'test',number: 222}
        ]
      }
    },
    methods: {
      toAllLottery() {
        this.$router.push('/allLottery')
      },
      toPage(link) {
        this.$router.push(link)
      }
    },
    mounted() {
	    this.$store.commit('setHeaderTitle', 'xx彩票')
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



  @include onetoppx('.hot-lottery-item');
  @include oneleftpx('.hot-lottery-item');

  .hot-lottery {
    margin-top: px2rem(20px);
    text-align: center;
    overflow: hidden;
    .hot-lottery-item {
      float: left;
      box-sizing: border-box;
      width: px2rem(249px);
      height: px2rem(249px);
      background: #fff;
      .lottery-icon {
        i {
          display: inline-block;
          font-size: px2rem(75px);
          margin-top: px2rem(30px);
        }
      }
      .lottery-name {
        font-size: px2rem(35px);
        margin-top: px2rem(5px);
        color: #333;
      }
      .lottery-number {
        font-size: px2rem(25px);
        color: #989898;
        margin-top: px2rem(5px);
      }
    }
  }
  .hot-lottery-item:nth-child(1)::before {
    border: 0;
  }
  .hot-lottery-item:nth-child(2)::before {
    border: 0;
  }
  .hot-lottery-item:nth-child(3)::before {
    border: 0;
  }
  .hot-lottery-item:nth-child(3)::after {
    border: 0;
  }
  .hot-lottery-item:nth-child(6)::after {
    border: 0;
  }
  .hot-lottery-item:nth-child(9)::after {
    border: 0;
  }
  .hot-lottery-item:nth-child(12)::after {
    border: 0;
  }
  /*.hot-lottery-item:last-child::after {*/
    /*border: 0;*/
  /*}*/


</style>
