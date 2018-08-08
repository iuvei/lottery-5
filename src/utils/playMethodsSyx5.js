export default function playMethodsSyx5 (type, detial, selectedData) {
  let selectedNum = [] // 所选数
  let bittingNumber = 0 // 注数
  let price = '' // 金额

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

  // 三码&前三组选复式
  if(type === '三码' && detial === '前三组选复式') {
    selectedNum = selectedData[0].data.map(item => item.label)
    // 三个为一注，c53=10的关系
    bittingNumber = selectedNum.length < 3 ? 0 : selectedNum.length * (selectedNum.length - 1) * (selectedNum.length - 2) / 6
    price = 2 * bittingNumber
  }

  // 二码&前二直选复式
  if(type === '二码' && detial === '前二直选复式') {
    let oneTwo = [] // 符合1，2级的最终的有效数据
    let firstNumArr = selectedData[0].data.map(item => item.label)
    let secondNumArr = selectedData[1].data.map(item => item.label)
    // 处理1，2级的
    for (let first = 0; first < firstNumArr.length; first++) {
      for (let second = 0; second < secondNumArr.length; second++) {
        if (secondNumArr[second] !== firstNumArr[first]) {
          let item = [firstNumArr[first], secondNumArr[second]]
          oneTwo.push(item)
        }
      }
    }
    // console.log('1&2的')
    // console.log(oneTwo)
    bittingNumber = oneTwo.length
    price = 2 * bittingNumber
    selectedNum = selectedData
  }

  // 二码&前二组选复式
  if(type === '二码' && detial === '前二组选复式') {
    selectedNum = selectedData[0].data.map(item => item.label)
    // 两个为一注，n*(n-1)/2的关系
    bittingNumber = selectedNum.length < 2 ? 0 : selectedNum.length * (selectedNum.length - 1) / 2
    price = 2 * bittingNumber
  }

  // 不定位&前三一码不定位
  if(type === '不定位' && detial === '前三一码不定位') {
    selectedNum = selectedData[0].data.map(item => item.label)
    // 一个为一注，n的关系
    bittingNumber = selectedNum.length
    price = 2 * bittingNumber
  }

  // 定位胆&复式
  if(type === '定位胆' && detial === '复式') {
    let finalDataArr = [] // 符合1，2，3最终的有效数据
    let firstNumArr = selectedData[0].data.map(item => item.label)
    let secondNumArr = selectedData[1].data.map(item => item.label)
    let thirdNumArr = selectedData[2].data.map(item => item.label)
    // 当获取有效值分层次的时候可去掉注释
    // finalDataArr.push(firstNumArr)
    // finalDataArr.push(secondNumArr)
    // finalDataArr.push(thirdNumArr)
    bittingNumber = firstNumArr.length + secondNumArr.length + thirdNumArr.length
    price = 2 * bittingNumber
    selectedNum = selectedData
  }

  // 趣味型&定单双
  if(type === '趣味型' && detial === '定单双') {
    selectedNum = selectedData[0].data.map(item => item.label)
    // 一个为一注，n的关系
    bittingNumber = selectedNum.length
    price = 2 * bittingNumber
  }
  // 趣味型&猜中位
  if(type === '趣味型' && detial === '猜中位') {
    selectedNum = selectedData[0].data.map(item => item.label)
    // 一个为一注，n的关系
    bittingNumber = selectedNum.length
    price = 2 * bittingNumber
  }
  // 任选复式&一中一
  if(type === '任选复式' && detial === '一中一') {
    selectedNum = selectedData[0].data.map(item => item.label)
    // 一个为一注，n的关系
    bittingNumber = selectedNum.length
    price = 2 * bittingNumber
  }
  // 任选复式&二中二
  if(type === '任选复式' && detial === '二中二') {
    selectedNum = selectedData[0].data.map(item => item.label)
    // 两个为一注，n*(n-1)/2的关系
    bittingNumber = selectedNum.length * (selectedNum.length - 1) / 2
    price = 2 * bittingNumber
  }

  return {
    type, // 类型
    detial, // 详情
    selectedNum, // 所选数字
    bittingNumber, // 注数
    price // 价格
  }
}
