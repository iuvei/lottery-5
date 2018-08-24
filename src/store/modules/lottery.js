const lottery = {
  state: {
    lotteryList: []
  },
  mutations: {
    resetLotteryList: (state) => {
      state.lotteryList = []
    },
    setLotteryList: (state) => {
      state.lotteryList.push(state)
    }
  },
  actions: {

  }
}

export default lottery
