import {getUserInfo,setUserInfo, removeUserInfo} from '../../utils/auth'

const user = {
  state: {
    // userInfo: ''
    userInfo: getUserInfo()
  },
  mutations: {
    removeUserInfo: (state) => {
      removeUserInfo()
      state.userInfo = {}
    },
    setUserInfo: (state, data) => {
      setUserInfo(data)
      console.log(data)
      state.userInfo = data
    }
  },
  actions: {

  }
}

export default user
