<template>
  <v-footer padless absolute>
    <v-card flat tile width="100%" class="footer-color text-center">
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>Rejin</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({}),
  computed: {}
};
</script>

<style>
.footer-color {
  background-color: #212121 !important;
}
</style>