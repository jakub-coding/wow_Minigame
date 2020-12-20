export default {
  state: {
    playerScore: 0,
    playerName: null,
    playerLives: 3
  },

  mutations: {
    lostLive(state) {
      state.playerLives--;
    },

    incrementScore(state) {
      state.playerScore = state.playerScore + 10;
    },

    editPlayerName(state, payload) {
      state.playerName = payload;
    },

    resetLives(state) {
      state.playerLives = 3;
    },

    resetScore(state) {
      state.playerScore = 0;
    }
  }
};
