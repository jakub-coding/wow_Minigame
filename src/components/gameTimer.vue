<template>
  <div class="timer-wrapper w-full">
    <div class="progress-container w-full mt-4">
      <div
        class="transition-all duration-500 ease-in-out bg-green-main rounded text-xs leading-none py-1 text-center text-white"
        :style="'width: ' + this.$store.state.game.gameProgress + '%'"
      ></div>
    </div>

    <div class="progress-controls mt-4 text-gray-200 text-xl">
      <ul class="flex justify-center items-center">
        <li @click="progressDec" class="mr-8 cursor-pointer">
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </li>
        <li @click="progressInc" class="cursor-pointer">
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </li>
      </ul>
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
