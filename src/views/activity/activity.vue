<template>
    <div class="activity-content">
      <div class="act-item" v-for="(item,index) in activities" @click="toPage(`/upgrade/${index}`)" v-bind:key="item.id">
        <a href="#"> 
          //左侧图标
          <div class="num">
            <i>{{item.id}}</i>
          </div>
          //中间介绍
          <div class="text">
            <strong>{{item.top1}}</strong>
            <p>{{item.bottom1}}</p>
          </div>
          //右箭头
          <div class="act-icon">
            <i class="right-iconfont icon-youjiantou" style="color:#333"></i>
          </div>
        </a>
      </div>
    </div>
</template>

<script>
import HeaderReg from '@/components/Navbar.vue'
export default {
  name:"activity",
  components:{
    HeaderReg
  },
  data(){
    return{
      activities:[
        {id:1,top1:"晋级奖励",bottom1:"会员每晋升一个等级，都能获得奖励，最高可达38888元！"},
        {id:2,top1:"每日加奖",bottom1:"每日加奖是根据会员昨日投注金额进行加奖，奖金无上限！"},
        {id:3,top1:"微信解除限额",bottom1:"微信解除限额                               "},
        {id:4,top1:"银行卡入款彩金",bottom1:"银行卡入款彩金                           "},
        {id:5,top1:"广招代理，月赚百万",bottom1:"全新代理模式，实时结算               "},
        {id:6,top1:"推荐好友",bottom1:"90彩票平台老会员每推荐一位好友注册充值，您将获得￥28元彩金！  查看详情"},
        {id:7,top1:"90彩票抢红包",bottom1:"天天红包雨，最高8888元，还在等什么"},
        {id:8,top1:"微信转账银行卡",bottom1:"凡是使用微信转账银行卡，单笔充值1000元以上的用户都可以享受1.2%返利，无需申请自动到账！"},
        {id:9,top1:"支付宝转账银行卡",bottom1:"凡是使用支付宝转账银行卡，单笔充值1000元以上的用户都可以享受1.2%返利，无需申请自动到账！"},
        {id:10,top1:"神秘彩金，不期而遇",bottom1:"90彩票平台将不定期派送神秘彩金给平台的会员"}
      ]
    }
  },
  methods:{
    toPage(link) {
        this.$router.push(link)
      }
  }
}
</script>

<style lang="scss" scoped>
@import "../../styles/index";
@import "./styles/main";
</style>

