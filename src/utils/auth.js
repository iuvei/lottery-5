let ActivePageIndex = 'ActivePageIndex'

export function setActivePage(index) {
  return sessionStorage.setItem(ActivePageIndex, index)
}

export function getActivePage() {
  return sessionStorage.getItem(ActivePageIndex)
}
export function hezhi(number = 8) {
  let a1 = 0
  let a2 = number - 0
  for(let i in 8) {
    console.log(i)
  }
}

export function selectedDataToStr(data) {
  let str = ''
  console.log(data)
  str = data.selectedNum.map(v => {
    return v.join(' ')
  }).join(',')
  console.log(str)
  // let arr = data.map(v => {
  //   return v.data.map(v1 => {
  //     return v1.label
  //   })
  // })
  // str = arr.map(v => {
  //   return v.join(' ')
  // }).join(',')
  return str
}
