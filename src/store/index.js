import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    name: "kalimpivko",
    gameItems: [
      {
        id: 1,
        img: "/images/LeafEmpty.png",
        name: "leaf",
        master: false,
        fulled: false,
        circled: false
      },
      {
        id: 2,
        img: "/images/LeafFull.png",
        name: "leaf",
        master: false,
        fulled: true,
        circled: false
      },
      {
        id: 3,
        img: "/images/CircledLeafFull.png",
        name: "leaf",
        master: false,
        fulled: true,
        circled: true
      },
      {
        id: 4,
        img: "/images/CircledLeafEmpty.png",
        name: "leaf",
        master: false,
        fulled: false,
        circled: true
      },
      {
        id: 5,
        img: "/images/FlowerEmpty.png",
        name: "flower",
        master: false,
        fulled: false,
        circled: false
      },
      {
        id: 6,
        img: "/images/CircledFlowerEmpty.png",
        name: "flower",
        master: false,
        fulled: false,
        circled: true
      },
      {
        id: 7,
        img: "/images/FlowerFull.png",
        name: "flower",
        master: false,
        fulled: true,
        circled: false
      },
      {
        id: 8,
        img: "/images/CircledFlowerFull.png",
        name: "flower",
        master: false,
        fulled: true,
        circled: true
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
