<!--
  name: todayProfitLoss
  desc: 个人中心 -> 今日盈亏
-->
<template>
  <div class="todayProfitLoss">
    <Navbar>
      <router-link slot="headleft" to="home">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle" class="btn-group">今日盈亏</span>
    </Navbar>

    <div class="content">
      <div class="todayHeader">
        <li>
          <span>盈利金额</span>
          <span>0.00</span>
        </li>
        <li>
          <van-icon name="question" />
          <span>盈亏计算公式: 中奖-投注+活动+返点</span>
        </li>
      </div>

      <ul class="todayOptions">
        <li>
          <span>0.00</span><span>投注金额</span>
        </li>
        <li>
          <span>0.00</span><span>中奖金额</span>
        </li>
        <li>
          <span>0.00</span><span>活动礼金</span>
        </li>
        <li>
          <span>0.00</span><span>返点金额</span>
        </li>
        <li>
          <span>0.00</span><span>充值金额</span>
        </li>
        <li>
          <span>0.00</span><span>提现金额</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'todayProfitLoss',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";

ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}

.content {
  margin-top: px2rem(100px);
  margin-bottom: px2rem(100px);
  overflow: hidden;
  background: #efeef4;

  & div, & ul {
    margin-bottom: px2rem(30px);
    background: #ffffff;
  }

  .todayHeader {
    li {
      background: linear-gradient(0deg,#3b052c,#6a202d);

      &:nth-child(1) {
        padding: px2rem(60px);
        color: #fced08;
        text-align: center;
        span {
          display: block;
          margin-bottom: px2rem(30px);
          font-size: px2rem(56px);
          font-weight: 400;
          &:nth-child(1) {
            font-size: px2rem(28px);
          }
        }
      }

      &:nth-child(2) {
        padding: px2rem(20px);
        background: #440a2c;
        color: #ffffff;
        font-size: px2rem(28px);
      }
    }
  }

  .todayOptions {
    padding: px2rem(36px);
    overflow: hidden;
    text-align: center;
    li {
      float: left;
      padding: px2rem(70px) 0;
      width: 33%;
      border: 1px solid #e2e1e1;
      border-bottom: none;
      border-right: 0;
      font-size: px2rem(32px);

      &:nth-child(1), &:nth-child(2), &:nth-child(3) {
        border-top: none;
      }
      &:nth-child(1), &:nth-child(4) {
        border-left: none;
      }

      span {
        display: block;
        &:nth-child(1) {
          color: #ff6818;
          font-weight: 500;
          font-size: px2rem(36px);
          line-height: px2rem(50px);
        }
      }
    }
  }
}
</style>

