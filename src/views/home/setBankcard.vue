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
      <span slot="headtitle">绑定银行卡</span>
    </HeaderRecharge>

    <ul class="content">
      <li>
        <label>选择银行</label>
        <select name="" id="">
          <option value="0">请选择银行</option>
          <option value="0">请选择银行</option>
        </select>
      </li>
      <li>
        <label>开户省</label>
        <select name="" id="">
          <option value="0">请选择开户省份</option>
          <option value="0">请选择银行</option>
        </select>
      </li>
      <li>
        <label>开户市</label>
        <select name="" id="">
          <option value="0">请选择开户城市</option>
          <option value="0">请选择银行</option>
        </select>
      </li>
      <li>
        <label>开户人姓名</label>
        <input type="text" placeholder="请输入您的安全密码" id="cardName" v-model="cardName">
      </li>
      <li>
        <label>银行卡号</label>
        <input type="text" placeholder="请输入您的安全密码" id="bankNum" v-model="bankNum">
      </li>
      <li>
        <label>确认卡号</label>
        <input type="text" placeholder="请输入您的安全密码" id="repeatNum" v-model="repeatNum">
      </li>
      <li>
        <label>安全密码</label>
        <input type="text" placeholder="请输入您的安全密码" id="safepwd" v-model="safepwd">
      </li>
    </ul>
    <div class="btn-wrapper">
      <button @click="setSafePwd">确定</button>
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
    data() {
      return {
        banks: ''
      }
    },
    methods: {
      async getBank() {
        let res = await this.axios.get('/v1/User/Bank')
        console.log(res)
      },
      async setSafePwd() {
        let res = await this.axios.post('/v1/User/SetSafePwd', {
          safepwd: this.safepwd,
          repeatpwd: this.repeatpwd
        })
        this.$dialog.alert({
          message: res.data.message
        });
      },
      toPage (src) {
        alert('验证密码正确后跳转到设置登录密码');
        this.$router.push('/setLoginPwd');
      }
    },
    mounted() {
      this.getBank()
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
      /*&:nth-child(1) {*/
        /*margin-top: px2rem(40px);*/
        /*&::after {*/
          /*content: none;*/
        /*}*/
      /*}*/
      /*&:nth-child(2) {*/
        /*margin-bottom: px2rem(40px);*/
      /*}*/
      label {
        display: inline-block;
        width: px2rem(180px);
      }
      select {
        width: 72%;
        border: none;
        outline: none;
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
      margin-top: px2rem(20px);
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
