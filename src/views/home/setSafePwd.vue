<!--
  name: setSafePwd
  desc: 个人中心 -> 安全中心 -> 设置安全密码
-->
<template>
  <div class="setSafePwd">
    <HeaderRecharge>
      <router-link slot="headleft" to="/safeCenter">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle">设置安全密码</span>
    </HeaderRecharge>

    <ul class="content">
      <li>
        <label for="safePwd">安全密码</label>
        <input type="text" placeholder="请输入安全密码" id="safePwd">
      </li>
      <li>
        <label for="surePwd">确认密码</label>
        <input type="text" placeholder="请再次输入安全密码" id="surePwd">
      </li>
    </ul>
    <div class="btn-wrapper">
      <button>确定</button>
    </div>
    <div class="explain">
      <p>
        安全密码用于提现、绑定银行卡等操作，可保障资金安全。
      </p>
    </div>
  </div>
</template>

<script>
  import HeaderRecharge from '@/components/Navbar.vue'

  export default {
    name: 'weChatPay',
    components: {
      HeaderRecharge
    },
    methods: {
      toPage (src) {
        alert('验证密码正确后跳转到设置登录密码');
        this.$router.push('/setLoginPwd');
      }
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
        margin-top: px2rem(40px);
        &::after {
          content: none;
        }
      }
      &:nth-child(2) {
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
