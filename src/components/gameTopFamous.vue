<template>
  <div class="top-famous-wrapper w-full flex justify-center items-center mt-16">
    <div class="fame-classes grid grid-cols-3 gap-4 w-3/4">
      <div
        class="class-item w-full flex flex-col justify-between items-center h-64"
      >
        <div
          class="player-data w-full flex flex-col justify-center items-center font-title text-xl text-gray-200"
        >
          <p class="text-4xl mb-4">{{ this.second_player.player_name }}</p>
          <p>Level: {{ this.second_player.player_level }}</p>
          <p>Score: {{ this.second_player.player_score }}</p>
        </div>
        <div
          class="score-statue h-2/6 flex justify-center items-center w-full bg-gray-400 rounded"
        >
          <h1 class="font-title text-4xl text-gray-200">2</h1>
        </div>
      </div>

      <div
        class="class-item w-full flex flex-col justify-between items-center h-64"
      >
        <div
          class="player-data w-full flex flex-col justify-center items-center font-title text-xl text-gray-200"
        >
          <p class="text-4xl mb-4">{{ this.first_player.player_name }}</p>
          <p>Level: {{ this.first_player.player_level }}</p>
          <p>Score: {{ this.first_player.player_score }}</p>
        </div>
        <div
          class="score-statue h-3/6 flex justify-center items-center w-full bg-yellow-600 rounded"
        >
          <h1 class="font-title text-4xl text-gray-200">1</h1>
        </div>
      </div>

      <div
        class="class-item w-full flex flex-col justify-between items-center h-64"
      >
        <div
          class="player-data w-full flex flex-col justify-center items-center font-title text-xl text-gray-200"
        >
          <p class="text-4xl mb-4">{{ this.third_player.player_name }}</p>
          <p>Level: {{ this.third_player.player_level }}</p>
          <p>Score: {{ this.third_player.player_score }}</p>
        </div>
        <div
          class="score-statue h-1/6 flex justify-center items-center w-full bg-yellow-800 rounded"
        >
          <h1 class="font-title text-4xl text-gray-200">3</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "gameTopFamous",
  data() {
    return {
      first_player: {},
      second_player: {},
      third_player: {}
    };
  },
  mounted() {
    this.getApiData();
  },
  methods: {
    getApiData() {
      axios
        .get("http://api-coding.jakub-coding.de/api/scores-top", {
          headers: {
            Authorization: "Bearer HHT4iNJpIIFtWEv7tOgobq2Cn4KpFsx4RoQIthqG"
          }
        })
        .then(response => {
          this.sortData(response.data.data);
        });
    },
    sortData(data) {
      this.first_player = data[0];
      this.second_player = data[1];
      this.third_player = data[2];
    }
  }
};
</script>

<style scoped></style>
