<template>
  <div>
    <div>
      <h1 class="text-center">Catalogo de cervezas</h1>
      <p>
        Acá puedes agregar una o mas cervezas a tu pedido, son nuestras marcas
        amigas!:
      </p>
      <!-- v-if=true si usuario es ADMIN -->
      <v-btn color="info" @click="dialog = true"
        >Agregar Sugerencia</v-btn
      >

      <v-layout align-center justify-space-between>
        <v-row d-flex flex-wrap class="justify-center">
          <div
            v-for="beer in $store.state.productos.cervezasCatalogo"
            :key="beer.id"
          >
            <ExternalCardBeer :beer="beer" />
          </div>
        </v-row>
      </v-layout>
    </div>

  </div>
</template>

<script>

import store from "../store";
import ExternalCardBeer from "../components/auth/ExternalCardBeer.vue";

export default {
  name: "ExternalBeers",
  components: { ExternalCardBeer },
  beforeRouteEnter(to, from, next) {
    store.dispatch("productos/getAllexternalBeers");
    next();
  },

  data: () => ({
  
  }),

  mounted() {
    store.dispatch("productos/getAllexternalBeers");
    console.log("mounted");
  },
  methods: {
   
  },
};
</script>
