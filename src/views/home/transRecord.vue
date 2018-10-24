<!--
  name: transRecord
  desc: 个人中心 -> 交易记录
-->
<template>
  <div class="transRecord">
    <Navbar>
      <router-link slot="headleft" to="home">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle">交易记录</span>
      <span slot="headright" @click="show=true">
        <span class="whichDay">今天<i class="iconfont icon-arrow"></i></span>
      </span>
    </Navbar>

    <div class="content">
      <ul class="record-type">
        <li :class="{'on': on===1}" @click="on=1">所有类型</li>
        <li :class="{'on': on===2}" @click="on=2">提现记录</li>
        <li :class="{'on': on===3}" @click="on=3">充值记录</li>
      </ul>
    </div>
    <div class="main" v-show="on === 1">
      <div class="content-item" v-for="(item,index) in allData" :key="index">
        <van-row>
          <van-col span="22">
            <span class="title">{{item.notes}}</span>
            <p class="titlep">{{item.createtime}}</p>
          </van-col>
          <van-col span="2"><span class="tips">{{item.money}}</span></van-col>
        </van-row>
      </div>
    </div>

    <!-- 弹出层 -->
    <div class="popup">
      <van-popup v-model="show" position="bottom">
        <li @click="getAllData(0)">今天</li>
        <li @click="getAllData(1)">昨天</li>
        <li @click="getAllData(2)">七天</li>
        <li @click="show=false">取消</li>
      </van-popup>
    </div>
    <!-- 弹出层 end -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'transRecord',
  components: {
    Navbar
  },
  data () {
    return {
      on: 1,
      show: false,
      timer: 0,
      allData: []
    }
  },
  created() {
    this.getAllData(2)
  },
  methods: {
    async getAllData(value) {
      let params = {
        time: value
      }
      this.show = false
      let res = await this.axios.get(`v1/User/MoneyLog`, {params})
      console.log(res,'返回数据时空')
      this.allData = res.data.data
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";

// 哪天
.whichDay {
  font-size: px2rem(30px);
}
// 哪天 end

@include onebottompx('.record-type');
.content {
  margin-top: px2rem(100px);
  margin-bottom: px2rem(20px);
  overflow: hidden;
  background: #efeef4;

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
.main {
  padding: px2rem(20px);
  .title {
    font-size: px2rem(32px);
  }
  .titlep {
    color: #ccc;
    margin: px2rem(16px) 0!important;
    padding: 0;
  }
  .tips {
    color: #090;
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

