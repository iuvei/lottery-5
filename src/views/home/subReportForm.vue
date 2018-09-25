<!--
  name: subReportForm
  desc: 个人中心 -> 代理中心 -> 下级报表
-->
<template>
  <div class="agentReportForm">
    <Navbar>
      <router-link slot="headleft" to="/agentCenter">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle" class="btn-group">下级报表</span>
      <span slot="headright" @click="show=true">
        <span class="whichDay">今天<i class="iconfont icon-arrow"></i></span>
      </span>
    </Navbar>

    <div class="content">
      <table>
        <tr>
          <th>帐号</th>
          <th>类型</th>
          <th>报表人数</th>
          <th>盈利</th>
        </tr>
        <tr v-for="(item, index) in formList" :key="index">
          <td>{{item.accountNum}}</td>
          <td>{{item.style}}</td>
          <td>{{item.peopleNum}}</td>
          <td>{{item.profit}}</td>
        </tr>
      </table>
      <p class="tips" v-if="!formList.length">
        <van-icon name="points"/>
        <span>暂无记录</span>
      </p>
    </div>

    <!-- 弹出层 -->
    <div class="popup">
      <van-popup v-model="show" position="bottom">
        <li>今天</li>
        <li>昨天</li>
        <li>本月</li>
        <li>上月</li>
        <li @click="show=false">取消</li>
      </van-popup>
    </div>
    <!-- 弹出层 end -->
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'

  export default {
    name: 'subReportForm',
    data () {
      return {
        show: false,
        formList: [
          {
            accountNum: '帐号3242',
            style: '类型1',
            peopleNum: 10,
            profit: 1314.00
          }
        ]
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

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  /* 哪天 */
  .whichDay {
    font-size: px2rem(30px);
  }
  /* 哪天 end */

  // @include onetoppx('.agentHeader', 'top', 'before', #ffffff)
  .content {
    margin-top: px2rem(100px);
    overflow: hidden;
    background: #efeef4;

    table {
      width: 100%;
      background: #f3f3f3;
      font-size: px2rem(34px);
      color: #666666;
      tr {
        text-align: center;
        &:nth-child(1) {
          th {
            width: 25%;
            height: px2rem(88px);
            font-weight: 400;
          }
        }

        td {
          font-weight: 100;
          color: #333333;
          font-size: px2rem(28px);
        }
      }
    }

    p.tips {
      margin-top: px2rem(200px);
      text-align: center;
      font-size: px2rem(150px);
      color: #bbbbbb;
      span{
        display: block;
        font-size: px2rem(28px);
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
