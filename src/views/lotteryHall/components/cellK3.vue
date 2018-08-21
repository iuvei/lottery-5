<template>
	<div class="cellK3">
		<div class="chose-msg">
			{{cellData.info}}
		</div>
		<ul class="chose-list">
			<li class="chose-list-item" :class="{'checked': item.label == '大'}" v-for="item in cellData.playBoard"
			    @click="choseItem(item)">
				<span>{{item.label}}</span>
				<span v-if="item.ratio">赔率{{item.ratio}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ['cellData'],
	data() {
	 return {}
	},
	mounted() {
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
		
		.chose-list-item {
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
	}
	.checked {
		color: #f4c829;
		border-color: #f4c829 !important;
	}

</style>