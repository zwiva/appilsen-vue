<template>
  <div>
    <v-container>
      <h1 class="text-center">Busca tu cerveza random del mundo</h1>
      <br />

      <div class="text-center" max-width="200px">
        <label>Escribe un numero del 1 al 300</label>
        <v-text-field
          class="input-name p-2 styled-input"
          justify="center"
          align="right"
          v-model="beer"
          label="numero al azar"
          outlined
          dark
        ></v-text-field>
        <v-btn color="grey darken-1" dark @click="getBeers">buscar</v-btn>
      </div>
      <br />

      <v-card class="mx-auto" max-width="800px" rounded dense>
        <div class="d-flex flex-no-wrap justify-space-between">
          <v-img
            :src="beerDeepData.image_url"
            height="300px"
            :width="width"
            contain
          />
          <div class="my-4">
            <v-card-content>
              <v-card-title>Nombre: {{ beerDeepData.name }}</v-card-title>
              <v-card-subtitle
                >Estilo: {{ beerDeepData.tagline }}</v-card-subtitle
              >
              <v-card-subtitle
                >Descripcion: {{ beerDeepData.description }}</v-card-subtitle
              >
              <v-card-subtitle>Alcohol: {{ beerDeepData.abv }}</v-card-subtitle>
              <v-card-subtitle>IBU: {{ beerDeepData.ibu }}</v-card-subtitle>
              <v-card-subtitle>Numero: {{ beerDeepData.id }}</v-card-subtitle>
            </v-card-content>
          </div>
        </div>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      beer: "",
      beerData: {},
      beerDeepData: {},
    };
  },

  /*  mounted() {
    this.getBeers();
  }, */

  methods: {
    getBeers() {
      axios
        .get(`https://api.punkapi.com/v2/beers/${this.beer}`)
        .then((response) => {
          /* console.log(response); */
          this.beerData = response.data;
          this.beerDeepData = this.beerData[0];
          console.log("funcionaaaaaa", this.beerDeepData);
        })
        .catch((e) => console.log(e));

      this.beer = "";
    },
  },
};
</script>

<!--  v-on:keyup.enter="getBeers"  //  /* v-for="beer in beers" :key="beer.id" */ -->

<style>
.v-img {
  padding-top: 4rem;
}

.input-name {
  justify-content: center;
  text-align: center;
  width: 300px;
  margin-left: 8rem;
}
</style>
