let ActivePageIndex = 'ActivePageIndex'
let Token = 'Token'
let UserInfo = 'userInfo'

export function setUserInfo(userInfo) {
  return sessionStorage.setItem(UserInfo, JSON.stringify(userInfo))
}
export function getUserInfo() {
  // console.log(sessionStorage.getItem(UserInfo))
  return sessionStorage.getItem(UserInfo) || {}
}

export function removeUserInfo() {
  return sessionStorage.removeItem(UserInfo)
}

export function setActivePage(index) {
  return sessionStorage.setItem(ActivePageIndex, index)
}

export function setToken(token){
  return sessionStorage.setItem(Token, token)
}

export function getToken(){
  return sessionStorage.getItem(Token)
}

export function removeToken(){
  return sessionStorage.removeItem(Token)
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

export function selectedDataToStr(type, data) {
  let str = ''
  if (type == 'input') {
    str = data.map(v => {
      return v.join(' ')
    }).join(',')
  } else {
    let arr = data.map(v => {
      return v.data.map(v1 => {
        return v1.label
      })
    })
    str = arr.map(v => {
      return v.join(' ')
    }).join(',')
  }
  return str
}
