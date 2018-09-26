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
				<div class="tab-item" :class="{'active': activeFlag == 'all'}" @click="selectLotteryType('all')">
					<i class="iconfont icon-kuai3"></i>
					<span>全部彩种</span>
				</div>
				<div class="tab-item" :class="{'active': item == activeFlag}" v-for="item in lotteryTitle"
				     @click="selectLotteryType(item)">
					<i v-if="item == 'syxw'" class="iconfont icon-xuan"></i>
          <span v-if="item == 'syxw'">十一选五</span>

          <i v-if="item == 'pk10'" class="iconfont icon-pk"></i>
          <span v-if="item == 'pk10'">pk10</span>

          <i v-if="item == 'ssc'" class="iconfont icon-shishicai"></i>
          <span v-if="item == 'ssc'">时时彩</span>

          <i v-if="item == 'k3'" class="iconfont icon-kuai3"></i>
          <span v-if="item == 'k3'">快3</span>
				</div>
			</div>
			<div class="lottery">
				<div class="lottery-item" v-for="(item, index) in lotteryList"
				     @click="toPage(`/${item.type}/${item.id}`)">
					<div class="lottery-icon">
						<i v-if="item.type.includes('syxw')" style="color: #218ddd" class="iconfont icon-xuan"></i>
						<i v-if="item.type.includes('pk10')" style="color: #f22751" class="iconfont icon-pk"></i>
						<i v-if="item.type.includes('ssc')" style="color: #f96e00" class="iconfont icon-shishicai"></i>
						<i v-if="item.type.includes('k3')" style="color: #e41404" class="iconfont icon-kuai3"></i></div>
					<div class="lottery-name">{{item.title}}</div>
					<div class="lottery-number">{{item.per_explain}}</div>
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
        activeFlag: 'all',
        lotteryTitle: [],
        lotteryList: [],
        cache: [],
				selectedLottery: [],
			}
		},
		methods: {
		  async getAllLottery() {
        let res = await this.axios.get('/v1/Lottery/lotteryHall')
        this.lotteryList = res.data.data
        this.cache = res.data.data
        this.lotteryTitle = [...new Set(res.data.data.map(v => {
          return v.type
        }))]
        // console.log(res.data.data)
      },
			selectLotteryType(item) {
        this.activeFlag = item
		    this.lotteryList = this.cache
				if (item != 'all') {
				  this.lotteryList = this.lotteryList.filter(v => {
				    return v.type == item
          })
					// this.lotteryList.forEach(v => {
					// 	if (v.name == item.name) {
					// 		this.selectedLottery = item.data
					// 		this.activeFlag = item.name
					// 	}
					// })
				}
			},
			toPage(link, params) {
				this.$router.push({path: link, params: {id: params}})
			}
		},
		mounted() {
			this.getAllLottery()
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
