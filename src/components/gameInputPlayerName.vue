<template>
  <div
    class="input-wrapper px-16 py-32 text-center w-full h-screen flex flex-col justify-center items-center"
  >
    <div class="input-header pb-16 text-center">
      <h1 class="font-title text-6xl text-gray-200">
        WoW: Mists of Tirna Scithe puzzle
      </h1>
    </div>

    <div class="input-block text-center">
      <label class="font-title text-gray-200 text-4xl mr-4" for="player_name"
        >Player name:</label
      >
      <input
        class="p-2 bg-gray-900 border-b-2 border-green-main font-title text-4xl text-gray-200"
        id="player_name"
        type="text"
        v-model="playerName"
      />
    </div>

    <div class="errors text-center mt-4">
      <h1 v-if="!nameFulled" class="text-4xl font-title text-red-500">
        Please enter your name !
      </h1>
    </div>

    <div class="button-block text-center mt-8">
      <a
        @click="gameLaunch"
        class="start-game-btn bg-green-main px-16 py-4 rounded shadow-md font-title text-2xl inline-block text-gray-200 cursor-pointer"
        >Start Game !</a
      >
    </div>
    <game-top-famous></game-top-famous>
    <app-navigation></app-navigation>
  </div>
</template>

<script>
import AppNavigation from "@/components/appNavigation";
import GameTopFamous from "@/components/gameTopFamous";

export default {
  name: "gameInputPlayerName",
  components: { GameTopFamous, AppNavigation },
  data() {
    return {
      playerName: null,
      nameFulled: true
    };
  },
  mounted() {
    this.checkCookieName();
  },

  methods: {
    checkName() {
      this.nameFulled = !!this.playerName;
    },

    checkCookieName() {
      let cookieHaveName = document.cookie
        .split(";")
        .some(item => item.trim().startsWith("playerName"));

      if (cookieHaveName) {
        this.fillNameFromCookies();
      }
    },

    fillNameFromCookies() {
      let cookie = document.cookie;
      let cookieArray = cookie.split(";");

      let cookieItem = cookieArray.find(item =>
        item.trim().startsWith("playerName")
      );

      this.playerName = cookieItem.replaceAll("playerName=", "");
    },

    saveNameToCookies() {
      let now = new Date();
      let next30 = new Date(now.setDate(now.getDate() + 30)).toUTCString();
      document.cookie = "playerName=" + this.playerName + "; expires=" + next30;
    },

    gameLaunch() {
      this.checkName();
      if (this.nameFulled) {
        this.saveNameToCookies();
        this.$store.commit("editPlayerName", this.playerName);
        this.$emit("startGame");
      }
    }
  }
};
</script>

<style scoped></style>
