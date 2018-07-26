<template>
  <div class="register">
    <HeaderForget>
      <router-link slot="headleft" to="lotteryHall">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle">忘记密码</span>
    </HeaderForget>
    <div class="content">
      <div class="info">
        <div class="invite-code">
          <span class="front">账号</span>
          <input type="text" placeholder="请输入账号">
          <span class="end"></span>
        </div>
        <div class="invite-code">
          <span class="front">验证码</span>
          <input type="text" placeholder="请输入验证码">
          <span class="end"></span>
        </div>
      </div>
      <!--<div class="login">-->
        <!--<router-link to="/login">已有账号？立即登录</router-link>-->
      <!--</div>-->
      <div class="registe-btn">
        <button>确定</button>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderForget from '@/components/Navbar.vue'

  export default {
    name: 'forgetpwd',
    components: {
      HeaderForget
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/index.scss";

  .content {
    margin-top: px2rem(100px);
    margin-bottom: px2rem(100px);
    overflow: hidden;
  }
  .info {
    background: #fff;
    margin-top: px2rem(25px);
    @include onetoppx('.invite-code');
    @include onebottompx('.invite-code');

    .invite-code:nth-child(2):before, .invite-code:nth-child(3):before {
      border: 0;
    }
    .invite-code {
      height: px2rem(86px);
      display: flex;
      .front {
        flex: 2;
        margin-left: px2rem(10px);
        line-height: px2rem(86px);
        font-size: px2rem(35px);
      }

      input {
        flex: 6;
        float: left;
        border: 0;
        width: calc(100vw - 2.14rem);
        font-size: px2rem(35px);
        &::-webkit-input-placeholder{
          color: #ccc;
        }
      }
      .end {
        flex: 1;
      }
    }
  }

  .login {
    margin-top: px2rem(30px);
    margin-bottom: px2rem(30px);
    margin-right: px2rem(30px);
    overflow: hidden;
    a {
      float: right;
      font-size: px2rem(30px);
      color: #dc2e2e;
    }
  }
  .registe-btn {
    margin-top: px2rem(30px);
    text-align: center;
    button {
      border: 0;
      background: #dc3b40;
      color: #fff;
      font-size: px2rem(40px);
      border-radius: 5px;
      width: px2rem(680px);
      height: px2rem(80px);
      &:active {
        background: #c71919;
      }
    }
  }
</style>
