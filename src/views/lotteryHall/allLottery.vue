<template>
	<div class="register">
		<HeaderReg>
			<router-link slot="headleft" to="lotteryHall">
				<van-icon name="arrow-left"/>
			</router-link>
			<span slot="headtitle">全部彩种</span>
		</HeaderReg>
		<div class="content">
			<div class="tab">
				<div class="tab-item" :class="{'active': activeFlag == 'all'}" @click="selectLotteryType()">
					<i class="iconfont icon-kuai3"></i>
					<span>全部彩种</span>
				</div>
				<div class="tab-item" :class="{'active': item.name == activeFlag}" v-for="item in lotteryList"
				     @click="selectLotteryType(item)">
					<i v-if="item.label == 'syx5'" class="iconfont icon-xuan"></i>
					<i v-if="item.label == 'pk10'" class="iconfont icon-pk"></i>
					<i v-if="item.label == 'ssc'" class="iconfont icon-shishicai"></i>
					<i v-if="item.label == 'k3'" class="iconfont icon-kuai3"></i>
					<span>{{item.name}}</span>
				</div>
			</div>
			<div class="lottery">
				<div class="lottery-item" v-for="(item, index) in selectedLottery"
				     @click="toPage(`/${item.type}/${item.id}`)">
					<div class="lottery-icon">
						<i v-if="item.type == 'syx5'" style="color: #218ddd" class="iconfont icon-xuan"></i>
						<i v-if="item.type == 'pk10'" style="color: #f22751" class="iconfont icon-pk"></i>
						<i v-if="item.type == 'ssc'" style="color: #f96e00" class="iconfont icon-shishicai"></i>
						<i v-if="item.type == 'k3'" style="color: #e41404" class="iconfont icon-kuai3"></i></div>
					<div class="lottery-name">{{item.name}}</div>
					<div class="lottery-number">{{item.number}}</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	import HeaderReg from '@/components/Navbar.vue'

	export default {
		name: 'register',
		components: {
			HeaderReg
		},
		data() {
			return {
				lotteryList: [
					{
						icon: '11', name: '快3', label: 'k3', data: [
						{type: 'k3', name: '江苏快3', number: '全天82期', value: 1},
						{type: 'k3', name: '安徽快3', number: '全天82期', value: 2},
						{type: 'k3', name: '广西快3', number: '全天82期', value: 3},
						{type: 'k3', name: '湖北快3', number: '全天82期', value: 4},
						{type: 'k3', name: '北京快3', number: '全天82期', value: 5},
						{type: 'k3', name: '河北快3', number: '全天82期', value: 6},
						{type: 'k3', name: '甘肃快3', number: '全天82期', value: 7},
						{type: 'k3', name: '上海快3', number: '全天82期', value: 8},
						{type: 'k3', name: '贵州快3', number: '全天82期', value: 9},
						{type: 'k3', name: '吉林快3', number: '全天82期', value: 10},
						{type: 'k3', name: '大众快3', number: '全天82期', value: 11},
					]
					},
					{
						icon: '11', name: '时时彩', label: 'ssc',data: [
						{type: 'ssc', name: '重庆时时彩', number: '全天82期', value: 1},
						{type: 'ssc', name: '新疆时时彩', number: '全天82期', value: 2},
						{type: 'ssc', name: '天津时时彩', number: '全天82期', value: 3},
						{type: 'ssc', name: '大众时时彩', number: '全天82期', value: 4}
					]
					},
					{
						icon: '11', name: '11选5',label: 'syx5', data: [
						{type: 'syx5', name: '广东11选5', number: '全天82期', value: 1},
						{type: 'syx5', name: '上海11选5', number: '全天82期', value: 2},
						{type: 'syx5', name: '山东11选5', number: '全天82期', value: 3},
						{type: 'syx5', name: '江西11选5', number: '全天82期', value: 4},
						{type: 'syx5', name: '大众11选5', number: '全天82期', value: 5}
					]
					}, {
            icon: '11', name: 'PK10',label: 'pk10', data: [
              {type: 'pk10', name: '北京PK10', number: '全天82期', value: 1},
              {type: 'pk10', name: '大发PK10', number: '全天82期', value: 2}
            ]
          }
				],
				selectedLottery: [],
				activeFlag: 'all'
			}
		},
		methods: {
			selectLotteryType(item) {
				if (!!item) {
					this.lotteryList.forEach(v => {
						if (v.name == item.name) {
							this.selectedLottery = item.data
							this.activeFlag = item.name
						}
					})
				} else {
					this.selectedLottery = []
					this.activeFlag = 'all'
					this.lotteryList.forEach(v => {
						this.selectedLottery.push(...(v.data))
					})
				}
			},
			toPage(link, params) {
				this.$router.push({path: link, params: {id: params}})
			}
		},
		mounted() {
			this.selectLotteryType()
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/styles/index.scss";

	.content {
		margin-top: px2rem(100px);
		/*margin-bottom: px2rem(100px);*/
		overflow: hidden;
	}

	.tab {
		height: px2rem(140px);
		display: -webkit-box;
		overflow-x: scroll;
		-webkit-overflow-scrolling: touch;
		white-space: nowrap;
		overflow-y: hidden;
		.tab-item {
			background: #22292c;
			width: px2rem(216px);
			height: 100%;
			text-align: center;
			padding: 0;
			color: #5c5f60;
			i {
				display: block;
				margin-top: px2rem(15px);
				font-size:px2rem(60px);
			}
			span {
				display: block;
				margin-top: px2rem(10px);
				font-size:px2rem(35px);
			}
		}
		.active {
			background-color: #151b1d;
			color: #f2f2f2;
		}
	}

	.lottery {
		text-align: center;
		overflow: hidden;
		.lottery-item {
			float: left;
			box-sizing: border-box;
			width: px2rem(249px);
			height: px2rem(249px);
			background: #fff;

			border-right: 1px solid #ddd;
			border-bottom: 1px solid #ddd;
			.lottery-icon {
				i {
					display: inline-block;
					color: #e41404;
					font-size: px2rem(75px);
					margin-top: px2rem(30px);
				}
			}
			.lottery-name {
				font-size: px2rem(35px);
				margin-top: px2rem(5px);
				color: #333;
			}
			.lottery-number {
				font-size: px2rem(25px);
				color: #989898;
				margin-top: px2rem(5px);
			}
		}
	}
</style>
