<template>
  <div class="timer-wrapper w-full">
    <div class="progress-container w-full mt-4">
      <div
        class="transition-all duration-500 ease-in-out bg-green-main rounded text-xs leading-none py-1 text-center text-white"
        :style="'width: ' + this.$store.state.game.gameProgress + '%'"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gameTimer",
  data() {
    return {
      progress: 100
    };
  },
  methods: {
    progressDec(value) {
      this.$store.commit("decreaseProgress", value);
    },

    progressHandler() {
      this.progressDec(this.$store.state.game.gameTimeIndex);

      console.log(this.$store.state.game.gameProgress);

      if (this.$store.state.game.gameProgress <= 0) {
        if (this.$store.state.player.playerLives === 1) {
          this.$emit("gameOver");
          this.setTimer(false);
        } else {
          this.$store.commit("lostLive");
        }

        this.$store.commit("resetProgress");
      }
    },

    setTimer(operator) {
      if (operator) {
        window.gameInterval = window.setInterval(this.progressHandler, 1000);
      } else {
        clearInterval(window.gameInterval);
      }
    }
  },

  mounted() {
    this.setTimer(true);
  }
};
</script>

<style scoped></style>
