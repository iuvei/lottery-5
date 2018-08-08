export default function playMethodsSyx5 (type, detial, selectedData) {
  let selectedNum = [] // 所选数
  let bittingNumber = 0 // 注数
  let price = '' // 金额
  // 三码&前三组选复式
  if(type === '三码' && detial === '前三组选复式') {
    selectedNum = selectedData[0].data.map(item => item.label)
    // 三个为一注，c53=10的关系
    bittingNumber = selectedNum.length < 3 ? 0 : selectedNum.length * (selectedNum.length - 1) * (selectedNum.length - 2) / 6
    price = 2 * bittingNumber
  }

  // 三码&前三直选复式
  if(type === '三码' && detial === '前三直选复式') {
    let oneTwo = [] // 符合1，2级的
    let Three = [] // 符合1，2，3最终的有效数据
    let firstNumArr = selectedData[0].data.map(item => item.label)
    let secondNumArr = selectedData[1].data.map(item => item.label)
    let thirdNumArr = selectedData[2].data.map(item => item.label)
    // 处理1，2级的
    for (let first = 0; first < firstNumArr.length; first++) {
      for (let second = 0; second < secondNumArr.length; second++) {
        if (secondNumArr[second] !== firstNumArr[first]) {
          let item = [firstNumArr[first], secondNumArr[second]]
          oneTwo.push(item)
        }
      }
    }
    // 处理1&2级 和 3级的
    // console.log('1&2的')
    // console.log(oneTwo)
    oneTwo.forEach(item => {
      for (let third = 0; third < thirdNumArr.length; third++) {
        if (item.indexOf(thirdNumArr[third]) === -1) {
          let list = [item.concat(thirdNumArr[third])]
          Three.push(list)
        }
      }
    })
    // console.log('符合条件的')
    // console.log(Three)
    bittingNumber = Three.length
    price = 2 * bittingNumber
    selectedNum = selectedData
  }

  return {
    type,
    detial,
    selectedNum,
    bittingNumber,
    price
  }
}
