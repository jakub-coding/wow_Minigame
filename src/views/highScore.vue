<template>
  <div class="high-score-wrapper">
    <h1 class="py-16 font-title text-6xl text-gray-200">High Score Table</h1>
    <a class="py-8 font-title text-2xl inline-block text-red-500" href="/"
      >&lt;- Back</a
    >
    <table class="w-full text-gray-200">
      <thead>
        <tr class="font-title text-2xl">
          <th class="text-left px-4 pb-4 w-4/12">Player Name:</th>
          <th class="text-left px-4 pb-4 w-4/12">Level:</th>
          <th class="text-left px-4 pb-4 w-4/12">Score:</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="transition-all duration-200 ease-in-out hover:bg-gray-800"
          v-for="item in this.scoresData"
          :key="item.index"
        >
          <td class="py-2 px-4">{{ item.player_name }}</td>
          <td class="py-2 px-4">{{ item.player_level }}</td>
          <td class="py-2 px-4">{{ item.player_score }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "highScore",

  data() {
    return {
      scoresData: []
    };
  },

  mounted() {
    this.getApiData();
  },

  methods: {
    getApiData() {
      axios
        .get("http://api-coding.jakub-coding.de/api/scores-all", {
          headers: {
            Authorization: "Bearer HHT4iNJpIIFtWEv7tOgobq2Cn4KpFsx4RoQIthqG"
          }
        })
        .then(response => {
          let responseData = response.data.data;
          responseData.sort(function(a, b) {
            return a.player_score - b.player_score;
          });

          this.scoresData = responseData.reverse();
          //console.log(this.scoresData);
        });
    }
  }
};
</script>

<style scoped></style>
