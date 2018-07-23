<template>
  <div class="lottery-hall">
    <Navbar slot="navbar">
      <span class="head-title" slot="headtitle"><img src="./images/mobile_logo.png" alt=""></span>
    </Navbar>
    <div class="content">12222222222222222222222222</div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'

  export default {
    name: 'lotteryHall',
    components: {
      Navbar
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/index";
  .head-title {
    img {
      height: px2rem(70px);
      width: auto;
      margin-top: px2rem(20px);
    }
  }
  .content {
    margin-top: px2rem(100px);
    margin-bottom: px2rem(100px);
  }
</style>
