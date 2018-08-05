<!--
  投注记录
-->
<template>
  <div class="noteRecord">
    <Navbar>
      <router-link slot="headleft" to="home">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle" class="btn-group">
        <button :class="{'recordType': recordType==='noteRecord'}" @click="recordType='noteRecord'">投注记录</button><button :class="{'recordType': recordType==='chaseNumRecord'}" @click="recordType='chaseNumRecord'">追号记录</button>
      </span>
      <span slot="headright" @click="show=true">
        <span class="whichDay">今天<van-icon name="success" /></span>
      </span>
    </Navbar>

    <div class="content">
      <!-- 投注记录 -->
      <ul class="isPrize" v-if="recordType==='noteRecord'">
        <li :class="{'on': on===1}" @click="on=1">全部</li>
        <li :class="{'on': on===2}" @click="on=2">已开奖</li>
        <li :class="{'on': on===3}" @click="on=3">未开奖</li>
        <li :class="{'on': on===4}" @click="on=4">等待开奖</li>
      </ul>
      <!-- 投注记录 end -->

      <!-- 追号记录 -->
      <ul class="isPend" v-if="recordType==='chaseNumRecord'">
        <li :class="{'on': on===1}" @click="on=1">全部</li>
        <li :class="{'on': on===2}" @click="on=2">未开始</li>
        <li :class="{'on': on===3}" @click="on=3">进行中</li>
        <li :class="{'on': on===4}" @click="on=4">已结束</li>
      </ul>
      <!-- 追号记录 end -->
    </div>

    <!-- 弹出层 -->
    <div class="popup">
      <van-popup v-model="show" position="bottom">
        <li>今天</li>
        <li>昨天</li>
        <li>七天</li>
        <li @click="show=false">取消</li>
      </van-popup>
    </div>
    <!-- 弹出层 end -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'noteRecord',
  components: {
    Navbar
  },
  data () {
    return {
      recordType: 'noteRecord',
      on: 1,
      show: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";

// 头部的按钮
.btn-group button {
  padding: 0;
  width: px2rem(208px);
  height: px2rem(64px);
  background: #dc3b40;
  border: 1px solid #ffffff;
  font-size: px2rem(28px);
  color: #ffffff;
  &:nth-child(1) {
    border-radius: 3px 0 0 3px;
  }
  &:nth-child(2) {
    border-radius: 0 3px 3px 0;
  }
  &.recordType {
    background: #ffffff;
    color: #dc3b40;
  }
}
// 头部的按钮 end

// 哪天
.whichDay {
  font-size: px2rem(30px);
}
// 哪天 end

// 主体样式
@include onebottompx('.isPrize');
@include onebottompx('.isPend');
.content {
  margin-top: px2rem(100px);
  margin-bottom: px2rem(100px);
  overflow: hidden;
  background: #efeef4;
  
  .isPrize, .isPend {
    display: flex;
    background: #f3f3f3;
    text-align: center;
    li {
      flex: 1;
      line-height: px2rem(92px);
      font-size: px2rem(32px);
      &.on {
        color: #da393e;
        border-bottom: 2px solid #da393e;
      }
    }
  }
}

// 弹出层
@include onebottompx('.popup li', 'bottom', 'after', #ededed);
.popup{
  li {
    margin: 0;
    padding: px2rem(30px);
    list-style: none;
    font-size: px2rem(40px);
    text-align: center;
    &:last-child {
      border-top: px2rem(30px) solid #efeef4;
    }
  }
}
// 弹出层
</style>

