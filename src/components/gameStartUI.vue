<template>
  <div class="game-wrapper w-full h-screen">
    <game-input-player-name
      @startGame="startGameReq"
      v-if="inputName"
    ></game-input-player-name>
    <game-table @gameOver="gameOverRequest" v-if="startGame"></game-table>
    <game-over @tryAgainReq="startGameReq" v-if="gameOver"></game-over>
  </div>
</template>

<script>
import GameTable from "@/components/gameTable";
import GameInputPlayerName from "@/components/gameInputPlayerName";
import GameOver from "@/components/gameOver";
export default {
  name: "gameStartUI",
  components: { GameOver, GameInputPlayerName, GameTable },
  data() {
    return {
      inputName: true,
      startGame: false,
      gameOver: false
    };
  },
  methods: {
    startGameReq() {
      this.inputName = false;
      this.startGame = true;
      this.gameOver = false;
    },

    gameOverRequest() {
      this.gameOver = true;
      this.startGame = false;
      this.inputName = false;
    }
  }
};
</script>

<style scoped></style>
