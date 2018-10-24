<template>
  <div class="lottery-hall">
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="">
      <!-- slides -->
      <swiper-slide><img style="width: 100vw;" src="./images/banner1.png" alt=""></swiper-slide>
      <swiper-slide><img style="width: 100vw;" src="./images/banner2.png" alt=""></swiper-slide>
      <swiper-slide><img style="width: 100vw;" src="./images/banner3.png" alt=""></swiper-slide>
      <swiper-slide><img style="width: 100vw;" src="./images/banner4.png" alt=""></swiper-slide>
    </swiper>
    <router-link to="/myMessage">
      <div class="nocice">
        <van-icon style="color: #6c6c6c" name="info-o"/>
        <span style="color: #6c6c6c">{{notice[0].title}}</span>
      </div>
    </router-link>
    <div class="hot-lottery">
      <div class="hot-lottery-item" v-for="(item, index) in hotLottery" @click="toPage(`/${item.type}/${item.id}`)">
        <div class="lottery-icon">
          <i v-if="item.type.includes('pk10')" style="color: #f22751" class="iconfont icon-pk"></i>
          <i v-if="item.type.includes('syxw')" style="color: #218ddd" class="iconfont icon-xuan"></i>
          <i v-if="item.type.includes('ssc')" style="color: #f96e00" class="iconfont icon-shishicai"></i>
          <i v-if="item.type.includes('k3')" style="color: #e41404" class="iconfont icon-kuai3"></i></div>
        <div class="lottery-name">{{item.title}}</div>
        <div class="lottery-number">{{item.per_explain}}</div>
      </div>
      <div class="hot-lottery-item" @click="toAllLottery(item)" style="margin-bottom: 20px">
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
        notice: '',
        hotLottery: [],
        swiperOption: {
          autoplay: true,
          loop: true
        }
      }
    },
    methods: {
      async getNotice() {
        let res = await this.axios.get('/v1/Notice')
        this.notice = res.data.data
      },
      async getLotteryList() {
        let res = await this.axios.get('/v1/Lottery/List')
        this.hotLottery = res.data.data
        console.log(res.data.data)
      },
      async getUserInfo() {
        let userInfo = await this.axios.get('/v1/User/Info')
        this.$store.commit('setUserInfo', userInfo.data.data)
      },
      toAllLottery() {
        this.$router.push('/allLottery')
      },
      toPage(link) {
        this.$router.push(link)
      }
    },
    mounted() {
      this.getUserInfo()
      this.getNotice()
      this.getLotteryList()
      this.$store.commit('setHeaderTitle', 'xxxx')
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
