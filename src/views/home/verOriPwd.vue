<!--
  name: verOriPwd
  desc: 个人中心 -> 安全中心 -> 验证原密码
-->
<template>
  <div class="verOriPwd">
    <HeaderRecharge>
      <router-link slot="headleft" to="/safeCenter">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle">验证原密码</span>
    </HeaderRecharge>

    <ul class="content">
      <li>
        <label for="oriPwd">原密码</label>
        <input type="text" placeholder="请输入当前所使用的密码" id="oriPwd" v-model="password">
      </li>
    </ul>
    <div class="btn-wrapper">
      <button @click="checkPwd">确定</button>
    </div>
  </div>
</template>

<script>
  import HeaderRecharge from '@/components/Navbar.vue'

  export default {
    name: 'weChatPay',
    data() {
      return {
        password: ''
      }
    },
    components: {
      HeaderRecharge
    },
    methods: {
      async checkPwd() {
        let res = await this.axios.post('/v1/User/CheckPwd', {password: this.password})
        if (res.data.data == 0) {
          this.$router.push('/setLoginPwd');
        } else {
          this.$dialog.alert({
            message: '密码错误'
          });
        }
      },
      toPage(src) {
        alert('验证密码正确后跳转到设置登录密码');
        this.$router.push('/setLoginPwd');
      }
    },
    mounted() {

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
        &::-webkit-input-placeholder {
          color: #cccccc;
        }
        &::-moz-placeholder {
          color: #cccccc;
        }
        &:-moz-placeholder {
          color: #cccccc;
        }
        &:-ms-input-placeholder {
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
