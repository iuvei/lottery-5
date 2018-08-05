<template>
    <div class="find-content">
      <!-- 导航栏开始 -->
      <div class="top">
        <ul>
          <li><a @click="toPage(`/find`)">中奖信息</a></li>
          <li><a @click="toPage(`/find-yesterday`)" class="current">昨日盈利榜</a></li>
        </ul>
      </div>
      <!-- 导航栏结束 -->

      <div class="act-item" v-for="(item,index) in finds" @click="toPage(`/player/${index}`)" v-bind:key="item.id">
        <a href="#">
          //左侧头像
          <div class="num">
			      <img v-bind:src="item.src">
		      </div>
          //中间介绍
          <div class="text">
            <p>
              <span>账号昵称：</span>
              <span>{{item.account}}</span><br>
              <span>昨日盈利：</span>
              <span>{{item.gain}}</span>
            </p>            
          </div>
          //右箭头
          <div class="act-icon" v-bind:class="item.yangshi">
            <span>{{item.right}}</span>
          </div>
        </a>
      </div>
    </div>
</template>

<script>
import HeaderReg from '@/components/Navbar.vue';

export default {
	name:"find-yesterday",
  components:{
    HeaderReg
  },
  data(){
    return{
		finds:[
			    {id:1,src:"./../../../static/images/player1.jpg",account:"龙翔阴霾",gain:"￥10000",right:"1",yangshi:"one"},
        	{id:2,src:"./../../../static/images/player2.jpg",account:"笑看江湖",gain:"￥9000",right:"2",yangshi:"two"},
        	{id:3,src:"./../../../static/images/player3.jpg",account:"阿郎",gain:"￥8000",right:"3",yangshi:"three"},
        	{id:4,src:"./../../../static/images/player4.jpg",account:"回本金",gain:"￥7000",right:"4",yangshi:"other"},
        	{id:5,src:"./../../../static/images/player5.jpg",account:"haha",gain:"￥6000",right:"5",yangshi:"other"},
        	{id:6,src:"./../../../static/images/player6.jpg",account:"哈哈",gain:"￥5000",right:"6",yangshi:"other"},
        	{id:7,src:"./../../../static/images/player7.jpg",account:"龙翔阴霾",gain:"￥4000",right:"7",yangshi:"other"},
        	{id:8,src:"./../../../static/images/player8.jpg",account:"龙翔阴霾",gain:"￥3000",right:"8",yangshi:"other"},
        	{id:9,src:"./../../../static/images/player9.jpg",account:"龙翔阴霾",gain:"￥2000",right:"9",yangshi:"other"},
        	{id:10,src:"./../../../static/images/player10.jpg",account:"龙翔阴霾",gain:"￥1000",right:"10",yangshi:"other"}
    ],
    one:"one",
    two:"two",
    three:"three",
    other:"other"
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
@import "./styles/find-yesterday";
</style>
