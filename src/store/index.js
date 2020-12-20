import { createStore } from "vuex";
import player from "@/store/player";
import cards from "@/store/cards";

export default createStore({
  modules: {
    player,
    cards
  }
});
