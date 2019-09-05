<template>
  <v-container class="quiz-container">
    <v-row>
      <v-col>
        <v-card class="score-info text-center pa-2" outlined tile>Score: {{ score }}</v-card>
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
        img: "http://images1.fanpop.com/images/photos/1700000/The-Incredible-Hulk-2008-Trailer-2-the-incredible-hulk-1750693-1275-540.jpg",
        question: "Who played the Hulk before Mark Ruffalo?",
        answer: "Edward Norton",
        choices: ["Liam Hemsworth", "Gary Oldman", "Edward Norton", "Will Smith"]
      },
      {
        id: 3,
        img: "https://am23.akamaized.net/tms/cnt/uploads/2018/02/MCU-Thor-Mjolnir-Chris-Hemsworth-1200x600.jpg",
        question: "What is the name of Thor’s hammer?",
        answer: "Mjolnir",
        choices: ["Balder", "Aesir", "Vanir", "Mjolnir"]
      },
      {
        id: 4,
        img: "https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2019/04/peter_quill_chris_pratt_infinity_war_via_marvel_website_2019.png",
        question: "What is Peter Quill’s alter ego?",
        answer: "Star-Lord",
        choices: ["Gaylord", "Star-Gazer", "Star-Dude", "Star-Lord"]
      },
      {
        id: 5,
        img: "https://www.screengeek.net/wp-content/uploads/2017/04/marvel-nazis.png",
        question: "What Nazi organization infiltrated SHIELD?",
        answer: "HYDRA",
        choices: ["HYDRA", "EMPUSA", "SPHINX", "NAZI"]
      },
      {
        id: 6,
        img: "https://pbs.twimg.com/media/DkCLHJ9UYAEGrxw.jpg",
        question: "Where does Steve Rogers realize he’s in the 21st century?",
        answer: "Time Square",
        choices: ["Central Park", "Time Square", "Wall Street", "Baxter Building"]
      },
      {
        id: 7,
        img: "https://cdn.vox-cdn.com/thumbor/mzDABkvx734jlhFFSVDhsSEoap4=/0x0:1920x1080/1200x800/filters:focal(953x260:1259x566)/cdn.vox-cdn.com/uploads/chorus_image/image/59594581/Still_of_Stan_Lee_from_Spider_Man_Homecoming.1525208702.jpg",
        question: "Who has a cameo in every MCU movie?",
        answer: "Stan Lee",
        choices: ["Jack Kirby", "Stan Lee", "Steve Ditko", "Joss Wheldon"]
      },
      {
        id: 8,
        img: "https://media.vanityfair.com/photos/59f10041a923ff0fd178ca84/3:2/w_1287,h_858,c_limit/Thor-Ragnarok-Review.jpg",
        question: "Which planet are Thor and the Hulk on in Thor: Ragnarok?",
        answer: "Sakaar",
        choices: ["Knowhere", "Sakaar", "Asgard", "Xandar"]
      },
      {
        id: 9,
        img: "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/Yellowjacket-still-alive-700x300.jpg",
        question: "Who was the main villain in Ant-Man?",
        answer: "Yellow Jacket",
        choices: ["Red Skull", "The Wasp", "Galactus", "Yellow Jacket"]
      },
      {
        id: 10,
        img: "https://www.thewrap.com/wp-content/uploads/2018/02/the-black-panther-film-marvel.jpg",
        question: "Black Panther's suit is made from?",
        answer: "Vibranium",
        choices: ["Adamantium", "Barium", "Strontium", "Vibranium"]
      },
      {
        id: 11,
        img: "https://d.newsweek.com/en/full/513347/doctor-strange-marvel.jpg",
        question: "What is the name of the spiritual retreat where Dr. Stephen Strange discovers the mystic arts?",
        answer: "Kamar-Taj",
        choices: ["Song Saa", "Kamar-Taj", "MesaStila", "Vana Malsi"]
      },
      {
        id: 12,
        img: "https://discussingfilm.files.wordpress.com/2019/03/marvel-infinity-mind-stone-scepter.jpg",
        question: "How many Infinity Stones are there in the MCU?",
        answer: "Six",
        choices: ["4", "5", "6", "7"]
      },
      {
        id: 13,
        img: "https://static.magiquiz.com/wp-content/uploads/2019/03/19-Marvel-Studios-Captain-Marvel-Trailer-2-YouTube-4-1.png",
        question: "What branch of the US Military was Carol a part of before losing her memory?",
        answer: "The Air Force",
        choices: ["The Marine", "The Air Force", "Navy", "Army"]
      },
      {
        id: 14,
        img: "https://thegww.com/wp-content/uploads/2018/11/Natasha-Romanoff-Zola-CATWS.jpg",
        question: "What Alias Did Black Widow Use As Tony Stark's Assistant In Iron Man 2?",
        answer: "Natalia Romanova",
        choices: ["Natalie Rushman", "Natalia Romanova", "Natasha Romanoff", "Yelena Belova"]
      },
      {
        id: 15,
        img: "https://sharedmedia.grahamdigital.com/photo/2018/10/17/tom-holland-zendaya-spider-man-far-from-home-GettyImages-1052025168_12832850_ver1.0_1280_720.jpg",
        question: "What is MJ's first name in the new spiderman?",
        answer: "Michelle",
        choices: ["Mary", "Michelle", "Marie", "Melanie"]
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
      console.log("aisdo", this.questionaire.length)
      console.log("asdasdasdsad", this.currentQuestion.answer)
      const questionaireLength = this.questionaire.length
      this.currentQuestion = this.questionaire[Math.floor(Math.random() * questionaireLength)];
    }
  }
};
</script>

<style>
.quiz-container {
  margin-bottom: 80px;
}
.score-info {
  color: white !important;
  background-color: #212121 !important;
  border-radius: 10px !important;
  margin-right: 45%;
  margin-left: 45%;
}

h3 {
  text-shadow: 1px 2px #63606082;
}
</style>