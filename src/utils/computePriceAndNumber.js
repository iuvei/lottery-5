export default function computePriceAndNumber(type, details, selectedData) {
  return type
}

export function multiply(arr) {
  return arr.reduce(function (a, b) {
    return a * b;                        //如果是相加return a + b 如果是相减return a - b
  })
}

export function addition(arr) {
  return arr.reduce(function (a, b) {
    return a + b;                        //如果是相加return a + b 如果是相减return a - b
  })
}

export function hezhi(n) {
  let count = 0
  for (let i = 0; i < 10; i++) {
    let j = n - i
    if (j < 10 && j > -1) {
      count++
    }
  }
  return count
}

export function zuxuanfushi(n) {
  let count = 0
  for (let i = 0; i < n; i++) {
    count += i
  }
  return count
}
