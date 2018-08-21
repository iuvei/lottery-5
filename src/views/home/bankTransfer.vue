<!--
  name: bankTransfer
  desc: 个人中心 -> 我要充值 -> 银行转帐
-->
<template>
  <div class="bankTransfer">
    <HeaderRecharge>
      <router-link slot="headleft" to="recharge">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle">银行转帐</span>
    </HeaderRecharge>

    <ul class="content">
      <li>
        <van-icon name="setting" />
      </li>
      <li>
        银行转帐维护中...<br/>
        请使用其它充值方式!
      </li>
    </ul>
  </div>
</template>

<script>
  import HeaderRecharge from '@/components/Navbar.vue'

  export default {
    name: 'register',
    components: {
      HeaderRecharge
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/index.scss";


  @include onebottompx('.recharge-methods li');
  @include onetoppx('.recharge-methods li');

  .content {
    margin-top: px2rem(100px);
    margin-bottom: px2rem(100px);
    overflow: hidden;
    /*background: #efeef4;*/
    background: #ffffff;
    color: #989898;
    text-align: center;
    li {
      &:nth-child(1) {
        margin-top: px2rem(300px);
        font-size: px2rem(240px);
      }
      &:nth-child(2) {
        line-height: px2rem(46px);
        font-size: px2rem(36px);
      }
    }
  }

</style>
