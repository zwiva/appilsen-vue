<template>
  <div>
    <h1>Para ver y meter al carrito cervezas de otros proveedores.</h1>
    <p>
      Acá puedes agregar una o mas cervezas a tu pedido, son nuestras marcas
      amigas!:
    </p>
    <div v-for="beer in $store.state.productos.productos" :key="beer.id">
      <ExternalCardBeer :beer="beer" />
    </div>
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
