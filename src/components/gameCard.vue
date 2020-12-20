<template>
  <div
    @click="clickCard"
    class="transition-all duration-200 ease-in-out card-wrapper rounded-xl p-8 h-96 shadow-md flex justify-center items-center border-2 border-green-main hover:bg-gray-800 cursor-pointer"
  >
    <img class="w-4/6" :src="this.cardImage" alt="card-image" />
  </div>
</template>

<script>
export default {
  name: "gameCard",

  props: {
    cardImage: {
      type: String
    },
    isMaster: {
      type: Boolean
    }
  },

  data() {
    return {
      testImage: "/assets/images/CircledLeafFull.png"
    };
  },

  methods: {
    clickCard() {
      if (this.isMaster) {
        this.leveInterface();
        this.$store.commit("incrementScore");
        this.$emit("shuffleCards");
      } else {
        this.$store.commit("lostLive");
        if (this.$store.state.player.playerLives === 0) {
          this.$emit("gameOver");
        }
      }
    },

    leveInterface() {
      if (this.$store.state.game.gameRound < 5) {
        this.$store.commit("increaseRound");
      }
      if (this.$store.state.game.gameRound === 5) {
        this.$store.commit("increaseLevel");
        this.$store.commit("resetRound");
      }
    }
  }
};
</script>

<style scoped></style>
