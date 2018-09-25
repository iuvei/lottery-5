<!--
  name: agentCenter
  desc: 个人中心 -> 代理中心
-->
<template>
  <div class="agentCenter">
    <Navbar>
      <router-link slot="headleft" to="home">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle" class="btn-group">代理中心</span>
    </Navbar>

    <div class="content">
      <div class="agentHeader">
        <img src="./../../../static/images/proxySlide.png" width="100%">
      </div>

      <div class="agentOptions">
        <li @click="toPage('/agentIntro')">
          <span>代理说明</span><van-icon name="arrow" />
        </li>
        <li @click="toPage('/agentReportForm')">
          <span>代理报表</span><van-icon name="arrow" />
        </li>
        <li @click="toPage('/subReportForm')">
          <span>下级报表</span><van-icon name="arrow" />
        </li>
        <li @click="toPage('/subOpenAccount')">
          <span>下级开户</span><van-icon name="arrow" />
        </li>
        <li @click="toPage('/memberManage')">
          <span>会员管理</span><van-icon name="arrow" />
        </li>
        <li @click="toPage('/noteDetail')">
          <span>投注明细</span><van-icon name="arrow" />
        </li>
        <li @click="toPage('/tradeDetail')">
          <span>交易明细</span><van-icon name="arrow" />
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'agentCenter',
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

@include onetoppx('.agentHeader', 'top', 'before', $color: #ffffff);
@include onebottompx('.agentHeader', 'top', 'after', $color: #bbbbbb);
@include onetoppx('.agentOptions');
@include onebottompx('.agentOptions');
@include onebottompx('.agentOptions li');

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

  div {
    margin-bottom: px2rem(30px);
  }

  .agentOptions {
    background: #ffffff;
    font-size: px2rem(36px);
    color: #333333;

    li {
      padding: px2rem(18px) 0;
      margin: 0 px2rem(36px);
      line-height: px2rem(60px);

      &:last-child::after {
        content: normal;
      }

      i {
        float: right;
        color: #cccccc;
        line-height: px2rem(60px);
        font-size: px2rem(28px);
      }
    }
  }
}

</style>

