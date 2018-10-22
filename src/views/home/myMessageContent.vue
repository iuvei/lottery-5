<!--
 name: myMessage
 desc: 个人中心 -> 我的消息
-->
<template>
	<div class="myMessage">
		<Navbar>
			<router-link slot="headleft" to="/myMessage">
				<van-icon name="arrow-left"/>
			</router-link>
			<span slot="headtitle" class="btn-group">
        公告内容
      </span>
		</Navbar>

		<div class="content">
			<!-- 公告 notice -->
			<ul class="notice">
				<li :key="index" @click="toNoticeContent(index)">
					<span>{{notices[contentIndex].title}}</span>
					<span>{{getLocalTime(notices[contentIndex].createtime)}}</span>
					<span style="text-align: center">{{notices[contentIndex].content}}</span>
				</li>
				<!--<p v-if="notices.length">已显示全部公告</p>-->
				<p class="tips" v-if="!notices.length">
					<van-icon name="points"/>
					<span>暂无公告</span>
				</p>
			</ul>
		</div>

	</div>
</template>

<script>
	import Navbar from '@/components/Navbar.vue'
	import { getLocalTime } from '../../utils/filter'

	export default {
		name: 'myMessage',
		components: {
			Navbar
		},
		data () {
			return {
				messageType: 'notice',
				notices: [],
				letters: [],
				contentIndex: parseInt(this.$route.params.id)
			}
		},
		methods: {
			async getNotice() {
				let res = await this.axios.get('/v1/Notice')
				this.notices = res.data.data
			},
			getLocalTime(ns) {
				return getLocalTime(ns)
			}
		},
		mounted() {
			this.getNotice()
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/styles/index.scss";
  .myMessage {
    height: calc(100vh - 4.3em)!important;
    background-color: #fff;
  }

	// 头部的按钮
	.btn-group {
		display: inline-block;
		height: px2rem(100px);
		line-height: px2rem(100px);
	}

	// 头部的按钮 end

	@include onetoppx('tr')
	// 头部的按钮
	.btn-group button {
		padding: 0;
		width: px2rem(208px);
		height: px2rem(64px);
		line-height: px2rem(64px);
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
		&.messageType {
			background: #ffffff;
			color: #dc3b40;
		}
	}
	// 头部的按钮 end

	@include onebottompx('.notice li');
	@include onebottompx('.letter li');
	.content {
		margin-top: px2rem(100px);
		margin-bottom: px2rem(100px);
		overflow: hidden;
		background: #efeef4;

		& ul {
			background: #ffffff;
		}

		ul.notice, ul.letter {
			overflow: hidden;
			font-size: px2rem(30px);
			li {
				padding: px2rem(18px) 0;
				margin: 0 px2rem(36px) px2rem(10px);
				span {
					display: block;
					line-height: px2rem(50px);
					&:nth-child(2) {
						color: #989898;
					}
				}
			}
			p {
				margin-top: px2rem(100px);
				text-align: center;
				color: #4c4c4c;
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
	}
</style>

