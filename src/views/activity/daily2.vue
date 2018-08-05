<template>
<div class="upgrade">
	<div class="upgrade-top">
	<HeaderReg>
      <router-link slot="headleft" to="/activity">
        <van-icon name="arrow-left"/>
      </router-link>
      <span slot="headtitle">每日加奖</span>
      <span slot="headright"></span>
    </HeaderReg>

		<img src="./images/daily.png" alt="">
	<div class="upgrade-state">
			<em>昨日投注：<i>0</i></em>
			<em>当前等级：<i>未登录</i></em>
			<em>加奖比例：<i>0</i></em>
			<em>可得加奖<i>0</i></em>
		</div>
		<div class="upgrade-button">不可领取</div>
	</div>

	<!-- 表格开始 -->
	<h3 class="upgrade-grade">加奖比例</h3>
	<table cellspacing=0 cellpadding=0>
		<tr>
			<th>等级/投注额</th>
			<th>100+</th>
			<th>10000+</th>
			<th>200000+</th>
		</tr>
		<tr v-for="item in proportion" v-bind:key="item.id">
			<td>{{item.rank}}</td>
			<td>{{item.rank1}}</td>
			<td>{{item.rank2}}</td>
			<td>{{item.rank3}}</td>
		</tr>
	</table>
	<!-- 表格结束 -->

	<!-- 活动说明开始 -->
	<h3 class="intro">活动说明</h3>
	<p class="intro-detail">1、会员每晋升一个等级，都能获得奖励，最高可达38888元。<br> &nbsp;2、充值1元可获得1成长积分。<br> &nbsp;<br> &nbsp;例1：奥巴马从VIP1直接晋升到VIP4，他将能获得1+5+10=16元奖励。<br> &nbsp;例2：本拉登从VIP2直接晋升到VIP4，他将能获得5+10=15元奖励。</p>
	<!-- 活动说明结束 -->
</div>
</template>

<script>
import HeaderReg from '@/components/Navbar.vue'
export default {
	name:"daily2",
	components: {
      HeaderReg
	},
	data(){
		return{
			proportion:[
				{id:3,rank:"VIP3",rank1:"0.1%",rank2:"0.2%",rank3:"0.3%"},
				{id:4,rank:"VIP4",rank1:"0.2%",rank2:"0.3%",rank3:"0.4%"},
				{id:5,rank:"VIP5",rank1:"0.3%",rank2:"0.4%",rank3:"0.5%"},
				{id:6,rank:"VIP6",rank1:"0.4%",rank2:"0.5%",rank3:"0.6%"},
				{id:7,rank:"VIP7",rank1:"0.5%",rank2:"0.6%",rank3:"0.7%"},
				{id:8,rank:"VIP8",rank1:"0.6%",rank2:"0.7%",rank3:"0.8%"},
				{id:9,rank:"VIP9",rank1:"0.7%",rank2:"0.8%",rank3:"0.9%"}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
@import "./styles/upgrade.scss";

</style>
