import { createStore } from "vuex";
import player from "@/store/player";
import cards from "@/store/cards";
import game from "@/store/game";

export default createStore({
  modules: {
    player,
    cards,
    game
  }
});
