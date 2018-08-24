<!--
  name: noteDetail
  desc: 个人中心 -> 代理中心 -> 投注明细
-->

<template>
  <div class="memberManage">
    <Navbar>
      <router-link slot="headleft" to="/agentCenter">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle" class="btn-group">投注明细</span>
      <span slot="headright" @click="show=true">
        <span class="whichDay">今天<i class="iconfont icon-arrow"></i></span>
      </span>
    </Navbar>

    <div class="content">
      <!-- 查询 -->
      <div class="search">
        <p>
          <input type="text" placeholder="下级投注查询">
          <button><van-icon name="arrow" /></button>
        </p>
      </div><!-- 查询 end -->

      <ul class="record-type">
        <li :class="{'on': on===1}" @click="on=1">全部</li>
        <li :class="{'on': on===2}" @click="on=2">已中奖</li>
        <li :class="{'on': on===3}" @click="on=3">未中奖</li>
        <li :class="{'on': on===4}" @click="on=4">等待开奖</li>
      </ul>
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
    name: 'noteDetail',
    data () {
      return {
        on: 1,
        show: false
      }
    },
    components: {
      Navbar
    },
    methods: {
      toPage (src) {
        this.$router.push(src);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/index.scss";

  @include onebottompx('.record-type');
  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  // 哪天
  .whichDay {
    font-size: px2rem(30px);
  }
  // 哪天 end

  .content {
    margin-top: px2rem(100px);
    margin-bottom: px2rem(100px);
    overflow: hidden;
    background: #efeef4;

    div.search {
      p {
        position: relative;
        margin: px2rem(24px);
        padding: px2rem(14px);
        border-radius: 5px;
        background: #ffffff;
        font-size: px2rem(30px);
        input {
          border: none;
          background: transparent;
          &::-webkit-input-placeholder{
            color:#cccccc;
          }
        }
        button {
          position: absolute;
          top: px2rem(6px);
          right: px2rem(14px);
          padding: px2rem(2px);
          width: px2rem(50px);
          height: px2rem(50px);
          border: none;
          border-radius: px2rem(5px);
          background: #dc3b40;
          color: #ffffff;
          i {
            font-weight: 700;
            font-size: px2rem(24px);
          }
        }
      }
    }

    .record-type {
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
</style>
