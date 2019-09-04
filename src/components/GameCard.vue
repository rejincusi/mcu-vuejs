<template>
  <div id="game">
    <v-container class="time-turns">
      <v-row no-gutters>
        <v-col>
          <v-card class="time-info text-center pa-2" outlined tile>Time: {{ time }}</v-card>
        </v-col>
        <v-col>
          <v-card class="turns-info text-center pa-2" outlined tile>Turns: {{ turns }}</v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="cards">
      <v-row>
        <v-col
          v-for="(card, i ) in cards"
          :key="i"
          class="card"
          :class="{ flipped: card.flipped, found: card.found }"
          @click="flipCard(card)"
        >
          <v-card class="pa-2" height="130" width="250" :style="{ maxWidth: '80px'}">
            <div class="back"></div>
            <div
              class="front"
              :style="{ backgroundImage: 'url(' + card.image + ')', backgroundSize: 'cover'}"
            ></div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="splash" v-if="showSplash">
      <div class="overlay"></div>
      <div class="content">
        <div class="title">You won!</div>
        <div class="score">Score: {{ score }}</div>
        <button class="newGame" @click="resetGame()">New game</button>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import moment from "moment";

export default {
  data: () => ({
    showSplash: false,
    cards: [],
    started: false,
    startTime: 0,
    turns: 0,
    flipBackTimer: null,
    timer: null,
    time: "--:--",
    score: 0,
    CardTypes: [
      {
        name: "natasha",
        image:
          "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9a/BlackWidow-EndgameProfile.jpg/revision/latest/scale-to-width-down/2000?cb=20190423174842"
      },
      {
        name: "gamora",
        image:
          "https://imgc.allpostersimages.com/img/print/posters/avengers-infinity-war-gamora_a-G-15605557-13198931.jpg"
      },
      {
        name: "scarlet",
        image:
          "https://www.jetss.com/wp-content/uploads/2019/05/elizabeth-olsen-audition-daenerys-scarlet-witch.jpg"
      },
      {
        name: "shuri",
        image:
          "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/fd/Shuri_AIW_Profile.jpg/revision/latest/scale-to-width-down/2000?cb=20180518212643"
      },
      {
        name: "okoye",
        image:
          "https://vignette.wikia.nocookie.net/marveldatabase/images/b/b7/Avengers_Endgame_poster_049_Textless.jpg/revision/latest/scale-to-width-down/2000?cb=20190426165016"
      },
      {
        name: "mantis",
        image:
          "https://vignette.wikia.nocookie.net/heroes-v-villains/images/1/17/MantisAvengersIW.jpg/revision/latest?cb=20180422135724"
      },
      {
        name: "marvel",
        image:
          "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/f/fe/CapMarvel-EndgameProfile.jpeg/revision/latest/scale-to-width-down/2000?cb=20190423175247"
      },
      {
        name: "nebula",
        image:
          "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/0/05/Nebula-EndgameProfile.jpg/revision/latest/scale-to-width-down/2000?cb=20190423175315"
      },
      {
        name: "peter",
        image:
          "https://boundingintocomics.com/files/2018/04/avengers-infinity-war-character-posters-spider-man-1099213.jpeg"
      },
      {
        name: "tony",
        image:
          "https://vignette.wikia.nocookie.net/earth-199999/images/e/e9/Iron_Man_AIW_Profile.jpg/revision/latest/scale-to-width-down/350?cb=20180818201530"
      },
      {
        name: "thor",
        image:
          "https://vignette.wikia.nocookie.net/comic-vs-anime-vs-cartoon/images/4/45/Thor_AIW_Profile.jpg/revision/latest?cb=20180420102527"
      },
      {
        name: "captain",
        image:
          "https://live.staticflickr.com/65535/40707659803_c249202eb7_b.jpg"
      },
      {
        name: "antman",
        image:
          "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/e/ea/AntMan-EndgameProfile.jpg/revision/latest/scale-to-width-down/2000?cb=20190423175007"
      },
      {
        name: "stephen",
        image:
          "https://vignette.wikia.nocookie.net/marveldatabase/images/d/d3/Avengers_Infinity_War_poster_014_Textless.jpg/revision/latest?cb=20180418025421"
      },
      {
        name: "hulk",
        image:
          "https://fsa.zobj.net/crop.php?r=HxZZsjPAo0z8PVvGKSP5pC6eQ7czlSBQwDsZU2lHsG0GUP1RVT-OfQSrJotO4l7kKm1mpFHWwvepbt9RCmZ-rpJ99TGhCHGL9WyJ9hgK1PGYUbY1cJ78PYS6jPzODa2i6uKG9yoPuxpwGhu8"
      }
    ]
  }),
  created() {
    this.resetGame();
  },
  methods: {
    shuffleCards() {
      let cards = [].concat(
        _.cloneDeep(this.CardTypes),
        _.cloneDeep(this.CardTypes)
      );
      return _.shuffle(cards);
    },

    resetGame() {
      this.showSplash = false;
      let cards = this.shuffleCards();
      this.turns = 0;
      this.score = 0;
      this.started = false;
      this.startTime = 0;

      _.each(cards, card => {
        card.flipped = false;
        card.found = false;
      });

      this.cards = cards;
    },

    flippedCards() {
      return _.filter(this.cards, card => card.flipped);
    },

    sameFlippedCard() {
      let flippedCards = this.flippedCards();
      if (flippedCards.length == 2) {
        if (flippedCards[0].name == flippedCards[1].name) return true;
      }
    },

    setCardFounds() {
      _.each(this.cards, card => {
        if (card.flipped) card.found = true;
      });
    },

    checkAllFound() {
      let foundCards = _.filter(this.cards, card => card.found);
      if (foundCards.length == this.cards.length) return true;
    },

    startGame() {
      this.started = true;
      this.startTime = moment();

      this.timer = setInterval(() => {
        this.time = moment(moment().diff(this.startTime)).format("mm:ss");
      }, 1000);
    },

    finishGame() {
      this.started = false;
      clearInterval(this.timer);
      let score =
        1000 -
        (moment().diff(this.startTime, "seconds") - this.CardTypes.length * 5) *
          3 -
        (this.turns - this.CardTypes.length) * 5;
      this.score = Math.max(score, 0);
      this.showSplash = true;
    },

    flipCard(card) {
      if (card.found || card.flipped) return;

      if (!this.started) {
        this.startGame();
      }

      let flipCount = this.flippedCards().length;
      if (flipCount == 0) {
        card.flipped = !card.flipped;
      } else if (flipCount == 1) {
        card.flipped = !card.flipped;
        this.turns += 1;

        if (this.sameFlippedCard()) {
          // Match!
          this.flipBackTimer = setTimeout(() => {
            this.clearFlipBackTimer();
            this.setCardFounds();
            this.clearFlips();

            if (this.checkAllFound()) {
              this.finishGame();
            }
          }, 200);
        } else {
          // Wrong match
          this.flipBackTimer = setTimeout(() => {
            this.clearFlipBackTimer();
            this.clearFlips();
          }, 1000);
        }
      }
    },

    clearFlips() {
      _.map(this.cards, card => (card.flipped = false));
    },

    clearFlipBackTimer() {
      clearTimeout(this.flipBackTimer);
      this.flipBackTimer = null;
    }
  }
};
</script>

