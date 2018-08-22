export default function playMethodsK3(type, ratio, selectedData) {
  let bittingNumber = 0
  let maxRatio = ratio
  bittingNumber = selectedData.length
  return {
    type,
    bittingNumber,
    selectedData,
    maxRatio
  }
}
