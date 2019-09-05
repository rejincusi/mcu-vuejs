<template>
  <v-row sm="6" md="8">
    <v-carousel>
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" interval="10000"></v-carousel-item>
    </v-carousel>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            "https://m.media-amazon.com/images/M/MV5BZGFmYWU1OGUtYmUxNS00N2E4LTkxYmMtZGYxM2NmYzhjZjJkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX1777_CR0,0,1777,937_AL_.jpg"
        },
        {
          src:
            "https://m.media-amazon.com/images/M/MV5BNDIxNDIxOTktZGUyZC00NGNlLWIzNjYtZDlmMGMzNzc2MzVjXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX1777_CR0,0,1777,937_AL_.jpg"
        },
        {
          src:
            "https://m.media-amazon.com/images/M/MV5BZWExODQ5ZjgtNWNjOC00ZDQ3LWFlM2EtZmI1YzdlODBjNDkzXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX1777_CR0,0,1777,937_AL_.jpg"
        },
        {
          src:
            "https://m.media-amazon.com/images/M/MV5BZGU5NzNiODEtZGVjOC00MjliLTkwZWQtNzk5Y2U2NTc5ODljXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX1777_CR0,0,1777,937_AL_.jpg"
        },
        {
          src:
            "https://m.media-amazon.com/images/M/MV5BMjI5NzM4ODcxNl5BMl5BanBnXkFtZTgwMzk1OTU5NzM@._V1_SX1777_CR0,0,1777,937_AL_.jpg"
        }
      ]
    };
  }
};
</script>