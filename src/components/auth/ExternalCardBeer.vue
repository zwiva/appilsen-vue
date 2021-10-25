<template>
  <div>
    <v-card color="amber" class="ma-3">
      <img :src="beer.image" alt="" />
      <p>Nombre cerveza: {{ beer.name }}</p>
      <p>Precio: {{ beer.price }}</p>
      <v-btn>Agregar al carrito</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ExternalCardBeer",
  data: () => ({}),
  props: {
    beer: { type: Object, require: true },
  },
};
</script>