<style>
#game {
  margin: 2em;
}

.cards .card {
  position: relative;
  display: inline-block;
  width: 100px;
  height: 150px;
  margin-left: 7px;
  -moz-transition: opacity 0.5s;
  -o-transition: opacity 0.5s;
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
}
.cards .card .front,
.cards .card .back {
  border-radius: 5px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: White;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -moz-transition: -moz-transform 0.6s;
  -o-transition: -o-transform 0.6s;
  -webkit-transition: -webkit-transform 0.6s;
  transition: transform 0.6s;
  -moz-transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.cards .card .back {
  background-image: url("https://fsa.zobj.net/crop.php?r=DdmjDCz4CUYjO-MWLOgHFhudZCNYn-hRuYkxhHKFxZIc_pap-VFAPXCqDNCqm3RfJ4IUy70eDDWLKTpwfDvRt9Ga37hW-KFGZ2_IF2SxMdjrDZjPNk3kF0nD5JV7eOirpiPcpK2aDhjh-BYm5bufnS33Wx2fMdOgJ8EhO1LNEbTdmrO6C599SZ-8nY8");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  font-size: 12px;
}
.cards .card .front {
  -moz-transform: rotateY(-180deg);
  -ms-transform: rotateY(-180deg);
  -webkit-transform: rotateY(-180deg);
  transform: rotateY(-180deg);
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center;
}
.cards .card.flipped .back,
.cards .card.found .back {
  -moz-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
}
.cards .card.flipped .front,
.cards .card.found .front {
  -moz-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
}
.cards .card.found {
  opacity: 0.3;
}

.splash {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.splash .overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
.splash .content {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 400px;
  height: 200px;
  margin: auto;
  text-align: center;
  background-color: rgba(51, 51, 51, 0.9);
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  -moz-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.8);
  -webkit-box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.8);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.8);
  padding: 1em;
}
.splash .content .title {
  font-size: 1.8em;
  padding: 0.5em;
}
.splash .content .score {
  padding: 0.5em;
}
.splash .content button {
  margin-top: 1em;
  background-color: #444;
  padding: 5px 20px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  border: 1px solid #555;
  color: White;
  font-size: 1.4em;
}
.time-turns {
  width: 50%;
}
.turns-info {
  background-color: dimgray !important;
  color: white !important;
  border-radius: 100px !important;
}
.time-info {
  background-color: dimgray !important;
  color: white !important;
  border-radius: 100px !important;
}
</style>