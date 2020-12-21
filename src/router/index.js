import { createRouter, createWebHistory } from "vue-router";
import Game from "../views/Game.vue";

const routes = [
  {
    path: "/",
    name: "Game",
    component: Game
  },
  {
    path: "/high-score",
    name: "High Score",
    component: () => import("../views/highScore")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
