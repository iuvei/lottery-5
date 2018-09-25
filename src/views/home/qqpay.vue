<!--
  name: qqpay
  desc: 个人中心 -> 我要充值 -> QQ钱包
-->
<template>
  <div class="qqpay">
    <HeaderRecharge>
      <router-link slot="headleft" to="/recharge">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle">QQ钱包</span>
    </HeaderRecharge>

    <ul class="content">
      <li>
        <label for="rechargeMoney">充值金额</label>
        <input type="text" placeholder="请输入充值金额" id="rechargeMoney">
      </li>
    </ul>
    <div class="btn-wrapper">
      <button>确定</button>
    </div>
    <div class="explain">
      <p>
        1.扫一扫弹出的二维码进行充值。<br/>
        2.单笔充值金额最低10元，最高50000元。<br />
        3.可以使用其他手机扫二维码进行充值，也可以将二维码保存到相册再使用QQ钱包识别相册中的二维码进行充值，由于本二维码的经常更换，充值前请务必重新保存最新的二维码。
      </p>
    </div>
  </div>
</template>

<script>
  import HeaderRecharge from '@/components/Navbar.vue'

  export default {
    name: 'qqpay',
    components: {
      HeaderRecharge
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/index.scss";

  @include onetoppx('.content li');
  @include onebottompx('.content li');
  ul.content {
    margin-top: px2rem(100px);
    overflow: hidden;
    background: #efeef4;
    font-size: px2rem(34px);
    li {
      padding: px2rem(30px) px2rem(20px);
      background: #ffffff;
      &:nth-child(1) {
        margin: px2rem(40px) 0;
      }
      label {
        display: inline-block;
        width: px2rem(180px);
      }
      input {
        border: none;
        background: transparent;
        outline: none;
        &::-webkit-input-placeholder{
          color: #cccccc;
        }
        &::-moz-placeholder{
          color: #cccccc;
        }
        &:-moz-placeholder{
          color: #cccccc;
        }
        &:-ms-input-placeholder{
          color: #cccccc;
        }
      }
      &:nth-child(1), &:nth-child(2), &:nth-child(3) {
        input {
          &:nth-child(2) {
            color: #f46e00;
          }
        }
        span {
          float: right;
          color: #989898;
        }
      }
    }
  }

  div.btn-wrapper {
    padding-bottom: px2rem(40px);
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
      border: 1px solid #f8e2b9;
      background: #fffdeb;
      line-height: px2rem(50px);
      font-size: px2rem(36px);
      color: #f46e00;
    }
  }
</style>
