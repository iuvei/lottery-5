<!--
  name: cardManage
  desc: 安全中心 -> 银行卡管理
-->
<template>
  <div class="cardManage">
    <Navbar>
      <router-link slot="headleft" to="home">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle" class="btn-group">银行卡管理</span>
    </Navbar>

    <div class="content">
      <div class="btn-wrapper">
        <button>确定</button>
      </div>

      <div class="explain">
        <p>
          您尚未绑定银行卡，一共可以绑定五张银行卡。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
  import DetailTitle from '@/components/detail-title'

  export default {
    name: 'safeCenter',
    components: {
      Navbar,
      DetailTitle
    },
    data () {
      return {
        msg: '您的帐号安全级别为极低'
      }
    },
    methods: {
      toPage (src) {
        this.$router.push(src)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/index.scss";

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none
  }

  .content {
    margin-top: px2rem(100px);
    margin-bottom: px2rem(100px);
    overflow: hidden;
    background: #efeef4;

    div.btn-wrapper {
      padding: px2rem(40px) 0;
      text-align: center;
      background: #efeef4;
      button {
        display: inline-block;
        width: px2rem(680px);
        height: px2rem(88px);
        border-radius: 3px;
        border: none;
        background: #db3b40;
        font-size: px2rem(40px);
        color: #ffffff;
      }
    }

    div.explain {
      padding: px2rem(24px);
      padding-top: 0;
      background: #efeef4;
      color: #f46e00;
      p {
        margin: 0;
        padding: px2rem(20px);
        background: #fffdeb;
        line-height: px2rem(50px);
        font-size: px2rem(36px);
        color: #f46e00;
      }
    }
  }
</style>

