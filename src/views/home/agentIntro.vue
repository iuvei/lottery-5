<!--
  name: agentIntro
  desc: 个人中心 -> 代理中心 -> 代理说明
-->
<template>
  <div class="agentIntro">
    <Navbar>
      <router-link slot="headleft" to="/agentCenter">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle" class="btn-group">代理说明</span>
    </Navbar>

    <div class="content">
      <div class="agentHeader">
        <!--<img src="./../../../static/images/agentIntro.jpg" width="100%">-->
      </div>

      <p class="illustrate">
        当您能看到这个页面，说明您的帐号即是玩家帐号也是代理帐号，即可以自己投注，也可以发展下级玩家，赚取返点佣金。
      </p>

      <dl class="quesAnswer">
        <dt><van-icon name="question" /> 如何赚取返点？</dt>
        <dd>
          可获得的返点，等于自身返点与下级返点的差值，如自身返点5，下级返点3，你将能获得下级投注金额2%的返点，如下级投注100元，你将会获得2元。
          <br/>
          点击下级开户，可查看自身返点，也可为下级设置返点。
        </dd>
        <dt><van-icon name="question" /> 如何成为下级开户？</dt>
        <dd>
          点击下级开户，先为您的下级设置返点，设置成功后会生成一条邀请码，将邀请码发送给您的下级注册，注册后他就是您的下级，点击会员管理，就能查看他注册的帐号；
          <br/>
          如果您为下级设置的是代理类型的帐号，那么您的下级就能继续发展下级，如果设置的是玩家类型，那么您的下级只能投注，不能再发展下级，也看不到代理中心；
        </dd>
        <dt><van-icon name="question" /> 温馨提示：</dt>
        <dd>
          返点不同赔率也不同，点击返点赔率表，可查看返点赔率；
          <br/>
          返点越低，赔率就越低，建议为下级设置的返点不要过低；
          <br/>
          可在代理报表、投注明细、交易明细查看代理的发展情况；
          <br/>
          建议开设的下级也是代理类型，无论发展了几级，您都能获得返点。
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'

  export default {
    name: 'agentIntro',
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

  @include onetoppx('.agentHeader', 'top', 'before', #ffffff)
  .content {
    margin-top: px2rem(100px);
    margin-bottom: px2rem(40px);
    overflow: hidden;
    background: #ffffff;
    line-height: px2rem(56px);
    font-size: px2rem(30px);
    color: #333333;

    p.illustrate {
      margin: 0 px2rem(20px);
    }

    dl.quesAnswer {
      margin: 0 px2rem(20px);
      dt {
        font-size: px2rem(36px);
        color: #dc3b40;
        i {
          float: left;
          margin: px2rem(12px) px2rem(12px) 0 0;
        }
      }
      dd {
        margin: 0;
        padding-left: px2rem(50px);
      }
    }
  }

</style>
