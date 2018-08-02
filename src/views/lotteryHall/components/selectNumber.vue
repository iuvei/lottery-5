<template>
  <div class="selectNumber clearfix">
    <div class="title">
      <span>万位</span>
    </div>
    <dvi class="numberContent">
      <div class="number" v-for="item in 10" :class="{'number-active': item.active == true}">{{item}}</div>
    </dvi>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  @import "@/styles/index.scss";

  .selectNumber {

  }

  .title {
    float: left;
    span {
      font-size: px2rem(20px);
      width: px2rem(110px);
      display: block;
      text-align: center;
      line-height: 1.3em;
      color: #bbb39c;
      background: #eeebda;
      border: 1px solid #e3decf;
      border-radius: .3em;
      position: relative;
      z-index: 2;
      margin-top: px2rem(10px);
      padding: .2em .5em;
    }
  }

  .numberContent {
    float: left;
    width: px2rem(600px);
    .number {
      display: inline-block;
      width: px2rem(70px);
      height: px2rem(70px);
      line-height: px2rem(70px);
      text-align: center;
      color: #dc3b40;
      background: #faf9f6;
      border-radius: 50%;
      border: 1px solid #bfbfbf;
      font-size: px2rem(32px);
      margin: px2rem(10px) px2rem(25px);
    }
  }
  .number-active {
    background: #dc3b40;
    color: #fff;
    border: 1px solid #dc3b40;
  }
</style>
