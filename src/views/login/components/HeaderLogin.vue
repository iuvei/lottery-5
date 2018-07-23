<template>
  <div class="header-login">
    <header class="head">
      <router-link to="lotteryHall"><van-icon class="back-icon" name="arrow-left" /></router-link>
      <span class="title">用户登陆</span>
      <span class="customer"></span>
    </header>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../../styles/index";
  .head {
    position: fixed;
    top: 0;
    width: 100%;
    height: px2rem(100px);
    text-align: center;
    color: #fff;
    background: #dc3b40;
    display: flex;
    .title, .back-icon {
      color: #fff;
      line-height: px2rem(100px);
      font-size: px2rem(40px);
    }
    .back-icon, .customer {
      flex: 1;
      display: inline-block;
      width: px2rem(100px);
      height: px2rem(100px);
    }
    .title {
      flex: 6;
    }
  }
</style>
