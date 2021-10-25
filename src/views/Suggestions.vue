<template>
  <div>
    <div>
      <h1>Recomendamos / Sugerimos / Inspirate:</h1>
      <p>Inspirate con nuestras creaciones / ingredientes / combinaciones:</p>
      <div v-for="(ourbeer, index) in internalBeers" :key="index">
        <InternalCardBeer :ourbeer="ourbeer" />
      </div>
    </div>
  </div>
</template>

<script>
import InternalCardBeer from "../components/auth/InternalCardBeer.vue";
export default {
  name: "suggestions",
  components: { InternalCardBeer },
  data: () => ({
    internalBeers: [
      { name: "primerita", image: "", price: 2000 },
      { name: "secunda", image: "", price: 2000 },
      { name: "tercia", image: "", price: 2000 },
    ],
  }),
};
</script>
