import {getUserInfo,setUserInfo, removeUserInfo} from '../../utils/auth'

const user = {
  state: {
    userInfo: JSON.parse(getUserInfo())
  },
  mutations: {
    removeUserInfo: (state) => {
      removeUserInfo()
      state.userInfo = {}
    },
    setUserInfo: (state, data) => {
      setUserInfo(data)
      state.userInfo = data
    }
  },
  actions: {

  }
}

export default user
