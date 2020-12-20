<template>
  <div class="leve-ui-wrapper my-4 grid grid-cols-2">
    <div class="level-index text-left py-2">
      <h1 class="font-title text-gray-200 text-xl">
        Level: {{ this.$store.state.game.gameLevel }}
      </h1>
    </div>
    <div class="round-index text-right py-2">
      <h1 class="font-title text-gray-200 text-xl">
        Round: {{ this.$store.state.game.gameRound }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "gameLevelUi"
};
</script>

<style scoped></style>
