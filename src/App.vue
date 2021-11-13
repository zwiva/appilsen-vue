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
  // mounted() {
  //   this.$store.dispatch("sesion/configurarUsuario", );
  // }
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
h2 {
  font-family: "Permanent Marker", cursive;
  // font-family: "Amatic SC", cursive;
  letter-spacing: 3px;
}
h3 {
  font-family: 'Permanent Marker', cursive;
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
