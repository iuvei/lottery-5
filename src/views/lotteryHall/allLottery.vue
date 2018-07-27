<template>
  <div class="register">
    <HeaderReg>
      <router-link slot="headleft" to="lotteryHall">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle"></span>
    </HeaderReg>
    <div class="content">
      <div class="tab">
        <div class="tab-item" v-for="item in tabList">
          {{item}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderReg from '@/components/Navbar.vue'

  export default {
    name: 'register',
    components: {
      HeaderReg
    },
    data() {
      return {
        tabList: [
          {icon: '11', name: '全部彩种'},
          {icon: '11', name: '全部彩种'},
          {icon: '11', name: '全部彩种'},
          {icon: '11', name: '全部彩种'},
          {icon: '11', name: '全部彩种'},
          {icon: '11', name: '全部彩种'}
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/index.scss";

  .content {
    background: red;
    margin-top: px2rem(100px);
    /*margin-bottom: px2rem(100px);*/
    overflow: hidden;
  }
  .tab {
    background: #00c000;
    height: px2rem(140px);
    .tab-item {
      background: #6c6c6c;
      display: inline-block;
      width: px2rem(216px);
      height: 100%;
    }
  }
</style>
