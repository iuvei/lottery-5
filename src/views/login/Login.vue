<template>
  <div class="login">
    <HeaderLogin>
      <router-link slot="headleft" to="lotteryHall">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle">用户登陆</span>
    </HeaderLogin>
    <div class="head-img">
      <img src="./images/defaultHead.png" alt="">
    </div>

    <div class="user-info">
      <div class="username">
        <i class="front-icon"></i>
        <input placeholder="请输入账号" v-model="username">
        <i class="end-icon"></i>
      </div>
      <div class="password">
        <i class="front-icon"></i>
        <input placeholder="请输入密码" type="password" v-model="password">
        <i class="end-icon"></i>
      </div>
    </div>
    <div class="buttons">
      <button class="login" @click="login">立即登录</button>
      <div class="otherBtn">
        <router-link to="register"><span class="reg">立即注册</span></router-link>
        <span style="color: #aaa">|</span>
        <router-link to="forgetpwd"><span class="forget">忘记密码</span></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderLogin from '@/components/Navbar.vue'
  import { Dialog } from 'vant';
  import { Base64 } from 'js-base64';
  import {setToken} from "../../utils/auth";

  export default {
    name: 'Login',
    components: {
      HeaderLogin
    },
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      async login() {
        if(this.username == ''){
          Dialog.alert({
            title: '提示',
            message: '请输入用户名'
          })
        } else if (this.password == '') {
          Dialog.alert({
            title: '提示',
            message: '请输入用户名'
          })
        } else {
          let res = await this.axios.post('/v1/Login', {
            username: this.username,
            password: this.password,
            timestamp: parseInt(new Date().getTime() / 1000)
          })
          let str = `${res.data.data.client.id} ${res.data.data.access_token}`
          setToken(Base64.encode(str))
          if(res.data.message == 'success') {
            this.$router.push('/lotteryHall')
          } else {
            Dialog.alert({
              title: '提示',
              message: res.data.message
            })
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/index.scss";
  @import "../../styles/mixin.scss";

  .head-img {
    margin-top: px2rem(150px);
    margin-bottom: px2rem(50px);
    height: px2rem(200px);
    text-align: center;
    img {
      border-radius: 50%;
      height: 100%;
      width: auto;
      border: 3px solid #e2e0e0;
    }
  }

  .user-info {
    background: #fff;
    @include onetoppx('.username');
    @include onetoppx('.password');
    @include onebottompx('.password');
    .username, .password {
      height: px2rem(82px);
      .front-icon, .end-icon {
        display: inline-block;
        float: left;
        width: px2rem(80px);
        height: px2rem(80px);
      }
      input {
        float: left;
        border: 0;
        width: calc(100vw - 2.2rem);
        margin-top: px2rem(16px);
        font-size: px2rem(40px);
        &::-webkit-input-placeholder{
          color: #ccc;
        }
      }
      .end-icon {
        float: right;
      }
    }
  }

  .buttons {
    text-align: center;
    .login {
      margin-top: px2rem(30px);
      border: 0;
      background: #dc3b40;
      color: #fff;
      font-size: px2rem(40px);
      border-radius: 5px;
      width: px2rem(700px);
      height: px2rem(80px);
      &:active {
        background: #c71919;
      }
    }
    .otherBtn {
      margin-top: px2rem(20px);
      .reg, .forget {
        font-size: px2rem(30px);
        padding: 0 5px;
        color: #bbb;
      }
      .reg {
        color: #dc3b40;
      }
    }
  }

</style>
