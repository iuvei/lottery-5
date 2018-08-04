const app = {
  state: {
	  PlaySortMore: false,
	  BetFilterDataFlag: true
  },
  mutations: {
	  showPlaySortMore: (state, data) => {
      state.PlaySortMore = data
    },
	  resetBetFilterData: (state) => {
	  	state.BetFilterDataFlag = !state.BetFilterDataFlag
	  }
  },
  actions: {

  }
}

export default app
