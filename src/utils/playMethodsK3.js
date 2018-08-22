export default function playMethodsK3(type, selectedData) {
  let bittingNumber = 0
  let maxRatio
  bittingNumber = selectedData.length
  return {
    type,
    bittingNumber,
    selectedData,
    maxRatio
  }
}
