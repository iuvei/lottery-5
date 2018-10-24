<template>
  <div class="footerbar">
    <van-tabbar v-model="active">
      <van-tabbar-item to="/lotteryHall">
        <i class="iconfont icon-shouye"></i>
        <span>大厅</span>
      </van-tabbar-item>
      <van-tabbar-item to="/activity">
        <i class="iconfont icon-gifs"></i>
        <span>活动</span>
      </van-tabbar-item>
      <van-tabbar-item to="/find">
        <i class="iconfont icon-faxian_"></i>
        <span>发现</span>
      </van-tabbar-item>
      <van-tabbar-item to="/home">
        <i class="iconfont icon-wode" style="font-size: 24px;"></i>
        <span>我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import { getActivePage } from "../../../utils/auth";

  export default {
    name: 'footerbar',
    data() {
      return {
        active: parseInt(getActivePage())
      }
    }
  }
</script>

<style lang="scss" scoped>
  .van-tabbar {
    background: #22292c;
  }
  .van-tabbar-item {
    color: #bbb;
  }
  .van-tabbar-item--active {
    color: #e54042
  }
  i {
    display: block;
    margin-bottom: 2px;
    font-size: 20px;
  }


</style>
