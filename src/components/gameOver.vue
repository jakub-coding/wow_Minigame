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
import axios from "axios";
export default {
  name: "gameOver",
  components: { AppNavigation },
  data() {
    return {
      payload: {
        player_name: "",
        player_level: 0,
        player_score: 0
      }
    };
  },
  mounted() {
    this.fillPayload();
  },
  methods: {
    tryAgain() {
      window.location.href = "/";
    },

    fillPayload() {
      this.payload.player_name = this.$store.state.player.playerName;
      this.payload.player_score = this.$store.state.player.playerScore;
      this.payload.player_level = this.$store.state.game.gameLevel;

      this.storeScore();
    },

    storeScore() {
      axios
        .post(
          "http://api-coding.jakub-coding.de/api/score-store",
          this.payload,
          {
            headers: {
              Authorization: "Bearer HHT4iNJpIIFtWEv7tOgobq2Cn4KpFsx4RoQIthqG"
            }
          }
        )
        .then(response => {
          console.log(response.data);
        });
    }
  }
};
</script>

<style scoped></style>
