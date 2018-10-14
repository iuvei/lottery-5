<!--
  name: noteRecord
  desc: 个人中心 -> 投注记录
-->
<template>
  <div class="noteRecord">
    <Navbar>
      <router-link slot="headleft" to="home">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle" class="btn-group">
        <button :class="{'recordType': recordType==='noteRecord'}" @click="recordType='noteRecord'">投注记录</button><button
        :class="{'recordType': recordType==='chaseNumRecord'}" @click="recordType='chaseNumRecord'">追号记录</button>
      </span>
      <span slot="headright" @click="show=true">
        <span class="whichDay">今天<i class="iconfont icon-arrow"></i></span>
      </span>
    </Navbar>

    <div class="content">
      <!-- 投注记录 -->
      <ul class="isPrize" v-if="recordType==='noteRecord'">
        <li :class="{'on': on===4}" @click="recordTab(4)">全部</li>
        <li :class="{'on': on===2}" @click="recordTab(2)">已中奖</li>
        <li :class="{'on': on===3}" @click="recordTab(3)">未中奖</li>
        <li :class="{'on': on===1}" @click="recordTab(1)">等待开奖</li>
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

      <div class="record">
        <div class="recordItem" v-for="item in resData">
          <div class="fl"><p>{{item.title}}<span>￥{{item.money}}</span></p><span>{{item.createtime}}</span></div>
          <div class="fr"><strong v-if="item.status == 2" class="InMoney fr">+{{item.prize}}</strong><span class="InMoney fr">{{orderstatus(item.status)}}</span></div>
        </div>
      </div>
    </div>

    <!-- 弹出层 -->
    <div class="popup">
      <van-actionsheet
        v-model="show"
        :actions="actions"
        @select="onSelect"
      />
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
          if(i == code) {
            return map[i]
          }
        }
      },
      recordTab(code) {
        this.on = code
        if (code == 4) {
          this.getUserMyOrderList()
        } else {
          this.resData = this.resData.filter(v => {
            v.status == code
          })
        }
      },
      async getUserMyOrderList() {
        let res = await this.axios.get(`/v1/User/MyOrderList?time=${this.actionsValue.value}`)
        this.resData = res.data.data
      },
      onSelect(data) {
        this.actionsValue = data
      }
    },
    mounted() {
      this.getUserMyOrderList()
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
        .fl>span {
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

