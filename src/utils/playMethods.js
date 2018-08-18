import computePriceAndNumber from './computePriceAndNumber'
import {
  isAllStrEqual,
  removeStrInArrRepeat,
  multiply,
  addition,
  hezhi,
  zuxuanfushi,
  zhixuankuadu,
  zuxuanhezhi,
  zhixuanhezhi3,
  zhixuankuadu3,
  zuxuanhezhi3,
  zuxuan_zusan,
  budingwei_erma
} from './computePriceAndNumber'

export default function playMethods(type, detial, selectedData) {
  let bittingNumber = 0
  let price = 0
  let selectedNum = []
  if (type == '一星' && detial == '复式') {
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data.length
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }

  if (type == '前二' && detial == '直选复式') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter.push(selectedData[i].data.length)
        cache[i] = selectedData[i].data.length
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = multiply(cache)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前二' && detial == '直选单式') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let XminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = selectedData[i].data.length
        cache[i] = selectedData[i].data
      }
    }
    cache = [...new Set(cache[0].filter(v => {return v.length == XminLimit}))]
    if (counter.length >= YminLimit) {
      bittingNumber = cache.length
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前二' && detial == '直选和值') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(hezhi(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前二' && detial == '跨度') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(zhixuankuadu(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前二' && detial == '组选复式') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let XminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = selectedData[i].data.length
        cache[i] = selectedData[i].data.length
      }
    }
    let numberCache = 0
    for (let i = 0; i < cache.length; i++) {
      numberCache += zuxuanfushi(cache)
    }
    if (counter.length >= YminLimit) {
      bittingNumber = numberCache
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前二' && detial == '组选单式') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let XminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)
    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = selectedData[i].data.length
        cache[i] = selectedData[i].data
      }
    }
    cache = [...new Set(cache[0].filter(v => {return v.length == XminLimit && isAllStrEqual(v)}))]
    // removeStrInArrRepeat(cache)
    if (counter.length >= YminLimit) {
      bittingNumber = cache.length
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前二' && detial == '组选和值') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(zuxuanhezhi(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前二' && detial == '组选包胆') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }


    if (counter.length >= YminLimit) {
      bittingNumber = 9
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }

  if (type == '后二' && detial == '直选复式') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
	      counter.push(selectedData[i].data.length)
        cache[i] = selectedData[i].data.length
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = multiply(cache)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后二' && detial == '直选和值') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(hezhi(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后二' && detial == '跨度') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(zhixuankuadu(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后二' && detial == '组选复式') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let XminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = selectedData[i].data.length
        cache[i] = selectedData[i].data.length
      }
    }
    let numberCache = 0
    for (let i = 0; i < cache.length; i++) {
      numberCache += zuxuanfushi(cache)
    }
    if (counter.length >= YminLimit) {
      bittingNumber = numberCache
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后二' && detial == '组选和值') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(zuxuanhezhi(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后二' && detial == '组选包胆') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }


    if (counter.length >= YminLimit) {
      bittingNumber = 9
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }

  if (type == '前三' && detial == '复式') {
    let YminLimit = 3
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter.push(selectedData[i].data.length)
        cache[i] = selectedData[i].data.length
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = multiply(cache)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前三' && detial == '直选和值') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(zhixuanhezhi3(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前三' && detial == '跨度') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(zhixuankuadu3(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前三' && detial == '组选和值') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(zuxuanhezhi3(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前三' && detial == '组三') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let XminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = selectedData[i].data
        cache[i] = selectedData[i].data
      }
    }

    if (counter[0].length >= XminLimit && counter.length >= YminLimit) {
      bittingNumber = zuxuan_zusan(counter[0].length)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前三' && detial == '组六') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let XminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = selectedData[i].data
        cache[i] = selectedData[i].data
      }
    }

    if (counter[0].length >= XminLimit && counter.length >= YminLimit) {
      bittingNumber = zuxuan_zusan(counter[0].length)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前三' && detial == '组选包胆') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }


    if (counter.length >= YminLimit) {
      bittingNumber = 54
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前三' && detial == '一码不定位') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }


    if (counter.length >= YminLimit) {
      bittingNumber = cache[0].length
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '前三' && detial == '二码不定位') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let XminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }

    console.log(cache[0])

    if (counter.length >= YminLimit && cache[0].length >= XminLimit) {
      bittingNumber = budingwei_erma(cache[0].length)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }

  if (type == '中三' && detial == '复式') {
    let YminLimit = 3
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = selectedData[i].data.length
        cache[i] = selectedData[i].data.length
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = multiply(cache)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '中三' && detial == '直选和值') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(zhixuanhezhi3(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '中三' && detial == '跨度') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(zhixuankuadu3(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '中三' && detial == '组选和值') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(zuxuanhezhi3(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '中三' && detial == '组三') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let XminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = selectedData[i].data
        cache[i] = selectedData[i].data
      }
    }

    if (counter[0].length >= XminLimit && counter.length >= YminLimit) {
      bittingNumber = zuxuan_zusan(counter[0].length)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '中三' && detial == '组选包胆') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }


    if (counter.length >= YminLimit) {
      bittingNumber = 54
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '中三' && detial == '一码不定位') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }


    if (counter.length >= YminLimit) {
      bittingNumber = cache[0].length
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '中三' && detial == '二码不定位') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let XminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }

    console.log(cache[0])

    if (counter.length >= YminLimit && cache[0].length >= XminLimit) {
      bittingNumber = budingwei_erma(cache[0].length)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }

  if (type == '后三' && detial == '复式') {
    let YminLimit = 3
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = selectedData[i].data.length
        cache[i] = selectedData[i].data.length
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = multiply(cache)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后三' && detial == '直选和值') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(zhixuanhezhi3(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后三' && detial == '跨度') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(zhixuankuadu3(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后三' && detial == '组选和值') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }
    let cache2 = []
    if (cache[0]) {
      cache[0].forEach(v => {
        cache2.push(zuxuanhezhi3(v.label))
      })
    }

    if (counter.length >= YminLimit) {
      bittingNumber = addition(cache2)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后三' && detial == '组三') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let XminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = selectedData[i].data
        cache[i] = selectedData[i].data
      }
    }

    if (counter[0].length >= XminLimit && counter.length >= YminLimit) {
      bittingNumber = zuxuan_zusan(counter[0].length)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后三' && detial == '组选包胆') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }


    if (counter.length >= YminLimit) {
      bittingNumber = 54
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后三' && detial == '一码不定位') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }


    if (counter.length >= YminLimit) {
      bittingNumber = cache[0].length
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '后三' && detial == '二码不定位') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let XminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }

    console.log(cache[0])

    if (counter.length >= YminLimit && cache[0].length >= XminLimit) {
      bittingNumber = budingwei_erma(cache[0].length)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }

  if (type == '四星' && detial == '复式') {
    let YminLimit = 4
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = selectedData[i].data.length
        cache[i] = selectedData[i].data.length
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = multiply(cache)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '四星' && detial == '一码不定位') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }


    if (counter.length >= YminLimit) {
      bittingNumber = cache[0].length
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '四星' && detial == '二码不定位') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let XminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }

    console.log(cache[0])

    if (counter.length >= YminLimit && cache[0].length >= XminLimit) {
      bittingNumber = budingwei_erma(cache[0].length)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }


  if (type == '五星' && detial == '复式') {
    let YminLimit = 5
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = selectedData[i].data.length
        cache[i] = selectedData[i].data.length
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = multiply(cache)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '五星' && detial == '一码不定位') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }


    if (counter.length >= YminLimit) {
      bittingNumber = cache[0].length
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '五星' && detial == '二码不定位') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let XminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }

    console.log(cache[0])

    if (counter.length >= YminLimit && cache[0].length >= XminLimit) {
      bittingNumber = budingwei_erma(cache[0].length)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '五星' && detial == '一帆风顺') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }


    if (counter.length >= YminLimit) {
      bittingNumber = cache[0].length
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '五星' && detial == '好事成双') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }


    if (counter.length >= YminLimit) {
      bittingNumber = cache[0].length
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '五星' && detial == '三星报喜') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }


    if (counter.length >= YminLimit) {
      bittingNumber = cache[0].length
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '五星' && detial == '四季发财') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 1
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data
      }
    }


    if (counter.length >= YminLimit) {
      bittingNumber = cache[0].length
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }

  if (type == '大小单双' && detial == '前二') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data.length
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = multiply(cache)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '大小单双' && detial == '后二') {
    // console.log(computePriceAndNumber(type, details, selectedData))
    let YminLimit = 2
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = 1
        cache[i] = selectedData[i].data.length
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = multiply(cache)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '大小单双' && detial == '前三') {
    let YminLimit = 3
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = selectedData[i].data.length
        cache[i] = selectedData[i].data.length
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = multiply(cache)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }
  if (type == '大小单双' && detial == '后三') {
    let YminLimit = 3
    let counter = []
    let numberList = []
    // console.log(selectedData)

    let cache = []
    for (let i in selectedData) {
      if (selectedData[i].data.length > 0) {
        counter[i] = selectedData[i].data.length
        cache[i] = selectedData[i].data.length
      }
    }

    if (counter.length >= YminLimit) {
      bittingNumber = multiply(cache)
      price = bittingNumber * 2
    }
    return {
      type,
      detial,
      selectedNum,
      bittingNumber,
      price
    }
  }

}

