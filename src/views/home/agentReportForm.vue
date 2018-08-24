<!--
  name: agentReportForm
  desc: 个人中心 -> 代理中心 -> 代理报表
-->
<template>
  <div class="agentReportForm">
    <Navbar>
      <router-link slot="headleft" to="/agentCenter">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle" class="btn-group">代理报表</span>
      <span slot="headright" @click="show=true">
        <span class="whichDay">今天<i class="iconfont icon-arrow"></i></span>
      </span>
    </Navbar>

    <div class="content">
      <!-- 查询 -->
      <div class="search">
        <p>
          <input type="text" placeholder="下级报表查询">
          <button><van-icon name="arrow" /></button>
        </p>
      </div><!-- 查询 end -->

      <!-- options -->
      <ul class="options">
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
          <span>0.00</span><span>团队返点</span>
        </li>
        <li>
          <span>0.00</span><span>团队盈利</span>
        </li>
        <li>
          <span>0.00</span><span>充值金额</span>
        </li>
        <li>
          <span>0.00</span><span>提现金额</span>
        </li>
        <li>
          <span>0.00</span><span>首充人数</span>
        </li>
        <li>
          <span>0.00</span><span>注册人数</span>
        </li>
        <li>
          <span>0.00</span><span>投注人数</span>
        </li>
        <li>
          <span>1</span><span>下级人数</span>
        </li>
        <li>
          <span>549996.90</span><span>团队余额</span>
        </li>
        <li>
          <span>0.00</span><span>代理返点</span>
        </li>
        <li>
          <span>0.00</span><span>代理工资</span>
        </li>
        <li>
          <span>0.00</span><span>代理分红</span>
        </li>
      </ul>
    </div>

    <!-- 弹出层 -->
    <div class="popup">
      <van-popup v-model="show" position="bottom">
        <li>今天</li>
        <li>昨天</li>
        <li>本月</li>
        <li>上月</li>
        <li @click="show=false">取消</li>
      </van-popup>
    </div>
    <!-- 弹出层 end -->
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'

  export default {
    name: 'agentReportForm',
    data () {
      return {
        show: false
      }
    },
    components: {
      Navbar
    },
    methods: {
      toPage (src) {
        this.$router.push(src);
      }
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

  /* 哪天 */
  .whichDay {
    font-size: px2rem(30px);
  }
  /* 哪天 end */

  // @include onetoppx('.agentHeader', 'top', 'before', #ffffff)
  .content {
    margin-top: px2rem(100px);
    overflow: hidden;
    background: #efeef4;

    div.search {
      p {
        position: relative;
        margin: px2rem(24px);
        padding: px2rem(14px);
        border-radius: 5px;
        background: #ffffff;
        font-size: px2rem(30px);
        input {
          border: none;
          background: transparent;
          &::-webkit-input-placeholder{
            color:#cccccc;
          }
        }
        button {
          position: absolute;
          top: px2rem(6px);
          right: px2rem(14px);
          padding: px2rem(2px);
          width: px2rem(50px);
          height: px2rem(50px);
          border: none;
          border-radius: px2rem(5px);
          background: #dc3b40;
          color: #ffffff;
          i {
            font-weight: 700;
            font-size: px2rem(24px);
          }
        }
      }
    }

    ul.options {
      padding: px2rem(36px);
      overflow: hidden;
      background: #ffffff;
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
        &:nth-child(1), &:nth-child(4), &:nth-child(7), &:nth-child(10), &:nth-child(13)  {
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

  // 弹出层
  @include onebottompx('.popup li', 'bottom', 'after', #ededed);
  .popup{
    li {
      margin: 0;
      padding: px2rem(30px);
      list-style: none;
      font-size: px2rem(40px);
      text-align: center;
      &:last-child {
        border-top: px2rem(30px) solid #efeef4;
      }
    }
  }
  // 弹出层

</style>
