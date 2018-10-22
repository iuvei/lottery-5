<template>
  <div class="activity-content">
    <!-- 导航栏开始 -->
    <div class="top">
      <p>活动中心</p>
    </div>
    <!-- 导航栏结束 -->


    <div class="act-item" v-for="(item,index) in activities" @click="toPage(`/upgrade/${index}`)" v-bind:key="item.id">
      <div class="num">
        <div>{{item.id}}</div>
      </div>
      <div class="text">
        <strong>{{item.top1}}</strong>
        <p>{{item.bottom1}}</p>
      </div>
      <div class="act-icon">
        <i class="right-iconfont icon-youjiantou" style="color:#333"> </i>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderReg from '@/components/Navbar.vue'

  export default {
    name: "activity",
    components: {
      HeaderReg
    },
    data() {
      return {
        bgColor: [],
        activities: [
          {id: 1, top1: "晋级奖励", bottom1: "会员每晋升一个等级，都能获得奖励，最高可达38888元！"},
          {id: 2, top1: "每日加奖", bottom1: "每日加奖是根据会员昨日投注金额进行加奖，奖金无上限！"},
          {id: 3, top1: "微信解除限额", bottom1: "微信解除限额                               "},
          {id: 4, top1: "银行卡入款彩金", bottom1: "银行卡入款彩金                           "},
          {id: 5, top1: "广招代理，月赚百万", bottom1: "全新代理模式，实时结算               "},
          {id: 6, top1: "推荐好友", bottom1: "90彩票平台老会员每推荐一位好友注册充值，您将获得￥28元彩金！  查看详情"},
          {id: 7, top1: "90彩票抢红包", bottom1: "天天红包雨，最高8888元，还在等什么"},
          {id: 8, top1: "微信转账银行卡", bottom1: "凡是使用微信转账银行卡，单笔充值1000元以上的用户都可以享受1.2%返利，无需申请自动到账！"},
          {id: 9, top1: "支付宝转账银行卡", bottom1: "凡是使用支付宝转账银行卡，单笔充值1000元以上的用户都可以享受1.2%返利，无需申请自动到账！"},
          {id: 10, top1: "神秘彩金，不期而遇", bottom1: "90彩票平台将不定期派送神秘彩金给平台的会员"}
        ]
      }
    },
    methods: {
      toPage(link) {
        this.$router.push(link)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../styles/index";
  @import "./styles/main";

  .activity-content {
    margin-bottom:  px2rem(130px);;
    .top {
      p {
        /*margin: px2rem(20px) 0;*/
      }
    }
  }

  .act-item {
    width: 100%;
    height: px2rem(130px);
    /*line-height: px2rem(30px);*/
    padding: px2rem(20px) px2rem(40px);
    margin: px2rem(20px) 0;
    background-color: #fff;
    .num {
      display: inline-block;
      width: px2rem(100px);
      position: relative;
      bottom: px2rem(10px);
      div {
        width: px2rem(80px);
        height: px2rem(80px);
        line-height: px2rem(80px);
        background-color: #fe8580;
        border: 1px solid #fff;
        text-align: center;
        border-radius: 50%;
        color: #fff;
        font-size: px2rem(30px);
      }
    }
    .text {
      display: inline-block;
      max-width: 70%;
      vertical-align: middle;
      p {
        /*margin: px2rem(10px);*/
        padding: 0;
        overflow: hidden; //超出的文本隐藏
        text-overflow: ellipsis; //溢出用省略号显示
        white-space: nowrap; //溢出不换行
      }
      strong {
        font-size: px2rem(34px);
      }
    }
    .act-icon {
      display: inline-block;
      width: px2rem(50px);
    }
  }
  .act-item:nth-child(2) {
    .num {
      div {
        background-color: #2ed57b!important;
      }
    }
  }
  .act-item:nth-child(3) {
    .num {
      div {
        background-color: #2ec3d5!important;
      }
    }
  }
  .act-item:nth-child(4) {
    .num {
      div {
        background-color: #2e85d5!important;
      }
    }
  }
  .act-item:nth-child(5) {
    .num {
      div {
        background-color: #d52ebe!important;
      }
    }
  }
  .act-item:nth-child(6) {
    .num {
      div {
        background-color: #d52e88!important;
      }
    }
  }
  .act-item:nth-child(7) {
    .num {
      div {
        background-color: #d52e4a!important;
      }
    }
  }
  .act-item:nth-child(8) {
    .num {
      div {
        background-color: #64d52e!important;
      }
    }
  }
  .act-item:nth-child(9) {
    .num {
      div {
        background-color: #fe8580!important;
      }
    }
  }
  .act-item:nth-child(10) {
    .num {
      div {
        background-color: #2ec3d5!important;
      }
    }
  }
  .act-item:nth-child(11) {
    .num {
      div {
        background-color: #d52ebe!important;
      }
    }
  }

</style>

