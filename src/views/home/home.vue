<!--
  name: home
  desc: 个人中心
-->
<template>
  <div class="lottery-hall">
    <!-- 用户信息 -->
    <div class="user-info">
      <p>
        <img :src="`http://${userInfo.avatar}`" @click="toPage('/userInfo')" >
      </p>
      <p>
        <span>帐&nbsp;号: {{userInfo.username}}</span>
        <span>余&nbsp;额: {{userInfo.money}}元</span>
      </p>
      <i class="iconfont icon-shuaxin"></i>
    </div>
    <!-- 用户信息 end -->

    <!-- 操作 -->
    <ul class="user-opera">
      <li @click="toPage('/recharge')">
        <i class="iconfont icon-chongzhi"></i>
        <span>我要充值</span>
      </li>
      <li>
        <i class="iconfont icon-tixian"></i>
        <span>我要提现</span>
      </li>
      <li @click="toPage('/transRecord')">
        <i class="iconfont icon-jiaoyijilu_01"></i>
        <span>交易记录</span>
      </li>
      <li @click="toPage('/noteRecord')">
        <i class="iconfont icon-touzhujilu"></i>
        <span>投注记录</span>
      </li>
    </ul>
    <!-- 操作 end -->

    <!-- user-options -->
    <ul class="user-options">
      <li @click="toPage('/userInfo')">
        <i class="iconfont icon-gerenxinxi"></i>
        <span>个人信息</span>
        <van-icon name="arrow" />
      </li>
      <li @click="toPage('/safeCenter')">
        <i class="iconfont icon-anquanzhongxin"></i>
        <span>安全中心</span>
        <van-icon name="arrow" />
      </li>
      <li @click="toPage('/agentCenter')" v-if="userInfo.isagent">
        <i class="iconfont icon-dailizhongxin"></i>
        <span>代理中心</span>
        <van-icon name="arrow" />
      </li>
      <li @click="toPage('/todayProfitLoss')">
        <i class="iconfont icon-yingkuitongji"></i>
        <span>今日盈亏</span>
        <van-icon name="arrow" />
      </li>
      <li @click="toPage('/myMessage')">
        <i class="iconfont icon-xiaoxi"></i>
        <span>我的消息</span>
        <van-icon name="arrow" />
      </li>
    </ul>
    <!-- user-options end -->
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import { mapGetters } from 'vuex'

  export default {
    name: 'lotteryHall',
    components: {
      Navbar
    },
    data() {
      return {
        // userInfo: ''
      }
    },
    methods: {
      // async getUserInfo() {
      //   let res = await this.axios.get()
      //   this.userInfo = res.data.data.info
      //   console.log(this.userInfo)
      // },
      toPage (src) {
        this.$router.push(src)
      }
    },
    computed: {
      ...mapGetters([
        'userInfo'
      ])
    },
    mounted() {
      // this.getUserInfo()
	    this.$store.commit('setHeaderTitle', '个人中心')
    }
  }
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

// user-info
.user-info {
  position: relative;
  padding: px2rem(36px);
  width: 100%;
  background: #ffffff;
  overflow: hidden;
  font-size: px2rem(34px);
  p{
    float: left;
    margin: 0;
    padding: 0;
    &:nth-child(1) {
      border-radius: 4px;
      img {
        width: px2rem(140px);
      }
    }
    &:nth-child(2) {
      margin-left: px2rem(20px);
      span {
        display: block;
        margin: px2rem(22px) 0;
        line-height: px2rem(40px);
      }
    }
  }
  i:nth-child(3) {
    position: absolute;
    margin-top: px2rem(52px);
    right: px2rem(36px);
  }
}

// user-opera
.user-opera {
  display: flex;
  padding-bottom: 10px;
  width: 100%;
  background: #ffffff;
  overflow: hidden;
  font-size: px2rem(30px);
  li {
    flex: 1;
    text-align: center;
    i, span {
      display: block;
    }
    i {
      font-size: px2rem(50px);
    }
    span {
      margin: 5px 0;
    }
    &:nth-child(1) {
      i {
        color: #ff2323;
      }
    }
    &:nth-child(2) {
      i {
        color: #ee983d;
      }
    }
    &:nth-child(3) {
      i {
        color: #4ad2c8;
      }
    }
    &:nth-child(4) {
      i {
        color: #62a5f6;
      }
    }
  }
}

// user-options
@include onebottompx('.user-options li');
.user-options {
  width: 100%;
  margin-top: px2rem(26px);
  background: #ffffff;
  li {
    margin: px2rem(18px) px2rem(36px);
  }
}

// user-options end
.user-options {
  font-size: px2rem(34px);
  margin-left: px2rem(3px);
  overflow: hidden;
  li {
    position: relative;
    padding: px2rem(10px) 0;
    i:nth-child(1) {
      font-size: px2rem(58px);
    }
    i:nth-child(3) {
      float: right;
      margin-top: px2rem(10px);
      font-size: px2rem(28px);
      color: #cccccc;
    }
    span {
      position: absolute;
      margin-top: px2rem(14px);
      margin-left: 10px;
    }

    &:last-child::after {
      content: normal;
    }

    &:nth-child(1), &:nth-child(5) {
      i:nth-child(1) {
        color: #7885ca;
      }
    }
    &:nth-child(2) {
      i:nth-child(1) {
        color: #81c784;
      }
    }
    &:nth-child(3) {
      i:nth-child(1) {
        color: #63b4f6;
      }
    }
    &:nth-child(4) {
      i:nth-child(1) {
        color: #ffb74d;
      }
    }
  }
}
</style>

