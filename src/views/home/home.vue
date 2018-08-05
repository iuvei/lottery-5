<template>
  <div class="lottery-hall">
    <!-- 用户信息 -->
    <div class="user-info">
      <p>
        <img src="./../../../static/images/cc75798d0ec20b32.jpg" @click="toPage('/userInfo')" >
      </p>
      <p>
        <span>帐&nbsp;号: cds0715</span>
        <span>余&nbsp;额: 5500000.00元</span>
      </p>
      <van-icon name="check" />
    </div>
    <!-- 用户信息 end -->

    <!-- 操作 -->
    <ul class="user-opera">
      <li @click="toPage('/recharge')">
        <van-icon name="pending-evaluate" />
        <span>我要充值</span>
      </li>
      <li>
        <van-icon name="password-view" />
        <span>我要提现</span>
      </li>
      <li @click="toPage('/transRecord')">
        <van-icon name="pending-payment" />
        <span>交易记录</span>
      </li>
      <li @click="toPage('/noteRecord')">
        <van-icon name="records" />
        <span>投注记录</span>
      </li>
    </ul>
    <!-- 操作 end -->

    <!-- user-options -->
    <ul class="user-options">
      <li @click="toPage('/userInfo')">
        <van-icon name="contact" />
        <span>个人信息</span>
        <van-icon name="arrow" />
      </li>
      <li @click="toPage('/safeCenter')">
        <van-icon name="points" />
        <span>安全中心</span>
        <van-icon name="arrow" />
      </li>
      <li @click="toPage('/agentCenter')">
        <van-icon name="points" />
        <span>代理中心</span>
        <van-icon name="arrow" />
      </li>
      <li @click="toPage('/todayProfitLoss')">
        <van-icon name="points" />
        <span>今日盈亏</span>
        <van-icon name="arrow" />
      </li>
      <li @click="toPage('/myMessage')">
        <van-icon name="points" />
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
    methods: {
      change() {
        this.$store.commit(SET_TEST, 111)
      },
      toPage (src) {
        this.$router.push(src)
      }
    },
    computed: {
      ...mapGetters([
        'test'
      ])
    },
    mounted() {
      console.log(this.app.test)
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
  letter-spacing: 3px;
  overflow: hidden;
  li {
    padding: px2rem(30px) 0;
    i:nth-child(3) {
      float: right;
      color: #cccccc
    }

    &:last-child::after {
      content: normal;
    }
  }
}
</style>

