<!--
  name: setQuestion
  desc: 个人中心 -> 安全中心 -> 设置密保问题
-->
<template>
  <div class="setQuestion">
    <HeaderRecharge>
      <router-link slot="headleft" to="/safeCenter">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle">设置密保问题</span>
    </HeaderRecharge>

    <ul class="content">
      <!-- 问题一/答案一 -->
      <li>
        <label for="question1">问题一</label>
        <select id="question1">
          <option value="0">点击选择密码问题</option>
          <option value="1">您的小学班主任是谁？</option>
          <option value="2">您的初中班主任是谁？</option>
          <option value="3">您的高中班主任是谁？</option>
          <option value="4">您最最喜欢的人是谁？</option>
          <option value="5">您喜欢的宠物叫什么？</option>
          <option value="6">您的出生地点在哪里？</option>
          <option value="7">您配偶的姓名叫什么？</option>
          <option value="8">您爷爷的姓名叫什么？</option>
          <option value="8">您爸爸的姓名叫什么？</option>
          <option value="10">您妈妈的姓名叫什么？</option>
        </select>
      </li>
      <li>
        <label for="answer1">答案</label>
        <input type="text" id="answer1" placeholder="请输入答案">
      </li>

      <!-- 问题二/答案二 -->
      <li>
        <label for="question2">问题二</label>
        <select id="question2">
          <option value="0">点击选择密码问题</option>
          <option value="1">您的小学班主任是谁？</option>
          <option value="2">您的初中班主任是谁？</option>
          <option value="3">您的高中班主任是谁？</option>
          <option value="4">您最最喜欢的人是谁？</option>
          <option value="5">您喜欢的宠物叫什么？</option>
          <option value="6">您的出生地点在哪里？</option>
          <option value="7">您配偶的姓名叫什么？</option>
          <option value="8">您爷爷的姓名叫什么？</option>
          <option value="8">您爸爸的姓名叫什么？</option>
          <option value="10">您妈妈的姓名叫什么？</option>
        </select>
      </li>
      <li>
        <label for="answer2">答案</label>
        <input type="text" id="answer2" placeholder="请输入答案">
      </li>

      <!-- 问题三/答案三 -->
      <li>
        <label for="question3">问题二</label>
        <select id="question3">
          <option value="0">点击选择密码问题</option>
          <option value="1">您的小学班主任是谁？</option>
          <option value="2">您的初中班主任是谁？</option>
          <option value="3">您的高中班主任是谁？</option>
          <option value="4">您最最喜欢的人是谁？</option>
          <option value="5">您喜欢的宠物叫什么？</option>
          <option value="6">您的出生地点在哪里？</option>
          <option value="7">您配偶的姓名叫什么？</option>
          <option value="8">您爷爷的姓名叫什么？</option>
          <option value="8">您爸爸的姓名叫什么？</option>
          <option value="10">您妈妈的姓名叫什么？</option>
        </select>
      </li>
      <li>
        <label for="answer3">答案</label>
        <input type="text" id="answer3" placeholder="请输入答案">
      </li>

      <!-- 安全密码 -->
      <li>
        <label for="safePwd">安全密码</label>
        <input type="text" id="safePwd" placeholder="请输入您的安全密码">
      </li>
    </ul>
    <div class="btn-wrapper">
      <button>确定</button>
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
      &:nth-child(1), &:nth-child(3), &:nth-child(5) {
        margin-top: px2rem(40px);
        &::after {
          content: none;
        }
      }
      &:nth-child(2), &:nth-child(4), &:nth-child(6), &:nth-child(7) {
        margin-bottom: px2rem(40px);
      }
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
