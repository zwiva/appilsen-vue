<template>
  <div class="content-grid mx-auto">
    <div class="d-flex flex-column justify-center">
      <h3 class="text-center mt-2">Busca tu cerveza random del mundo</h3>
      <div class="text-center ma-4" max-width="200px">
        <div class="d-flex flex-column justify-center align-center">
          <label class="mb-1">Escribe un numero del 1 al 300</label>
          <v-text-field
            class="input-name"
            v-model="beer"
            label="numero al azar"
            outlined
            dark
          ></v-text-field>
        </div>
        <v-btn class="mb-4" color="grey darken-1" dark @click="getBeers(beer)"
          >buscar</v-btn
        >
      </div>

      <v-card class="mx-auto" max-width="800px" rounded dense>
        <div class="d-flex flex-column pa-5">
          <v-card-title class="pt-0"
            ><strong>Numero:</strong> {{ beerDeepData.id }}</v-card-title
          >
          <v-card-title class="pt-0"
            ><strong>Nombre:</strong> {{ beerDeepData.name }}</v-card-title
          >
          <v-img :src="beerDeepData.image_url" height="300px" contain />
          <v-card-text class="pb-0"
            ><strong>Estilo:</strong> {{ beerDeepData.tagline }}</v-card-text
          >
          <v-card-text class="pb-0"
            ><strong>Descripcion:</strong>
            {{ beerDeepData.description }}</v-card-text
          >
          <v-card-text class="pb-0"
            ><strong>Alcohol:</strong> {{ beerDeepData.abv }}</v-card-text
          >
          <v-card-text class="pb-0"
            ><strong>IBU:</strong> {{ beerDeepData.ibu }}</v-card-text
          >
        </div>
      </v-card>
    </div>
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
  methods: {
    getBeers(beer) {
      // por parametro en boton le mando el valor del v-model
      axios
        .get(`https://api.punkapi.com/v2/beers/${beer}`)
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
  mounted() {
    this.getBeers("1"); // por defecto que cargue la 1 cuando se cargue esta vista, que no este en blanco
  },
};
</script>
<style>
.input-name {
  width: 300px;
}
</style>
