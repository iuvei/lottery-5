<template>
	<div class="playBoardK3">
		<div class="chose-msg">
			{{cellData.info}}
		</div>
		<ul class="chose-list">
			<li class="chose-list-item1" v-if="cellData.titleName == '和值'" :class="{'checked': item.checked}" v-for="item in cellData.playBoard"
			    @click="choseItem(item)">
				<span>{{item.label}}</span>
				<span v-if="item.ratio">赔率{{item.ratio}}</span>
			</li>
      <li class="chose-list-item2" v-if="cellData.titleName == '三同号通选' || cellData.titleName == '三连号通选'" :class="{'checked': item.checked}" v-for="item in cellData.playBoard"
          @click="choseItem(item)">
        <span>{{item.label}}</span>
        <span v-if="item.ratio">赔率{{item.ratio}}</span>
      </li>
      <li class="chose-list-item3" v-if="cellData.titleName == '三同号单选' || cellData.titleName == '三不同号' || cellData.titleName == '二同号复选' || cellData.titleName == '二同号单选' || cellData.titleName == '二不同号'" :class="{'checked': item.checked}" v-for="item in cellData.playBoard"
          @click="choseItem(item)">
        <span>{{item.label}}</span>
        <span v-if="item.ratio">赔率{{item.ratio}}</span>
      </li>
		</ul>
	</div>
</template>

<script>
	import cell from './cellK3.vue'
  import playMethodsK3 from '../../../utils/playMethodsK3'

	export default {
		props: ['tagToPlayMapK3', 'betTopDetailSelected'],
		data() {
			return {
				cellDataChecked: ['大', '小']
			}
		},
		components: {
			cell
		},
		computed: {
			cellData() {
				return this.tagToPlayMapK3.filter(v => {
					return v.titleName == this.betTopDetailSelected
				})[0]
			}
		},
		methods: {
			choseItem(item) {
				item.checked = !item.checked
				let selectedData = this.cellData.playBoard.filter(v => {
					return v.checked == true
				})
        let emitData = playMethodsK3(this.cellData.titleName, this.cellData.ratio, selectedData)
        console.log(emitData)
        console.log('----------------')
        console.log(this.cellData.ratio)
				this.$emit('change', emitData)
			}
		},
		mounted() {
			console.log(this.betTopDetailSelected)
		}
	}
</script>

<style scoped lang="scss">
	@import "@/styles/index.scss";

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

		.chose-list-item1 {
			padding: px2rem(16px);
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
			span {
				color: #fff;
				font-size: px2rem(8px);
			}
			span:nth-child(1) {
				display: block;
				margin: px2rem(12px) 0;
				font-size: px2rem(40px);
			}
		}
		.chose-list-item2 {
			padding: px2rem(16px);
			vertical-align: top;
			display: inline-block;
			text-align: center;
			border: 1px solid hsla(0, 0%, 100%, .3);
			width: px2rem(300px);
			height: px2rem(90px);
			padding-top: .1em;
			overflow: hidden;
			margin: .1rem;
			line-height: px2rem(50px);
			font-size: .9em;
			span {
				color: #fff;
				font-size: px2rem(8px);
			}
			span:nth-child(1) {
				display: block;
				margin: px2rem(12px) 0;
				font-size: px2rem(40px);
			}
		}
		.chose-list-item3 {
			padding: px2rem(16px);
			vertical-align: top;
			display: inline-block;
			text-align: center;
			border: 1px solid hsla(0, 0%, 100%, .3);
			width: px2rem(100px);
			height: px2rem(90px);
			padding-top: .1em;
			overflow: hidden;
			margin: .1rem;
			line-height: px2rem(50px);
			font-size: .9em;
			span {
				color: #fff;
				font-size: px2rem(8px);
			}
			span:nth-child(1) {
				display: block;
				margin: px2rem(12px) 0;
				font-size: px2rem(40px);
			}
		}
	}
	.checked {
		color: #f4c829;
		border-color: #f4c829 !important;
	}
</style>
