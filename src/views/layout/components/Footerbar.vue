<template>
  <div class="footerbar">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop" to="/lotteryHall">大厅</van-tabbar-item>
      <van-tabbar-item icon="records" to="/activity">活动</van-tabbar-item>
      <van-tabbar-item icon="chat">发现</van-tabbar-item>
      <van-tabbar-item icon="gold-coin" to="/home">我的</van-tabbar-item>
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

</style>
