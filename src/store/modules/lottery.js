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
    }
  },
  actions: {

  }
}

export default lottery
