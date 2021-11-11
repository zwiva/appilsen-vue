<template>
  <div class="container">
    <h1>Busca tu cerveza random del mundo</h1>

    <div class="my-6">
    <label>Escribe un numero del 1 al 300</label>
     <v-text-field
            label="numero al azar"
            outlined
            dense
            dark
          ></v-text-field>
    <v-btn>buscar</v-btn>
    </div>



    <v-card v-for="beer in beers" :key="beer.id">
      <v-img :src="beer.image_url" height="280px" contain />
      <p><strong>Numero:</strong> {{ beer.id }}</p>
      <p><strong>Nombre:</strong> {{ beer.name }}</p>
      <p><strong>Estilo:</strong> {{ beer.tagline }}</p>
      <p><strong>Descripcion:</strong> {{ beer.description }}</p>
      <p><strong>Alcohol:</strong>{{ beer.abv }}</p>
      <p><strong>IBU:</strong> {{ beer.ibu }}</p>
    </v-card>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      beers: null,
    };
  },

  mounted() {
    this.getBeers();
  },

  methods: {
    getBeers() {
      axios
        .get("https://api.punkapi.com/v2/beers/random")
        .then((response) => {
          console.log(response);
          this.beers = response.data;
        })
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style></style>
