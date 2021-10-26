<template>
  <v-app id="app">
    <div>
      <SupNavbar />
      <Navbar />
      <Banner />
    </div>
    <router-view />
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
    Banner
  },
};
</script>

<style lang="scss">
.v-application--wrap {
  font-family: "Questrial", sans-serif;
  justify-content: space-between;
  background-color: rgb(52, 52, 52);
  background-color: white;
}
</style>
