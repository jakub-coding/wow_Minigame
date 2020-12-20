<template>
  <div
    class="game-over-wrapper w-full h-screen flex flex-col justify-center items-center"
  >
    <div class="title text-center py-8">
      <h1 class="font-title text-6xl text-red-500">Game Over</h1>
    </div>
    <div class="score text-center">
      <h1 class="font-title text-2xl text-red-500">
        your score: {{ this.$store.state.player.playerScore }}
      </h1>
    </div>

    <div class="controls text-center mt-16">
      <a
        @click="tryAgain"
        class="inline-block bg-green-main rounded shadow-md font-title text-2xl text-gray-200 px-16 py-4 cursor-pointer"
        >Try again ?</a
      >
    </div>
    <app-navigation></app-navigation>
  </div>
</template>

<script>
import AppNavigation from "@/components/appNavigation";
export default {
  name: "gameOver",
  components: { AppNavigation },
  methods: {
    tryAgain() {
      /*this.$store.commit("resetLives");
      this.$store.commit("resetScore");
      this.$store.commit("resetRound");
      this.$store.commit("resetLevel");
      this.$store.commit("resetTimeIndex");

      this.$emit("tryAgainReq");*/
      window.location.href = "/";
    }
  }
};
</script>

<style scoped></style>
