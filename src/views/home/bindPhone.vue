<!--
  name: bindPhone
  desc: 个人中心 -> 头像/个人信息 -> 手机
-->
<template>
  <div class="bindPhone">
    <!--头部-->
    <Navbar>
      <router-link slot="headleft" to="/safeCenter">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle" class="btn-group">绑定密保手机</span>
    </Navbar>
    <!--头部 end-->

    <!--content-->
    <ul class="content">
      <li>
        <label for="phone">手机号</label>
        <input type="text" id="phone" placeholder="请输入您要绑定的手机号码">
      </li>
      <li>
        <label for="code">验证码</label>
        <input type="text" id="code" placeholder="输入验证码">
        <span>发送验证码</span>
      </li>
      <li>
        <label for="safePwd">安全密码</label>
        <input type="password" id="safePwd" placeholder="请输入您的安全密码">
      </li>
      <li>
        <button>确定</button>
      </li>
    </ul>
    <!--content end-->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import { mapGetters } from 'vuex'


export default {
  name: 'bindPhone',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
  @import "@/styles/index.scss";

  @include onetoppx('.content li');
  @include onebottompx('.content li:nth-child(3)');
  .content {
    margin-top: px2rem(100px);
    margin-bottom: px2rem(100px);
    overflow: hidden;
    background: #efeef4;
    font-size: px2rem(34px);
    li {
      padding: px2rem(30px) px2rem(20px);
      background: #ffffff;
      label {
        display: inline-block;
        width: px2rem(180px);
      }
      input {
        border: none;
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
      &:nth-child(1) {
        margin-top: px2rem(30px);
        input {
          width: 70%;
        }
      }
      &:nth-child(2) {
        input {
          width: 45%;
        }
      }
      &:nth-child(3) {
        margin-bottom: px2rem(30px);
        input {
          width: 70%;
        }
      }
      &:nth-child(4):before {
        content: none;
      }
      &:nth-child(4) {
        text-align: center;
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
    }
  }
</style>

