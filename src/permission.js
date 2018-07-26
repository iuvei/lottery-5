import router from './router'
import store from './store'
import {setActivePage, getActivePage} from './utils/auth'

let routerMap = {'lotteryHall': 0, 'activity': 1, 'home': 4}

router.beforeEach((to, from, next) => {
  for (let i in routerMap) {
    if (to.name === i) {
      setActivePage(routerMap[i])
    }
  }
  next()
})
