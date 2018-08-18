<template>
	<div class="syx5 clearfix">
		<HeaderReg bgcolor="#000">
			<router-link slot="headleft" to="/lotteryHall">
				<van-icon name="arrow-left"/>
			</router-link>
			<span slot="headtitle">
        <span class="titleSelect">
          <span>玩法</span>
          <div @click="$store.commit('showPlaySortMore', !PlaySortMore)">{{`${tagSelectedData[0]}${tagSelectedData[2]}`}}</div>
        </span>

      <playSortMore :tagToPlayMap="tagToPlayMap" v-show="PlaySortMore" @tagSelected="tagSelected" v-model="playBoardData"></playSortMore>
      </span>
			<span slot="headright">
        <span @click="areaShow = !areaShow">{{araeSelected.label}}</span>
        <div class="area-list" v-show="areaShow">
          <span v-for="item in arae" @click="selectArea(item)">{{item.label}}11选5</span>
        </div>
      </span>
		</HeaderReg>
		<div class="state">
			<div>
				<span>0730080期开奖号码</span>
				<div>1 2 3</div>
			</div>
			<div>
				<span>0730081期投注截止</span>
				<div>k3-timebar</div>
			</div>
		</div>
		<div class="content">
			<div class="chose-wrap">
				<playBoard :playBoardData="playBoardData" v-model="selectedNumberData" @change="selectedNumberDataMethods"></playBoard>
			</div>
		</div>
		
		<footerBar :selectedInfo="selectedInfo"></footerBar>
	
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import HeaderReg from '@/components/Navbar.vue'
	import footerBar from './components/footerBar'
	import selectNumber from './components/selectNumber'
	import textareaNumber from './components/textareaNumber'
	import betFilter from './components/betFilter'
	import playSortMore from './components/playSortMore'
	import playBoard from './components/playBoard.vue'
	import {tagToPlayMapSYX5} from './components/tagToPlayMapSYX5'
  import playMethodsSyx5 from '../../utils/playMethodsSyx5'

	export default {
		name: 'syx5',
		components: {
			HeaderReg,
			footerBar,
			selectNumber,
			textareaNumber,
			playSortMore,
			playBoard
		},
		data() {
			return {
				tagToPlayMap: JSON.parse(sessionStorage.getItem('tagToPlayMapSYX5')), //映射关系
				playBoardData: [], //选中的面板数据
				tagSelectedData: [],
				selectedNumberData: [],
				selectedInfo: {},
				choseType: 1,
				checkedList: [],
				betTopDetailList: [
					{name: '和值', odds: '赔率31.5倍', number: 123, value: 1},
					{name: '和值', odds: '赔率31.5倍', number: 123, value: 2},
					{name: '和值', odds: '赔率31.5倍', number: 123, value: 3},
					{name: '和值', odds: '赔率31.5倍', number: 123, value: 4},
					{name: '和值', odds: '赔率31.5倍', number: 123, value: 5},
					{name: '和值', odds: '赔率31.5倍', number: 123, value: 6},
					{name: '和值', odds: '赔率31.5倍', number: 123, value: 7},
					{name: '和值', odds: '赔率31.5倍', number: 123, value: 8},
					{name: '和值', odds: '赔率31.5倍', number: 123, value: 9},
				],
				betTopDetailShow: false,
				betTopDetailSelected: 1,
				arae: [
					{value: 1, label: '广东'},
					{value: 2, label: '上海'},
					{value: 3, label: '山东'},
					{value: 4, label: '山西'}
				],
				areaShow: false,
				araeSelected: {value: 1, label: '广东'},
			}
		},
		computed: {
			...mapGetters([
				'PlaySortMore',
				'BetFilterDataFlag'
			])
		},
		watch: {
			'BetFilterDataFlag': function (n) {
				this.tagToPlayMap = JSON.parse(sessionStorage.getItem('tagToPlayMapSYX5'))
			},
			'tagSelectedData': function (n) {
				this.selectedInfo = {}
				// console.log(n)
			},
		},
		methods: {
      selectedNumberDataMethods(data) {
        console.log(this.tagSelectedData)
        let type = this.tagSelectedData[0]
        let detial = this.tagSelectedData[2]
        this.selectedNumberData = data
	      this.selectedInfo = playMethodsSyx5(type, detial, this.selectedNumberData)
        console.log(this.selectedNumberData)
        console.log('----------')
        console.log(playMethodsSyx5(type, detial, this.selectedNumberData))
      },
			tagSelected(data) {
				this.tagSelectedData = data
			},
			choseItem(item, index) {
				item.checked = !item.checked
				this.checkedList = this.choseList.filter(item => {
					return item.checked == true
				})
			},
			selectArea(item) {
				this.araeSelected = item
				this.areaShow = false
				this.$router.push({params: { id: item.value}})
			},
			selectedDetTopDetail(item) {
				this.betTopDetailSelected = item.value
				this.choseList = eval(`this.choseList${item.value}`)
				this.betTopDetailShow = false
			}
		},
		mounted() {
			this.choseList = eval(`this.choseList1`)
			this.arae.forEach(i => {
				if(i.value == this.$route.params.id) {
					this.araeSelected = i
				}
			})
			sessionStorage.setItem('tagToPlayMapSYX5', JSON.stringify(tagToPlayMapSYX5))
		}
	}
</script>

