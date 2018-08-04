<template>
    <div class="find-content">
      <div class="act-item" v-for="(item,index) in finds" @click="toPage(`/player/${index}`)" v-bind:key="item.id">
        <a href="#">
          //左侧头像
          <div class="num">
			<img v-bind:src="item.src">
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
import HeaderReg from '@/components/Navbar.vue';

export default {
	name:"find",
  components:{
    HeaderReg
  },
  data(){
    return{
		finds:[
			{id:1,src:"images/player1.jpg",top1:"晋级奖励",bottom1:"会员每晋升一个等级，都能获得奖励，最高可达38888元！"},
        	{id:2,src:"images/player2.jpg",top1:"每日加奖",bottom1:"每日加奖是根据会员昨日投注金额进行加奖，奖金无上限！"},
        	{id:3,src:"images/player3.jpg",top1:"微信解除限额",bottom1:"微信解除限额                               "},
        	{id:4,src:"images/player4.jpg",top1:"银行卡入款彩金",bottom1:"银行卡入款彩金                           "},
        	{id:5,src:"images/player5.jpg",top1:"广招代理，月赚百万",bottom1:"全新代理模式，实时结算               "},
        	{id:6,src:"images/player6.jpg",top1:"推荐好友",bottom1:"90彩票平台老会员每推荐一位好友注册充值，您将获得￥28元彩金！  查看详情"},
        	{id:7,src:"images/player7.jpg",top1:"90彩票抢红包",bottom1:"天天红包雨，最高8888元，还在等什么"},
        	{id:8,src:"images/player8.jpg",top1:"微信转账银行卡",bottom1:"凡是使用微信转账银行卡，单笔充值1000元以上的用户都可以享受1.2%返利，无需申请自动到账！"},
        	{id:9,src:"images/player9.jpg",top1:"支付宝转账银行卡",bottom1:"凡是使用支付宝转账银行卡，单笔充值1000元以上的用户都可以享受1.2%返利，无需申请自动到账！"},
        	{id:10,src:"images/player10.jpg",top1:"神秘彩金，不期而遇",bottom1:"90彩票平台将不定期派送神秘彩金给平台的会员"}
		]
	}
  },
}
</script>

<style lang="scss" scoped>
@import "../../styles/index";
.act-item{
  background:#fff;
  color:#333;
  margin:px2rem(26px) 0;
  overflow:hidden;
  a{
    display:flex;
    width:100%;
    padding:px2rem(21px) 0;
    background:transparent;
    text-decoration:none;
    overflow:hidden;
    .num{
      flex:2;
      padding-top:px2rem(27px);
      margin-left:px2rem(38px);
      margin-right:px2rem(23px);
      width:px2rem(150px);
      height:px2rem(87px);
      text-align:center;
      line-height:1;
      color:#333;
    }
    .text{
      width:px2rem(469px);
      flex:7;
      strong{
        display:block;
        font-size:px2rem(34px);
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-weight: 400;
        line-height:1.5em;
        color:#333;
      }
      p{
        margin:0;
        color:#686868;
        font-size:px2rem(30px);
        white-space: pre;
        text-overflow: ellipsis;
        line-height:1.5em;
        overflow: hidden;
      
      }
    }
    .act-icon{
      flex:1;
      margin-top:px2rem(27px);
      margin-right:px2rem(38px);
    }
  }
}
</style>
