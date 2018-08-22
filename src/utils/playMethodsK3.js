import {Cmn} from './computePriceAndNumber'

export default function playMethodsK3(type, ratio, selectedData) {
	let bittingNumber = 0
	let maxRatio = ratio
	bittingNumber = selectedData.length
	console.log(selectedData)
	if (type == '和值') {
		maxRatio = Math.max(...selectedData.map(v => {return v.ratio}))
	}
	if (type == '三不同号') {
		let limit = 3
		bittingNumber = 0
		if(selectedData.length >= limit){
			bittingNumber = Cmn(selectedData.length,limit)
		}
	}
	if (type == '二不同号') {
		let limit = 2
		bittingNumber = 0
		if(selectedData.length >= limit){
			bittingNumber = Cmn(selectedData.length,limit)
		}
	}
	return {
		type,
		bittingNumber,
		selectedData,
		maxRatio
	}
}
