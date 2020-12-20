<template>
  <div class="game-table-wrapper px-16">
    <game-header></game-header>
    <h1 class="font-title text-gray-200 text-center py-8 text-4xl">
      WoW: Mists of Tirna Scithe puzzle
    </h1>
    <div class="game-board grid grid-cols-4 gap-4">
      <game-card
        v-for="item in this.finalCards"
        :key="item.id"
        :cardImage="item.img"
        :isMaster="item.master"
        @shuffleCards="resetLevel"
        @gameOver="gameOverReport"
      ></game-card>
    </div>
  </div>
</template>

<script>
import GameCard from "@/components/gameCard";
import GameHeader from "@/components/gameHeader";
export default {
  name: "gameTable",
  components: { GameHeader, GameCard },

  data() {
    return {
      cardsData: [],
      masterCard: {},
      finalCards: [],
      workArray: [],

      puzzleFactors: {
        key: String,
        value: Boolean
      }
    };
  },

  methods: {
    randomNumberBetween(min, max) {
      let minimum = Math.ceil(min);
      let maximum = Math.floor(max);

      return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    },

    getMasterCard() {
      let randomCardIndex = this.randomNumberBetween(
        0,
        this.cardsData.length - 1
      );
      let cardPreparing = this.cardsData[randomCardIndex];
      cardPreparing.master = true;

      this.masterCard = cardPreparing;
      this.workArray.push(cardPreparing);

      this.chosePuzzleFactor();
    },

    chosePuzzleFactor() {
      let puzzleOperator = this.randomNumberBetween(1, 3);

      if (puzzleOperator === 1) {
        this.puzzleFactors.key = "circled";
        this.puzzleFactors.value = this.masterCard.circled;
      }

      if (puzzleOperator === 2) {
        this.puzzleFactors.key = "fulled";
        this.puzzleFactors.value = this.masterCard.fulled;
      }

      if (puzzleOperator === 3) {
        this.puzzleFactors.key = "name";
        this.puzzleFactors.value = this.masterCard.name;
      }

      this.getSlavesCards();
    },

    getSlavesCards() {
      let cardsArray = [];

      this.cardsData.forEach(item => {
        if (!(item[this.puzzleFactors.key] === this.puzzleFactors.value))
          cardsArray.push(item);
      });

      cardsArray.splice(1, 3).forEach(finalItem => {
        this.workArray.push(finalItem);
      });

      this.gCoreShuffle(this.workArray);
    },

    gCoreShuffle(items) {
      let length = items.length;

      while (length !== 0) {
        let randId = Math.floor(Math.random() * length);
        length = length - 1;

        let tmp = items[length];

        items[length] = items[randId];
        items[randId] = tmp;
      }

      this.finalCards = items;
    },

    resetLevel() {
      this.workArray = [];
      this.getMasterCard();
    },

    gameOverReport() {
      this.$emit("gameOver");
    },

    levelTimer() {
      window.setTimeout();
    }
  },

  mounted() {
    this.cardsData = this.$store.state.cards.cardItems;
    this.getMasterCard();
  }
};
</script>

<style scoped></style>
