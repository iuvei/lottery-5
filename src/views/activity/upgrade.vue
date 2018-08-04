<template>
<div class="upgrade">
	<div class="upgrade-top">
	<Navbar>
    	<span slot="headtitle">{{test}}</span>
  	</Navbar>
	
	<!-- <header class="top">
		<span>晋级奖励</span>
		<div class="iconfont back" style="display: none;"></div> 
		<a href="/activity" class="iconfont back" style=""></a> 
		<a href="/service" class="right" style="display: none;">客服</a>
	</header> -->



		<img src="./images/upgrade-banner.png" alt="">
	<div class="upgrade-state">
			<em>当前等级：<i>未登录</i></em>
			<em>晋级奖励：<i>0</i></em>
		</div>
		<div class="upgrade-button">不可领取</div>
	</div>

	<!-- 表格开始 -->
	<h3 class="upgrade-grade">晋级机制</h3>
	<table cellspacing=0 cellpadding=0>
		<tr>
			<th>等级</th>
			<th>成长积分</th>
			<th>晋级奖励</th>
			<th>跳级奖励</th>
		</tr>
		<tr v-for="item in grade" v-bind:key="item.id">
			<td>{{item.rank}}</td>
			<td>{{item.point}}</td>
			<td>{{item.reward}}</td>
			<td>{{item.jump}}</td>
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
import Navbar from '@/components/Navbar.vue'
export default {
	name:"upgrade",
	components: {
      Navbar
	},
	data(){
		return{
			grade:[
				{id:1,rank:"VIP1",point:0,reward:0,jump:0},
				{id:2,rank:"VIP2",point:10,reward:1,jump:1},
				{id:3,rank:"VIP3",point:200,reward:5,jump:6},
				{id:4,rank:"VIP4",point:1000,reward:10,jump:16},
				{id:5,rank:"VIP5",point:10000,reward:58,jump:74},
				{id:6,rank:"VIP6",point:50000,reward:318,jump:392},
				{id:7,rank:"VIP7",point:250000,reward:1688,jump:2080},
				{id:8,rank:"VIP8",point:1000000,reward:6888,jump:8968},
				{id:9,rank:"VIP9",point:5000000,reward:38888,jump:47856}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
@import "@/styles/activity/upgrade.scss";



</style>
