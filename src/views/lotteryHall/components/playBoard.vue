<template>
	<div class="playBoard">
		<selectNumber :key="Math.random()" :single="item.titleName == '包胆'" v-for="item in playBoardData" v-if="item.type == 'number'" :titleName="item.titleName" :numberData="item.numberData" v-model="selectedData"></selectNumber>
		<textareaNumber v-else></textareaNumber>
	</div>
</template>

<script>
	import selectNumber from './selectNumber.vue'
	import textareaNumber from './textareaNumber.vue'

	export default {
		components: {
			selectNumber,
			textareaNumber
		},
		props: ['playBoardData'],
		data() {
			return {
				selectedData: [],
				emitData: []
			}
		},
		methods: {},
		watch: {
			'playBoardData': function (n) {
				this.emitData = []
				this.playBoardData.forEach(i => {
					this.emitData.push({
						label: i.titleName,
						data: []
					})
				})
			},
			'selectedData': function (n) {
				this.emitData.forEach(i => {
					if(i.label == n.titleName) {
						i.data = n.data
					}
				})
				this.$emit('change', this.emitData)
			}
		},
		mounted() {
//			console.log(this.playBoardData)
		}
	}
</script>
