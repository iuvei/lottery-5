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
          <DetaileTitle :msg="msg" />
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
            <span>北京,北京</span> | <span>不是我登录?</span>
          </p>
        </li>
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
    msg: '您的帐号安全级别为极低'
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

.content {
  margin-top: px2rem(100px);
  margin-bottom: px2rem(100px);
  overflow: hidden;
  background: #efeef4;

  .safeHeader {
    padding: px2rem(44px);
    width: 100%;
    background: linear-gradient(top,#4b4f6f,#2e304c);
    text-align: center;
    color: #7f83af;
    font-size: px2rem(32px);

    li:nth-child(1) {
      position: relative;
    }
  }
}
</style>

