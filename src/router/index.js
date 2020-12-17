import { createRouter, createWebHistory } from "vue-router";
import Game from "../views/Game.vue";

const routes = [
  {
    path: "/",
    name: "Game",
    component: Game
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/guide",
    name: "Guide",
    component: () => import("../views/Guide")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
