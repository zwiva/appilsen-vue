<template>
  <div class="content-grid mx-auto">
    <div class="d-flex flex-column justify-center">
      <h2 class="ma-6 text-center title_section">
        Descubre cervezas del mundo
      </h2>
      <div class="text-center ma-2" max-width="200px">
        <div class="d-flex flex-column justify-center align-center">
          <label class="mb-1"
            >Escribe un numero del 1 al 300 para conocer recetas.</label
          >
          <v-text-field
            class="input-name"
            v-model="beer"
            label="ingresa un numero"
            outlined
            dark
          ></v-text-field>
        </div>
        <v-btn class="mb-4" color="grey darken-1" dark @click="getBeers(beer)"
          >buscar</v-btn
        >
      </div>
      <p>Por mientras te recomendamos:</p>
      <RandomCard :beerDeepData="beerDeepData" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import RandomCard from "../components/auth/random/RandomCard.vue";
export default {
  data() {
    return {
      beer: "",
      beerData: {},
      beerDeepData: {},
    };
  },
  components: { RandomCard },
  methods: {
    getBeers(beer) {
      // por parametro en boton le mando el valor del v-model
      axios
        .get(`https://api.punkapi.com/v2/beers/${beer}`)
        .then((response) => {
          /* console.log(response); */
          this.beerData = response.data;
          this.beerDeepData = this.beerData[0];
          // console.log("funcionaaaaaa", this.beerDeepData);
        })
        .catch((e) => console.log(e));

      this.beer = "";
    },
  },
  mounted() {
    // this.getBeers("1"); // por defecto que cargue la 1 cuando se cargue esta vista, que no este en blanco
    this.getBeers(this.$store.state.sesion.recommendedBeer);
  },
};
</script>
<style>
.input-name {
  width: 300px;
}
</style>
