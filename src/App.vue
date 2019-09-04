<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <v-avatar @click="$router.push('/')">
          <img
            src="http://diskingdom.com/wp-content/uploads/2015/01/Marvel-Logo.jpg"
            alt="avatar"
          />
        </v-avatar>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn text @click="$router.push('/#about')">About</v-btn>
        <v-btn text @click="$router.push('/timeline')">Timeline</v-btn>
        <v-btn text @click="$router.push('/games')">Games</v-btn>
      </div>
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click="drawer = !drawer" />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list-item>About</v-list-item>
      <v-list-item>Timeline</v-list-item>
      <v-list-item>Games</v-list-item>
    </v-navigation-drawer>

    <v-content>
      <router-view />
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Footer from "../src/components/Footer";

export default {
  name: "App",
  components: {
    Footer
  },
  data: () => ({
    drawer: null,
    items: [
      { title: "Home", icon: "dashboard" },
      { title: "About", icon: "question_answer" }
    ]
  })
};
</script>
