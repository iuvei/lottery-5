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
