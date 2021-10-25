<template>
  <div>
    <h1>Para ver y meter al carrito cervezas de otros proveedores.</h1>
    <p>
      Acá puedes agregar una o mas cervezas a tu pedido, son nuestras marcas
      amigas!:
    </p>
    <div v-for="(beer, index) in externalBeers" :key="index">
      <ExternalCardBeer :beer="beer" />
    </div>
  </div>
</template>

<script>
import ExternalCardBeer from "../components/auth/ExternalCardBeer.vue";
export default {
  name: "ExternalBeers",
  components: { ExternalCardBeer },
  data: () => ({
    externalBeers: [
      { name: "primerita", image: "", price: 1000 },
      { name: "secunda", image: "", price: 1000 },
      { name: "tercia", image: "", price: 1000 },
    ],
  }),
};
</script>
