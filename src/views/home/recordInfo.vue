<!--
  name: noteRecord
  desc: 个人中心 -> 投注记录
-->
<template>
  <div class="noteRecord">
    <Navbar>
      <router-link slot="headleft" to="/noteRecord">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle" class="btn-group">
        注单详情
      </span>
      <span slot="headright">
      </span>
    </Navbar>

    <div class="content">
      <div class="tzHead">
        <i v-if="resData.sname.includes('pk10')" style="color: #f22751" class="fl iconfont icon-pk"></i>
        <i v-if="resData.sname.includes('syxw')" style="color: #218ddd" class="fl iconfont icon-xuan"></i>
        <i v-if="resData.sname.includes('ssc')" style="color: #f96e00" class="fl iconfont icon-shishicai"></i>
        <i v-if="resData.sname.includes('k3')" style="color: #e41404" class="fl iconfont icon-kuai3"></i>
        <div style="overflow: hidden">
          <span class="fl">{{resData.title}}</span>
          <span class="fr" style="color: red;">{{orderstatus(resData.status)}}</span>
        </div>
        <span>第{{resData.periodno}}期</span></div>
      <table class="table-detail">
        <tr>
          <td>投注时间</td>
          <td>{{resData.createtime}}</td>
        </tr>
        <tr>
          <td>投注单号</td>
          <td>{{resData.orderno}}</td>
        </tr>
        <tr>
          <td>投注金额</td>
          <td>¥{{resData.money}}元</td>
        </tr>
        <!--<tr v-if="resData.status == 2">-->
        <tr>
          <td>派送奖金</td>
          <td>¥{{resData.prize}}元</td>
        </tr>
        <!--<tr v-if="resData.status == 2">-->
        <tr>
          <td>开奖号码</td>
          <td id="lotteryopen">9,0,3,8,2</td>
        </tr>
        <tr></tr>
      </table>
      <section class="section-detail">
        <header>我的投注</header>
        <ul>
          <li></li>
          <li>
            <div>{{resData.betting_number}}</div>
            <!--<span>一星,定位胆,复式</span> <span class="fr">奖金：19.60</span>-->
          <li></li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'

  export default {
    name: 'noteRecord',
    components: {
      Navbar
    },
    data() {
      return {
        recordType: 'noteRecord',
        on: 4,
        actions: [
          {
            name: '今天',
            value: 0
          },
          {
            name: '昨天',
            value: 1
          },
          {
            name: '七日',
            value: 2
          }
        ],
        actionsValue: 0,
        show: false,
        resData: ''
      }
    },
    methods: {
      orderstatus(code) {
        let map = {0: '已撤单', 1: '待开奖', 2: '已中奖', 3: '未中奖'}
        for (let i in map) {
          if (i == code) {
            return map[i]
          }
        }
      },
      orderIcon(code) {
        let map = {k3: 'kuai3', ssc: 'shishicai', pk10: 'pk', syxw: 'xuan'}
        for (let i in map) {
          if (i == code) {
            return map[i]
          }
        }
      },
      async getUserMyOrderDetails() {
        let res = await this.axios.get(`/v1/User/MyOrderDetails?id=${this.$route.params.id}`)
        this.resData = res.data.data
        console.log(this.resData)
      },
    },
    mounted() {
      this.getUserMyOrderDetails()
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
  .fr {
    float: right;
  }

  .fl {
    float: left;
  }

  .tzHead {
    position: relative;
    overflow: hidden;
    margin-top: px2rem(30px);
    padding: px2rem(10px) px2rem(30px);
    i {
      display: inline-block;
      font-size: px2rem(100px);
      margin-right: px2rem(30px);
    }
    div span {
      & {
        margin-top: px2rem(10px);
      }
      font-size: px2rem(40px);
    }
    & > span {
      display: inline-block;
      color: #ccc;
      margin-top: px2rem(20px);
    }
  }
  .table-detail {
    padding: px2rem(10px) px2rem(30px);
    width: 100%;
    tr {
      height: 2.5em;
      font-size: px2rem(30px);
      line-height: 2.5em;
      border-bottom: 1px solid #ccc;
    }
  }
  .section-detail {
    padding: px2rem(10px) px2rem(30px);
    font-size: px2rem(30px);
    div {
      margin-top: px2rem(30px);
    }
  }
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
    background: #fff;

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
    .record {
      width: 100%;
      padding: 4px 5%;
      color: #000;
      border-bottom: 1px solid #ccc;
      .recordItem {
        overflow: hidden;
        background: #fff;
        .fl > span {
          font-size: px2rem(30px);
          color: #989898;
        }
        p {
          font-size: px2rem(30px);
          span {
            font-size: .8em;
            margin-left: .4em;
            color: #989898;
          }
        }
        .fr {
          line-height: px2rem(120px);
          span {
            font-size: px2rem(30px);
          }
        }
      }
    }
  }

  // 弹出层
  @include onebottompx('.popup li', 'bottom', 'after', #ededed);
  .popup {
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

