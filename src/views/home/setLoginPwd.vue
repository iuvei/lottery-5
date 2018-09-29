<!--
  name: setLoginPwd
  desc: 个人中心 -> 安全中心 -> 验证原密码 -> 设置登录密码
-->
<template>
  <div class="setLoginPwd">
    <HeaderRecharge>
      <router-link slot="headleft" to="/safeCenter">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle">设置登录密码</span>
    </HeaderRecharge>

    <ul class="content">
      <li>
        <label for="loginPwd">登录密码</label>
        <input type="text" placeholder="请输入登录密码" id="loginPwd" v-model="pwd">
      </li>
      <li>
        <label for="surePwd">确认密码</label>
        <input type="text" placeholder="请再次输入密码" id="surePwd" v-model="repeatpwd">
      </li>
    </ul>
    <div class="btn-wrapper">
      <button @click="setPwd">确定</button>
    </div>
  </div>
</template>

<script>
  import HeaderRecharge from '@/components/Navbar.vue'

  export default {
    name: 'weChatPay',
    data() {
      return {
        pwd: '',
        repeatpwd: ''
      }
    },
    components: {
      HeaderRecharge
    },
    methods: {
      async setPwd() {
        let res = await this.axios.post('/v1/User/SetPwd', {
          pwd: this.pwd,
          repeatpwd: this.repeatpwd
        })
        this.$dialog.alert({
          message: res.data.message
        });
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
</style>
