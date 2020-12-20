export default {
  state: {
    gameLevel: 1,
    gameRound: 0,
    gameTimeIndex: 5,
    gameProgress: 100
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
    },
    increaseTimeIndex(state) {
      state.gameTimeIndex = state.gameTimeIndex + 2;
    },
    resetTimeIndex(state) {
      state.gameTimeIndex = 5;
    },
    decreaseProgress(state, payload) {
      state.gameProgress = state.gameProgress - payload;
    },
    resetProgress(state) {
      state.gameProgress = 100;
    }
  }
};
