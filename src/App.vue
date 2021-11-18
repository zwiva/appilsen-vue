<template>
  <v-app id="app">
    <div>
      <SupNavbar />
      <Navbar />
      <Banner />
    </div>
    <v-container>
      <router-view />
    </v-container>
    <Footer />
  </v-app>
</template>
<script>
import Footer from "../src/components/shared/Footer.vue";
import Navbar from "./components/shared/Navbar.vue";
import SupNavbar from "./components/shared/SupNavbar.vue";
import Banner from "./components/shared/Banner.vue";
export default {
  name: "App",
  components: {
    Footer,
    Navbar,
    SupNavbar,
    Banner,
  },
  async mounted() {
    await this.$store.dispatch("sesion/signOut"); // descomentar para resetar usuario
    await this.$store.dispatch("sesion/getRegisteredUsers");
    this.$store.dispatch("sesion/showAuthUser");
  },
};
</script>
<style lang="scss">
.v-application--wrap {
  font-family: "Ubuntu", sans-serif;
  color: white;
  justify-content: space-between;
  background: linear-gradient(135deg, rgb(19, 19, 19), #3c3c3c);
  text-decoration: none !important;
}
h1,
h2,
h3 {
  font-family: "Permanent Marker", cursive;
  letter-spacing: 3px;
  // text-align: center;
}
.marker {
  font-family: "Permanent Marker", cursive;
}
.main_title {
  font-size: 3em;
}
.title_section {
  font-size: 2.5em;
}
.subtitle_section {
  font-size: 2em;
}
.v-application a {
  color: white;
  text-decoration: none !important;
}
a:hover {
  text-decoration: none !important;
}
.content-grid {
  max-width: 1200px;
}
</style>
