<template>
  <v-container>
    <v-tabs v-model="tab" background-color="transparent" grow>
      <v-tab @click="enableQuiz()">Quiz</v-tab>
      <v-tab @click="enableCardGame()">Match Up</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item key="quiz">
        <v-card flat>
          <Quiz />
        </v-card>
      </v-tab-item>
      <v-tab-item key="gameCard">
        <v-card flat>
          <GameCard />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import GameCard from "../components/GameCard";
import Quiz from "../components/Quiz";

export default {
  components: {
    GameCard,
    Quiz
  },
  data() {
    return {
      tab: null
    };
  },
  methods: {
    enableQuiz: function() {
      this.tab = "quiz";
    },
    enableCardGame: function() {
      this.tab = "gameCard";
    }
  }
};
</script>