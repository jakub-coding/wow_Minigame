export default {
  state: {
    gameLevel: 1,
    gameRound: 0,
    gameRoundTimer: 5000
  },

  mutations: {
    increaseLevel(state) {
      state.gameLevel++;
    },
    resetLevel(state) {
      state.gameLevel = 1;
    },
    increaseRound(state) {
      state.gameRound++;
    },
    resetRound(state) {
      state.gameRound = 0;
    }
  }
};
