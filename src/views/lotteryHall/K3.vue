<template>
  <div class="k3 clearfix">
    <HeaderReg bgcolor="#000">
      <router-link slot="headleft" to="lotteryHall">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle">用户注册</span>
    </HeaderReg>
    <div class="content">
      <div class="state">
        <div>
          <span>0730080期开奖号码</span>
          <div>k3-timebar</div>
        </div>
        <div>
          <span>0730081期投注截止</span>
          <div>k3-timebar</div>
        </div>
      </div>
      <div class="chose-wrap">
        <div class="chose-mag">
          猜3个开奖号相加的和，3-10为小，11-18为大。
        </div>
        <ul class="chose-list">
          <li class="chose-list-item">

          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderReg from '@/components/Navbar.vue'

  export default {
    name: 'k3',
    components: {
      HeaderReg
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/index.scss";

  .k3 {
    background: #317455;
    height: 100%;
    width: 100%;
  }
  .content {
    margin-top: px2rem(100px);
    margin-bottom: px2rem(100px);
    overflow: hidden;
  }
.state {
  color: #caebda;
  width: 100%;
  height: px2rem(130px);
  background-color: #22563f;
  border-top: 1px solid #426d5a;
  z-index: 102;
  box-sizing: border-box;
  overflow: hidden;
  &>div {
    float: left;
    width: 50%;
    height: 100%;
    border-right: 1px solid #164630;
    text-align: center;
    overflow: hidden;
    padding: px2rem(10px) 0;
    &>span {
      font-size: px2rem(32px);
    }
    &>div {
      height: px2rem(68px);
      line-height: px2rem(68px);
      font-size: px2rem(50px);
    }
  }
}
</style>
