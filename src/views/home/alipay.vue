<!--
  name: alipay
  desc: 个人中心 -> 我要充值 -> 支付宝
-->
<template>
  <div class="alipay">
    <HeaderRecharge>
      <router-link slot="headleft" to="/recharge">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle">支付宝</span>
    </HeaderRecharge>

    <ul class="content">
      <li>
        <label for="alipayName">支付宝姓名</label>
        <input type="text" value="浦发银行-唐顺武" disabled id="alipayName">
        <span>复制 <van-icon name="pending-orders" id="bankName" /></span>
      </li>
      <li>
        <label for="alipayNum">支付宝帐号</label>
        <input type="text" value="6217XXXXXXXXXXXX" disabled id="alipayNum">
        <span>复制 <van-icon name="pending-orders" /></span>
      </li>
      <li>
        <label for="rechargeMoney">充值金额</label>
        <input type="text" placeholder="请输入充值金额" id="rechargeMoney">
      </li>
      <li>
        <label for="userAlipayName">支付宝姓名</label>
        <input type="text" placeholder="请输入您的支付宝姓名" id="userAlipayName">
      </li>
    </ul>
    <div class="btn-wrapper">
      <button>确定</button>
    </div>
    <div class="explain">
      <p>
        1.请使用支付宝转帐到以上帐户。<br/>
        2.若提供的是二维码，请使用支付宝扫一扫进行转帐。若提供的是支付宝或银行帐号，请使用支付宝转帐到银行卡的方式进行转帐。<br />
        3.请正确填写您的姓名和充值金额。设置了支付宝昵称的请直接填写昵称。<br/>
        4.请务必转帐后再提交订单，否则无法及时查到您的款项！转帐1笔提交一次，请勿重复提交订单。<br/>
        5.可以使用其他手机扫二维码进行充值，也可以将二维码保存到相册再使用微信识别相册中的二维码进行充值，由于本二维码的经常更换，充值前请务必重新保存最新的二维码。
      </p>
    </div>
  </div>
</template>

<script>
  import HeaderRecharge from '@/components/Navbar.vue'

  export default {
    name: 'alipay',
    components: {
      HeaderRecharge
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/index.scss";

  @include onetoppx('.content li');
  ul.content {
    margin-top: px2rem(100px);
    overflow: hidden;
    background: #efeef4;
    font-size: px2rem(34px);
    li {
      padding: px2rem(30px) px2rem(20px);
      background: #ffffff;
      &:nth-child(1) {
        margin-top: px2rem(40px);
      }
      &:nth-child(4) {
        margin-bottom: px2rem(40px);
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
