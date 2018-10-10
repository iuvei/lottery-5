import router from './router'
import store from './store'
import {setActivePage, getActivePage,getToken} from './utils/auth'

let routerMap = {'lotteryHall': 0, 'activity': 1, 'find': 2, 'home': 3}

router.beforeEach((to, from, next) => {
  window.scrollTo(0,0);
  store.commit('setHeaderTitle', '')
  if (to.fullPath == '/lotteryHall/index') {
    store.commit('resetLotteryList')
  }
  for (let i in routerMap) {
    if (to.name === i) {
      setActivePage(routerMap[i])
    }
  }
  if(getToken()) {
    next()
  } else {
    if(to.meta.needLogin) {
      router.replace('/login')
    } else {
      next()
    }
  }
})
