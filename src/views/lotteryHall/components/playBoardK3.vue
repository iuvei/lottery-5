<template>
	<div class="playBoardK3">
		<cell v-for="item in cellDatas" :cellData="item"></cell>
	</div>
</template>

<script>
	import cell from './cellK3.vue'
	
	export default {
		props: ['tagToPlayMapK3', 'betTopDetailSelected'],
		data() {
			return {
//				cellData: ''
			}
		},
		components: {
			cell
		},
		computed: {
			cellDatas() {
				return this.tagToPlayMapK3.filter(v => {
					return v.titleName == this.betTopDetailSelected
				})
			}
		},
		methods: {
		
		},
		mounted() {
			console.log(this.betTopDetailSelected)
		}
	}
</script>

<style scoped lang="scss">

</style>