<style lang="scss" scoped>
	@import "@/styles/index.scss";

	.syx5 {
		position: relative;
		background: #f5f1e4;
		height: 100vh;
		width: 100%;
	}

	.titleSelect {
		span {
			display: inline-block;
			width: px2rem(10px);
			line-height: px2rem(30px);
			margin: px2rem(15px);
			font-size: px2rem(10px);
		}
		div {
			display: inline-block;
			font-size: .8em;
			border-radius: .2em;
			border: 1px solid hsla(0,0%,100%,.5);
			vertical-align: top;
			height: 2em;
			margin: .45em 0;
			line-height: 1.9em;
			padding: 0 .4em;
		}
	}

	.betTopDetail {
		position: absolute;
		top: px2rem(100px);
		left: 0;
		width: 100vw;
		height: 100vh;
		padding: .5em;
		background: #317455;
		text-align: center;
		.betTopDetailItem {
			display: inline-block;
			width: px2rem(200px);
			height: px2rem(200px);
			margin: px2rem(10px);
			border: 1px solid hsla(0, 0%, 100%, .3);
			vertical-align: top;
			.betTopDetailItemName {
				font-size: px2rem(32px);
				line-height: px2rem(32px);
				margin: px2rem(10px) 0;
			}
			.betTopDetailItemOdds {
				font-size: px2rem(25px);
				line-height: px2rem(25px);
				color: #caebda;
				margin: px2rem(25px) 0;
			}
			.betTopDetailItemNumber {
				font-size: px2rem(40px);
				line-height: px2rem(40px);
				margin: px2rem(35px) 0;
			}
		}
	}

	.betTopDetailSelected {
		border-color: #f4c829 !important;
	}

	.area-list {
		margin: 0;
		padding: 0;
		background: #fff;
		position: absolute;
		top: px2rem(100px);
		right: 0;
		width: px2rem(200px);
		z-index: 50;
		span {
			float: left;
			width: px2rem(200px);
			border: 0.5px solid rgba(108, 108, 108, 0.14);
			color: #333;
			font-size: px2rem(35px);
		}
	}

	.content {
		margin-top: px2rem(230px);
		margin-bottom: px2rem(100px);
		overflow: hidden;
	}

	.state {
		position: fixed;
		z-index: 10;
		top: px2rem(100px);
		color: #333;
		width: 100%;
		height: px2rem(130px);
		background-color: #e1d9ba;
		border-top: 1px solid #e1dbc9;
		box-sizing: border-box;
		& > div {
			float: left;
			width: 50%;
			height: 100%;
			border-right: 1px solid #968e79;
			text-align: center;
			overflow: hidden;
			padding: px2rem(10px) 0;
			& > span {
				font-size: px2rem(32px);
			}
			& > div {
				height: px2rem(68px);
				line-height: px2rem(68px);
				font-size: px2rem(50px);
			}
		}
	}

	.chose-wrap {
		margin-top: px2rem(30px);
		padding: px2rem(20px);
		.chose-msg {
			text-align: center;
			font-size: px2rem(25px);
			line-height: px2rem(30px);
			margin: px2rem(10px) auto;
			color: #caebda;
		}
		.chose-list {
			width: px2rem(700px);
			margin: 0 auto;
			text-align: center;

			.chose-list-item {
				vertical-align: top;
				display: inline-block;
				text-align: center;
				border: 1px solid hsla(0, 0%, 100%, .3);
				width: px2rem(140px);
				height: px2rem(90px);
				padding-top: .1em;
				overflow: hidden;
				margin: .1rem;
				line-height: 1.22em;
				font-size: .9em;
			}
		}
	}

	.checked {
		color: #f4c829;
		border-color: #f4c829 !important;
	}

	.chose-info {
		position: fixed;
		bottom: px2rem(100px);
		width: 100%;
	}

	.chose-info > div {
		display: flex;
		height: px2rem(70px);
		line-height: px2rem(70px);
		border-bottom: 1px solid #456166;
		background: #22563f;
		& > span {
			flex: 2;
			text-align: center;
			color: #caebda;
			font-size: px2rem(30px);
		}
		& > div {
			flex: 8;
			& > input {
				height: px2rem(40px);
				line-height: px2rem(70px);
				width: 5em;
				background-color: #cbeedc;
				color: #19593c;
				border-radius: .2em;
				text-align: center;
				margin-left: 0.2rem;
				outline: none;
				margin: 0;
				padding: 0;
				vertical-align: middle;
				-webkit-transform: translateY(1px);
				transform: translateY(1px);
			}
			& > span {
				color: #caebda;
				display: inline-block;
				font-size: px2rem(25px);
			}
		}
	}

	.footerbar {
		position: fixed;
		z-index: 500;
		bottom: 0;
		height: px2rem(100px);
		width: 100%;
		line-height: px2rem(100px);
		background: #000;
		span {
			line-height: px2rem(100px);
		}
		.fl {
			float: left;
			font-size: px2rem(40px);
			margin: 0 px2rem(20px);
			color: #ffaf36;
		}
		.fm {
			float: left;
			color: #fff;
			padding: 0;
			font-size: px2rem(30px);
		}
		.fr {
			float: right;
			color: #4e0904;
			height: px2rem(70px);
			line-height: px2rem(70px);
			font-size: px2rem(50px);
			padding: 0 .3rem;
			margin: .2rem .3rem;
			border-radius: .2rem;
			background: #feab03;
			background: linear-gradient(180deg, #ffdb01 0, #e07a06);
			background: -webkit-linear-gradient(bottom, #ffdb01, #e07a06);
		}
	}
</style>
