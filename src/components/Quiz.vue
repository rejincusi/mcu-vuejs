<template>
  <v-container class="quiz-container">
    <v-row>
      <v-col>
        <v-card class="time-info text-center pa-2" outlined tile>Score: {{ score }}</v-card>
      </v-col>

    </v-row>
    <v-row>
      <v-col>
        <v-parallax dark :src="currentQuestion.img" height="400">
          <v-row align="center" justify="center">
            <v-col :style="{ padding: '100px' }">
              <h3 class="display-2 font-weight-thin mb-4 text-center font-weight-bold">{{ currentQuestion.question }}</h3>
              <v-row>
                <v-col v-for="(choice, i ) in currentQuestion.choices" :key="i" xs="12" md="6">
                  <v-btn block @click="handleAnswer(choice)">{{choice}}</v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-parallax>
      </v-col>
      <!-- <v-col class="image" xs=12 md=6>
        <v-card>
          <img :src="currentQuestion.img" />
        </v-card>
      </v-col>
      <v-col class="questions" xs="12" md="6">
        <h3>{{ currentQuestion.question }}</h3>
        <v-row>
          <v-col v-for="(choice, i ) in currentQuestion.choices" :key="i" xs="12" md="6">
            <v-btn block>{{choice}}</v-btn>
          </v-col>
        </v-row>
      </v-col>-->
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    currentQuestion: {
      id: 1,
      img:
        "https://static2.thequizimages.com/wordpress/wp-content/uploads/2017/11/mcu-4.png?q=50&fit=crop&w=963&h=481&dpr=1.5",
      question: "Which war did Captain America fight in?",
      answer: "World War II",
      choices: ["World War I", "World War II", "Vietnam War", "Iraq War"]
    },
    score: 0,
    questionaire: [
      {
        id: 1,
        img:
          "https://static2.thequizimages.com/wordpress/wp-content/uploads/2017/11/mcu-4.png?q=50&fit=crop&w=963&h=481&dpr=1.5",
        question: "Which war did Captain America fight in?",
        answer: "World War II",
        choices: ["World War I", "World War II", "Vietnam War", "Iraq War"]
      },
      {
        id: 2,
        img: "https://static2.thequizimages.com/wordpress/wp-content/uploads/2017/11/mcu-3.png?q=50&fit=crop&w=963&h=481&dpr=1.5",
        question: "Who played the Hulk before Mark Ruffalo?",
        answer: "Edward Norton",
        choices: ["Liam Hemsworth", "Gary Oldman", "Edward Norton", "Will Smith"]
      },
      {
        id: 3,
        img: "https://static2.thequizimages.com/wordpress/wp-content/uploads/2017/11/mcu2.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5",
        question: "What is the name of Thor’s hammer?",
        answer: "Mjolnir",
        choices: ["Balder", "Aesir", "Vanir", "Mjolnir"]
      },
      {
        id: 4,
        img: "https://static0.thequizimages.com/wordpress/wp-content/uploads/2017/11/gotg.jpg?q=50&fit=crop&w=963&h=481&dpr=1.5",
        question: "What is Peter Quill’s alter ego?",
        answer: "Star-Lord",
        choices: ["Star-Gay", "Star-Gazer", "Star-Dude", "Star-Lord"]
      },
      {
        id: 5,
        img: "https://static3.thequizimages.com/wordpress/wp-content/uploads/2017/11/mcu-8.png?q=50&fit=crop&w=963&h=481&dpr=1.5",
        question: "What Nazi organization infiltrated SHIELD?",
        answer: "HYDRA",
        choices: ["HYDRA", "EMPUSA", "SPHINX", "NAZI"]
      },
      {
        id: 6,
        img: "https://static2.thequizimages.com/wordpress/wp-content/uploads/2017/11/mcu-10.png?q=50&fit=crop&w=963&h=481&dpr=1.5",
        question: "Where did Scott Lang work before becoming Ant-Man?",
        answer: "",
        choices: ["", "", "", ""]
      },
      {
        id: 7,
        img: "",
        question: "",
        answer: "",
        choices: ["", "", "", ""]
      },
      {
        id: 8,
        img: "",
        question: "",
        answer: "",
        choices: ["", "", "", ""]
      },
      {
        id: 9,
        img: "",
        question: "",
        answer: "",
        choices: ["", "", "", ""]
      },
      {
        id: 10,
        img: "",
        question: "",
        answer: "",
        choices: ["", "", "", ""]
      },
      {
        id: 11,
        img: "",
        question: "",
        answer: "",
        choices: ["", "", "", ""]
      },
      {
        id: 12,
        img: "",
        question: "",
        answer: "",
        choices: ["", "", "", ""]
      },
      {
        id: 13,
        img: "",
        question: "",
        answer: "",
        choices: ["", "", "", ""]
      },
      {
        id: 14,
        img: "",
        question: "",
        answer: "",
        choices: ["", "", "", ""]
      },
      {
        id: 15,
        img: "",
        question: "",
        answer: "",
        choices: ["", "", "", ""]
      }
    ]
  }),
  computed: {},
  mounted() {
    this.selectRandomQuestion()
  },
  methods: {
    handleAnswer(choice) {
      if (this.currentQuestion.answer === choice) {
        this.handleCorrectAnswer()
      } else {
        this.selectRandomQuestion()
      }
    },
    handleCorrectAnswer() {
      this.score += 1
      this.selectRandomQuestion()
    },
    selectRandomQuestion() {
      const questionerLength = this.questionaire.length
      this.currentQuestion = this.questionaire[Math.floor(Math.random() * questionerLength)];
    }
  }
};
</script>

<style>
.quiz-container {
  margin-bottom: 80px;
}
</style>