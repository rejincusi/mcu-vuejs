<template>
  <div>
    <Carousel />
    <v-container>
      <About />
    </v-container>
  </div>
</template>

<script>
import Carousel from "../components/Carousel";
import About from "../components/About";

export default {
  components: {
    Carousel,
    About
  }
};
</script>
