<template>
  <div
    class="header-wrapper grid grid-cols-2 font-title text-gray-200 text-2xl py-16"
  >
    <div class="player-info text-left">
      <h1 class="mb-2">Player: {{ this.$store.state.player.playerName }}</h1>
      <h1 class="text-red-500">
        <span class="text-gray-200 mr-4">Lives:</span>
        <svg
          v-for="item in this.$store.state.player.playerLives"
          :key="item.index"
          class="w-6 h-6 text-red-500 inline-block mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </h1>
    </div>
    <div class="player-score text-right">
      <h1>Score: {{ this.$store.state.player.playerScore }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "gameHeader",
  mounted() {
    //console.log(this.$store.state.player.playerLives);
  }
};
</script>

<style scoped></style>
