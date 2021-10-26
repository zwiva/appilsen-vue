<template>
  <div>
    <h1 class="text-center">Catalogo de cervezas</h1>
    <p>
      Acá puedes agregar una o mas cervezas a tu pedido, son nuestras marcas
      amigas!:
    </p>

    <v-layout align-center justify-space-between>
      <div v-for="beer in $store.state.productos.productos" :key="beer.id">
        <ExternalCardBeer :beer="beer" />
      </div>
    </v-layout>
  </div>
</template>

<script>
import store from "../store";

import ExternalCardBeer from "../components/auth/ExternalCardBeer.vue";
export default {
  name: "ExternalBeers",
  components: { ExternalCardBeer },
  data: () => ({
    externalBeers: [],
  }),

  mounted() {
    store.dispatch("productos/getAllexternalBeers");
    console.log("mounted");
  },
};
</script>
