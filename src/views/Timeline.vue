<template>
  <v-timeline class="timeline-container" align-top :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      small
      fill-dot>
      <template v-slot:icon>
        <v-avatar>
          <img src="https://github.com/rejincusi/mcu/blob/master/images/avengers-logo.png?raw=true">
        </v-avatar>
      </template>
      <template slot="opposite">
          <img :src="item.sideImg" height="300">
      </template>
      <v-card :elevation="6" :color="item.color" dark>
        <v-card-title class="title">{{ item.title }}</v-card-title>
        <v-card-text class="white text--primary">
          <v-container fluid>
            <v-row>
              <v-col cols="12" md="3">
                <v-img :src="item.image" max-width="150" />
              </v-col>
              <v-col cols="12" md="9">
                <p>{{ item.description }}</p>
                <v-btn
                  :color="item.color"
                  class="mx-0"
                  outlined
                  @click="showTrailer(item.youtube)"
                >Trailer</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-overlay :value="overlay" opacity="0.9">
      <v-btn icon @click="overlay = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <br />
      <youtube :video-id="youtubeId"></youtube>
    </v-overlay>
  </v-timeline>
</template>

<script>
export default {
  data: () => ({
    overlay: false,
    youtubeId: "",
    items: [
      {
        id: 1,
        color: "red darken-3",
        sideImg: "http://i.imgur.com/Mdnai7S.png",
        title: "Captain America: First Avenger",
        year: "2011",
        description:
          "Captain America is the fifth Marvel Studios film, with Iron Man, The Hulk, and Thor all having films before Cap. But it's the first film in our list, because the events take place first - during World War II. We see the creation of the super soldier portrayed by Chris Evans, as well as his first battle with Hydra and its leader Red Skull. The film also introduces the Tesseract, a key object in the MCU.",
        image:
          "https://github.com/rejincusi/mcu/blob/master/images/1-captain-america-.jpg?raw=true",
        youtube: "W4DlMggBPvc"
      },
      {
        id: 2,
        color: "red darken-3",
        sideImg: "https://vignette.wikia.nocookie.net/ffmcu/images/e/ee/Captain_marvel_transparent_by_asthonx1-dcncwke.png/revision/latest?cb=20181030233026",
        title: "Captain Marvel",
        year: "2019",
        description:
          "The second film on our list is the most recent Marvel Studios film to hit theaters. Captain Marvel is set in 1995. We see the titular hero Carol Danvers, played by Brie Larson, fall to Earth and begin a hunt for the shape-shifting Skrull aliens. There’s as much action here as there is nostalgia, especially if you're a 90s kid, thanks to scenes with Blockbuster stores and even dial-up internet.",
        image:
          "https://github.com/rejincusi/mcu/blob/master/images/2-captain-marvel.jpg?raw=true",
        youtube: "Z1BCujX3pw8"
      },
      {
        id: 3,
        color: "red darken-3",
        sideImg: "http://www.pngall.com/wp-content/uploads/2016/05/Iron-Man-PNG-File.png",
        title: "Iron Man",
        year: "2008",
        description:
          "According to the official Marvel timeline, Iron Man takes place in 2010. It's all about genius/inventor/philanthropist/playboy Tony Stark, played by Robert Downey Jr. He is captured by a terrorist organization, the leader of which wants the latest weapons system designed by Stark. However, Stark designs something even more powerful to help himself escape: The first Iron Man suit.",
        image:
          "https://github.com/rejincusi/mcu/blob/master/images/3-iron-man.jpg?raw=true",
        youtube: "8hYlB38asDY"
      },
      {
        id: 4,
        color: "red darken-3",
        sideImg: "https://vignette.wikia.nocookie.net/disney/images/a/a1/IronPatriot-IM3.png/revision/latest?cb=20131111224552",
        title: "Iron Man 2",
        year: "2010",
        description:
          "The second Iron Man picks up where the first left off: Tony Stark grappling with his Iron Man identity being revealed. The government wants the technology behind his suit, and when Stark refuses to hand it over, another weapons manufacturer shows he’s willing to do anything to get his hands on it. This film also introduces fellow Avengers the Black Widow and War Machine.",
        image:
          "https://github.com/rejincusi/mcu/blob/master/images/4-iron-man-2.jpg?raw=true",
        youtube: "wKtcmiifycU"
      },
      {
        id: 5,
        color: "red darken-3",
        sideImg: "https://pngmafia.net/image/2019/01/Thor-14-min.png",
        title: "Thor",
        year: "2011",
        description:
          "The God of lightning has been banished to Earth from Asgard by his father Odin, all thanks to the trickery of Loki. In order to earn his powers back and control his hammer, Thor, portrayed by Chris Hemsworth, must prove he’s worthy. Luckily, he meets a nice Earth scientist, played by Natalie Portman, who can help him set things right before Loki assumes total control of Asgard.",
        image:
          "https://github.com/rejincusi/mcu/blob/master/images/5-thor.jpg?raw=true",
        youtube: "JOddp-nlNvQ"
      },
      {
        id: 6,
        color: "red darken-3",
        sideImg: "https://miro.medium.com/max/2538/1*sR7-iqYeA7Q4PsNzcOENKA.png",
        title: "The Incredible Hulk",
        year: "2008",
        description:
          "The Incredible Hulk follows Bruce Banner on the run from General Thunderbolt Ross and the US Military. Realising he can’t ever hope to control or contain the Hulk, Ross decides to create his own version of the Hulk using another soldier, but he quickly loses control. The Incredible Hulk stars Edward Norton, but Mark Ruffalo replaced him in 2012 and has been the big green man ever since.",
        image:
          "https://github.com/rejincusi/mcu/blob/master/images/6-hulk.jpg?raw=true",
        youtube: "xbqNb2PFKKA"
      },
      {
        id: 7,
        color: "red darken-3",
        sideImg: "https://www.pngkey.com/png/full/7-79032_avengers-movie-png-avengers-clint-barton-hawkeye-cosplay.png",
        title: "The Avengers",
        year: "2012",
        description:
          "The Avengers is the culmination of the so-called Phase 1 of the MCU. With all the main heroes having been introduced, the real challenge was finding something daunting enough to force them to work together. The combined power of Loki, the Tesseract, and an alien horde invading New York City proved to be the match that made these superheroes become friends in life and on the frontline.",
        image:
          "https://github.com/rejincusi/mcu/blob/master/images/7-the-Avengers.jpg?raw=true",
        youtube: "eOrNdBpGMv8"
      },
      {
        id: 8,
        color: "red darken-3",
        icon: "mdi-book-variant",
        title: "Iron Man 3",
        year: "2013",
        description:
          "The third and final standalone Iron Man film takes place six months after the giant fight in New York City. Tony Stark is dealing with the memories of the battle that took place (and nearly killed him). The memories lead to him to building an army of Iron Man suits so he can always be prepared.",
        image:
          "https://github.com/rejincusi/mcu/blob/master/images/8-iron-man-3.jpg?raw=true",
        youtube: "YLorLVa95Xo"
      },
      {
        id: 9,
        color: "red darken-3",
        sideImg: "https://pngriver.com/wp-content/uploads/2018/03/Download-Captain-America-PNG-HD-For-Designing-Projects.png",
        title: "Captain America: The Winter Soldier",
        year: "2014",
        description:
          "Captain America has been working for Shield, a special government agency, since the events of The Avengers, but he finds himself questioning the motives of the organization as he learns more about its plans. On top of that, his closest friend returns from the dead and becomes an adversary, the Winter Soldier, played by Sebastian Stan. This film also introduces The Falcon, played by Anthony Mackie.",
        image:
          "https://github.com/rejincusi/mcu/blob/master/images/9-captain-america-ws.jpg?raw=true",
        youtube: "7SlILk2WMTI"
      },
      {
        id: 10,
        color: "red darken-3",
        sideImg: "http://pngriver.com/wp-content/uploads/2018/04/Download-Loki-Transparent-Background.png",
        title: "Thor: The Dark World",
        year: "2013",
        description:
          "The second Thor film sees its hero return to Asgard after the Loki-led invasion of New York City. He doesn’t have much time to rest, however, as the ancient Dark Elves return. They were once defeated by his grandfather and thought to be extinct. They're back now and seeking the Aether, a powerful weapon that is later revealed to be an Infinity Stone, or one six powerful gems in the MCU.",
        image:
          "https://github.com/rejincusi/mcu/blob/master/images/10-thor-dw.jpg?raw=true",
        youtube: "npvJ9FTgZbM"
      },
      {
        id: 11,
        color: "red darken-3",
        sideImg: "https://i.imgur.com/kiE9apB.png",
        title: "Guardian of the Galaxy",
        year: "2014",
        description:
          "Guardians of the Galaxy stars Chris Pratt as Peter Quill, a rogue scavenger who stumbles across an Infinity Stone hidden in the ruins of an alien world. In a race against time, he forms a ragtag group of outcasts that includes a talking raccoon (voiced by Bradley Cooper), Groot the talking tree, and others. Together, they must stop Ronan the Accuser from wielding the Infinity Stone.",
        image:
          "https://github.com/rejincusi/mcu/blob/master/images/11-Guardians-of-the-galaxy.jpg?raw=true",
        youtube: "d96cjJhvlMA"
      },
      {
        id: 12,
        color: "red darken-3",
        sideImg: "http://www.pngall.com/wp-content/uploads/2016/04/Avengers-Free-Download-PNG.png",
        title: "The Avengers: Age of Ultron",
        year: "2014",
        description:
          "The Avengers reunite to confront a mistake created by Tony Stark and Bruce Banner: the AI known as Ultron, voiced by James Spader. If a single robotic version of Ultron is left standing, he can continue fighting the Avengers. This film also introduces new Avengers: The Scarlet Witch (played by Elizabeth Olson), Quicksilver (played by Aaron Taylor-Johnson), and Vision (played by Paul Bettany).",
        image:
          "https://github.com/rejincusi/mcu/blob/master/images/12-avengers-age-of-ultron.jpeg?raw=true",
        youtube: "tmeOjFno6Do"
      },
      {
        id: 13,
        color: "red darken-3",
        sideImg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/627fe721-846f-4f75-ac61-111ca00b27dd/dd7hpzv-6c7540d3-7e76-4764-a1c0-b6822bc9fa53.png/v1/fill/w_840,h_951,strp/ant_man__avengers_end_game__render__by_alanmac95_dd7hpzv-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ0OSIsInBhdGgiOiJcL2ZcLzYyN2ZlNzIxLTg0NmYtNGY3NS1hYzYxLTExMWNhMDBiMjdkZFwvZGQ3aHB6di02Yzc1NDBkMy03ZTc2LTQ3NjQtYTFjMC1iNjgyMmJjOWZhNTMucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.sqVCIaI_3U0LmhiJ4eBpVkn2dDIT7uY9y0BTGBwsIag",
        title: "Ant-Man",
        year: "2015",
        description:
          "Ant-Man stars Paul Rudd as a cat burglar recruited by Michael Douglas’ Hank Pym to dawn the Ant-Man suit in order to stop the technology from becoming weaponized. Pym’s former prodigy (played by Corey Stoll) has recreated the technology in the form a yellow jacket suit, and Ant-Man must battle him and ultimately save the day on the smallest scale imaginable.",
        image:
          "https://github.com/rejincusi/mcu/blob/master/images/13-ant-man.jpg?raw=true",
        youtube: "pWdKf3MneyI"
      },
      {
        id: 14,
        color: "red darken-3",
        sideImg: "https://www.stickpng.com/assets/images/58ee7eb83545163ec1942cb2.png",
        title: "Guardians of the Galaxy Vol.2",
        year: "2017",
        description:
          "This sequel picks up a few months after the original. Peter Quill is falling deeper in love with Zoe Saldana’s Gamora. And he is forced to confront the mysteries of his past when he comes face to face with a godlike entity known as Ego, played by Kurt Russell. Part of the challenge of placing these Guardian of the Galaxy films in the MCU Timeline is that they seem separate and all take place in outer space.",
        image:
          "https://github.com/rejincusi/mcu/blob/master/images/14-guardians-of-the-galaxy-2.jpg?raw=true",
        youtube: "wUn05hdkhjM"
      },
      {
        id: 15,
        color: "red darken-3",
        sideImg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/05f9f8db-209f-47e0-92f4-a4745ab958d3/dcn9h33-43d721cc-3d9f-4943-83d3-22b8ef1b4f09.png/v1/fill/w_1024,h_504,strp/cap_vs_iron_man_by_gyaldhart_dcn9h33-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTA0IiwicGF0aCI6IlwvZlwvMDVmOWY4ZGItMjA5Zi00N2UwLTkyZjQtYTQ3NDVhYjk1OGQzXC9kY245aDMzLTQzZDcyMWNjLTNkOWYtNDk0My04M2QzLTIyYjhlZjFiNGYwOS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.v7LkqI6cuLNpQ2cyIaW4ot_9dc5exDyBQHo_Lm5svOk",
        title: "Captain America: Civil War",
        year: "2016",
        description:
          "Although it's a Captain America film, Civil War features almost every single Avenger while adding two more heavy hitters to the lineup: Chadwick Boseman’s Black Panther and Tom Holland’s Spider Man. Unfortunately, the Avengers are split into different factions due to Captain America wanting to save his friend Bucky Barnes, who appears to be responsible for the bombing of a UN session.",
        image:
          "https://github.com/rejincusi/mcu/blob/master/images/15-captain-america-civil-war.jpg?raw=true",
        youtube: "dKrVegVI0Us"
      },
      {
        id: 16,
        color: "red darken-3",
        sideImg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0b4f571b-021b-4e83-9679-eb8c5bf8036d/dce767e-d11ec004-52c9-4df3-80fe-3e5a3da21540.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBiNGY1NzFiLTAyMWItNGU4My05Njc5LWViOGM1YmY4MDM2ZFwvZGNlNzY3ZS1kMTFlYzAwNC01MmM5LTRkZjMtODBmZS0zZTVhM2RhMjE1NDAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Zjr20mqg6KX0fZrQL5TcgC5FXveT6Ldfolw9L_XYqsk",
        title: "Doctor Strange",
        year: "2016",
        description:
          "Stephen Strange, played by Benedict Cumberbatch, is a world-class surgeon, and he knows it. Strange is insufferable to almost everyone who has to deal with him, until a tragic accident takes away use of his hands. Strange then travels the world searching for a cure that will give him back the use of his hands - and he does find an answer, in the form of some ancient magic.",
        image:
          "https://github.com/rejincusi/mcu/blob/master/images/16-doctor-strange.jpg?raw=true",
        youtube: "HSzx-zryEgM"
      },
      {
        id: 17,
        color: "red darken-3",
        sideImg: "https://i.pinimg.com/originals/c1/4b/89/c14b89bb2f068843485cb2efea28e9ef.png",
        title: "Black Panther",
        year: "2018",
        description:
          "After the UN bombing in Captain America: The Civil War, T’Challa must return home to Wakanda and be named king. Once there, he is confronted with the continuing policy of isolation that has helped protect Wakanda. He also faces a mistake from his father’s past in the form of Eric Killmonger, who is played by Michael B Jordan and might be the best villain in any Marvel film.",
        image:
          "https://github.com/rejincusi/mcu/blob/master/images/17-black-panther.jpg?raw=true",
        youtube: "xjDjIWPwcPU"
      },
      {
        id: 18,
        color: "red darken-3",
        sideImg: "https://www.sccpre.cat/mypng/full/56-567393_there-is-the-images-i-have-used-to.png",
        title: "Spider-Man: Homecoming",
        year: "2017",
        description:
          "The wall-crawling webslinger makes his solo debut here, where he faces off with Michael Keaton’s Vulture, a construction foreman who’s become a black market weapons dealer after recovering technology from the New York City battle in the first Avengers film. On top of all that, Peter Parker is also dealing with all the usual problems that come with being a freshman in high school.",
        image:
          "https://github.com/rejincusi/mcu/blob/master/images/18-spider-man.jpg?raw=true",
        youtube: "n9DwoQ7HWvI"
      },
      {
        id: 19,
        color: "red darken-3",
        sideImg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9a145268-41e7-4aa6-93b1-564a57fd6f05/dc3mwo4-d8dfb10f-0219-4006-869a-fbdf6e045c51.png/v1/fill/w_1024,h_728,strp/thor_vs_hulk_by_hz_designs_dc3mwo4-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzI4IiwicGF0aCI6IlwvZlwvOWExNDUyNjgtNDFlNy00YWE2LTkzYjEtNTY0YTU3ZmQ2ZjA1XC9kYzNtd280LWQ4ZGZiMTBmLTAyMTktNDAwNi04NjlhLWZiZGY2ZTA0NWM1MS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.F8m0thaljJ7HADCHcu-8Acq6x3blgJPJ2b1_e7sC1gM",
        title: "Thor: Ragnarok",
        year: "2017",
        description:
          "The third solo film for Thor finds the hero jettisoned across space after the death of his father and the destruction of his hammer by his long-lost sister, Hella, played by Cate Blanchett. He finds himself stuck in gladiator fights pitted against the Hulk, who hadn’t been seen since the Avengers defeated Ultron. Together, Thor and Hulk team up with Loki and Tessa Thompson’s Valkyrie to take on Hella.",
        image:
          "https://github.com/rejincusi/mcu/blob/master/images/19-thor-ragnarok.jpg?raw=true",
        youtube: "ue80QwXMRHg"
      },
      {
        id: 20,
        color: "red darken-3",
        sideImg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/dcc5qo0-d29b49cd-4180-4782-8c1c-dc42400f6d93.png/v1/fill/w_966,h_828,strp/antman_and_the_wasp_hope_van_dyne_png_by_metropolis_hero1125_dcc5qo0-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODQxIiwicGF0aCI6IlwvZlwvNWI4ZDJiMTItMjFlOC00OTMxLThhNmQtZmI5ZWNkZDYwMzgzXC9kY2M1cW8wLWQyOWI0OWNkLTQxODAtNDc4Mi04YzFjLWRjNDI0MDBmNmQ5My5wbmciLCJ3aWR0aCI6Ijw9OTgxIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Amn9WlTftwvxEHxIZzERwXHqiM2JT64PDfx-2yuYBO0",
        title: "Ant-Man and the Wasp",
        year: "2018",
        description:
          "Scott Lang is back, but he has been placed on house arrest following his role in the Civil War and siding with Captain America. He's been estranged from Hank Pym and Pym's daughter, Hope. But he reluctantly agrees to help them, thinking that Pym might be able to retrieve Hope's mother from the Quantum Realm. (Head's up: Save the post-credits scene until after you’ve seen Infinity War.)",
        image:
          "https://github.com/rejincusi/mcu/blob/master/images/20-ant-man-2.jpg?raw=true",
        youtube: "UUkn-enk2RU"
      },
      {
        id: 21,
        color: "red darken-3",
        sideImg: "https://i.pinimg.com/originals/11/0e/1f/110e1fea29a8bccaf168bbf31b66187e.png",
        title: "Avengers: Infinity War",
        year: "2018",
        description:
          "After years orchestrating things from behind the scenes in order to find all the Infinity Stones, Thanos (voiced by Josh Brolin) has decided to go get them himself. The only thing standing in his way are the Avengers, who are currently spread across the universe. To raise the stakes even more, Thanos’ only reason for seeking the power of the stones is to wipe out half of all life in the universe.",
        image:
          "https://github.com/rejincusi/mcu/blob/master/images/21-infinity-war.jpg?raw=true",
        youtube: "6ZfuNTqbHE8"
      },
      {
        id: 22,
        color: "red darken-3",
        sideImg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ea196117-0b64-49b7-b13f-79f43cf77e53/dbq9rdt-86ae4595-cc3f-4dee-8b13-c8db1a672e8c.png/v1/fill/w_1204,h_664,strp/infinity_war_team___png_by_captain_kingsman16_dbq9rdt-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEyNSIsInBhdGgiOiJcL2ZcL2VhMTk2MTE3LTBiNjQtNDliNy1iMTNmLTc5ZjQzY2Y3N2U1M1wvZGJxOXJkdC04NmFlNDU5NS1jYzNmLTRkZWUtOGIxMy1jOGRiMWE2NzJlOGMucG5nIiwid2lkdGgiOiI8PTIwNDEifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.iNfbP1IC3kVTloDsVr6GOaNSrdUgoALdefnCBCmqUZ8",
        title: "Avengers: Endgame",
        year: "2019",
        description:
          "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
        image:
          "https://github.com/rejincusi/mcu/blob/master/images/22-end-game.jpg?raw=true",
        youtube: "TcMBFSGVi1c"
      },
      {
        id: 23,
        color: "red darken-3",
        sideImg: "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/a/aa/Spider-Man_FFH_Render.png/revision/latest?cb=20190630145742",
        title: "Spider-Man: Far from home",
        year: "2019",
        description:
          "Our friendly neighborhood Super Hero decides to join his best friends Ned, MJ, and the rest of the gang on a European vacation. However, Peter's plan to leave super heroics behind for a few weeks are quickly scrapped when he begrudgingly agrees to help Nick Fury uncover the mystery of several elemental creature attacks, creating havoc across the continent.",
        image:
          "http://cdn.collider.com/wp-content/uploads/2019/05/spider-man-far-from-home-poster-fury-mysterio-2.jpg",
        youtube: "DYYtuKyMtY8"
      }
    ]
  }),
  methods: {
    showTrailer: function(youtubeId) {
      this.overlay = !this.overlay
      this.youtubeId = youtubeId
    }
  }
};
</script>

<style>
.timeline-container {
  margin-bottom: 50px;
  padding-left: 50px;
  padding-right: 50px;
}
</style>
