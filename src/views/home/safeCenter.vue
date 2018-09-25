<!--
  name: safeCenter
  desc: 个人中心 -> 安全中心
-->
<template>
  <div class="safeCenter">
    <Navbar>
      <router-link slot="headleft" to="home">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle" class="btn-group">安全中心</span>
    </Navbar>

    <div class="content">
      <div class="safeHeader">
        <li>
          <DetailTitle :msg="msg" />
        </li>
        <li>
          <van-icon name="like-o" />
          <van-icon name="like-o" />
          <van-icon name="like-o" />
          <van-icon name="like-o" />
          <van-icon name="like-o" />
        </li>
        <li>
          <p>
            上次登录: <span>2018-8-4 21:29</span>
          </p>
          <p>
            <span>北京,北京</span> | <span @click="toPage('/verOriPwd')">不是我登录?</span>
          </p>
        </li>
      </div>

      <div class="safeOptions">
        <li @click="toPage('/verOriPwd')">
          <span>修改登录密码</span>
          <span>修改<van-icon name="arrow" /></span>
        </li>
        <li @click="toPage('/setSafePwd')">
          <span>设置安全密码</span>
          <span>设置<van-icon name="arrow" /></span>
        </li>
        <li @click="toPage('/bindPhone')">
          <span>设置密保手机</span>
          <span>设置<van-icon name="arrow" /></span>
        </li>
        <li @click="toPage('/setQuestion')">
          <span>设置密保问题</span>
          <span>设置<van-icon name="arrow" /></span>
        </li>
        <li @click="toPage('/bindEmail')">
          <span>设置密保邮箱</span>
          <span>设置<van-icon name="arrow" /></span>
        </li>
        <li @click="toPage('/cardManage')">
          <span>银行卡管理</span>
          <span>设置<van-icon name="arrow" /></span>
        </li>
      </div>

      <div class="loginOut">
        <span>退出登录</span><van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import DetailTitle from '@/components/detail-title'

export default {
  name: 'safeCenter',
  components: {
    Navbar,
    DetailTitle
  },
  data () {
    return {
      msg: '您的帐号安全级别为极低'
    }
  },
  methods: {
    toPage (src) {
      this.$router.push(src)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";

ul, li {
  margin: 0;
  padding: 0;
  list-style: none
}


@include onetoppx('.content div');
@include onebottompx('.content div');
@include onebottompx('.safeOptions li');
.content {
  margin-top: px2rem(100px);
  margin-bottom: px2rem(100px);
  overflow: hidden;
  background: #efeef4;

  div {
    margin-bottom: px2rem(30px);
  }

  .safeHeader {
    padding: px2rem(44px);
    width: 100%;
    background: linear-gradient(top,#4b4f6f,#2e304c);
    border-top: 1px solid #ffffff;
    text-align: center;
    font-size: px2rem(32px);
    color: #ffffff;

    &::before {
      content: normal;
    }
    div {
      &::after, &::before {
        content: normal;
      }
    }

    li:nth-child(1) {
      position: relative;
      color: #7f83af;
    }

    li:nth-child(2) {
      margin: px2rem(30px) 0;
      color: #f90;
      font-size: px2rem(60px);
    }

    li:nth-child(3) {
      color: #878996;
      font-size: px2rem(30px);
    }
  }

  .safeOptions {
    background: #ffffff;
    font-size: px2rem(36px);
    color: #333333;
    li {
      padding: px2rem(18px) 0;
      margin: 0 px2rem(36px);
      line-height: px2rem(60px);
      span:nth-child(2) {
        float: right;
        color: #cccccc;
        i {
          font-size: px2rem(28px);
        }
      }

      &:last-child {
        &::after {
          content: normal;
        }
      }
    }
  }

  .loginOut {
    padding: px2rem(18px) px2rem(36px);
    background: #ffffff;
    line-height: px2rem(60px);
    font-size: px2rem(32px);
    color: #ff0000;

    i {
      float: right;
      color: #cccccc;
      line-height: px2rem(60px);
      font-size: px2rem(28px);
    }
  }
}
</style>

