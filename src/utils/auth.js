let ActivePageIndex = 'ActivePageIndex'

export function setActivePage(index) {
  return sessionStorage.setItem(ActivePageIndex, index)
}

export function getActivePage() {
  return sessionStorage.getItem(ActivePageIndex)
}
