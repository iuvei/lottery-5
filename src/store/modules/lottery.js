const lottery = {
  state: {
    lotteryList: []
  },
  mutations: {
    resetLotteryList: (state) => {
      state.lotteryList = []
    },
    setLotteryList: (state, data) => {
      state.lotteryList.push(data)
    },
    deleteLotteryListItem: (state,data) => {
      state.lotteryList.splice(data + 1,1)
    }
  },
  actions: {

  }
}

export default lottery
