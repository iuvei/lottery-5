import router from './router'
import store from './store'
import {setActivePage, getActivePage} from './utils/auth'

let routerMap = {'lotteryHall': 0, 'activity': 1, 'find': 2,'home': 4}

router.beforeEach((to, from, next) => {
  store.commit('setHeaderTitle', '')
  for (let i in routerMap) {
    if (to.name === i) {
      setActivePage(routerMap[i])
      console.log(getActivePage())
    }
  }
  next()
})
