import computePriceAndNumber from './computePriceAndNumber'
import {multiply, addition, hezhi, zuxuanfushi} from './computePriceAndNumber'

export default function playMethods(type, details, selectedData) {
  let number = 0
  let price = 0
  let selectedDataFiltered = []
  if (type == '一星' && details == '复式') {
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
      number = addition(cache)
      price = number * 2
    }
    return {
      number: number,
      price: price
    }
  }
  if (type == '前二' && details == '直选复式') {
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
      number = multiply(cache)
      price = number * 2
    }
    return {
      number: number,
      price: price
    }
  }
  if (type == '前二' && details == '直选和值') {
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
      number = addition(cache2)
      price = number * 2
    }
    return {
      number: number,
      price: price
    }
  }
  if (type == '前二' && details == '组选复式') {
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
      number = numberCache
      price = number * 2
    }
    return {
      number: number,
      price: price
    }
  }
  if (type == '前二' && details == '组选和值') {
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
      number = addition(cache2)
      price = number * 2
    }
    return {
      number: number,
      price: price
    }
  }

}
