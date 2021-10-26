<template>
  <div>
    <v-card color="amber" class="ma-3">
      <p>Nombre cerveza: {{ ourbeer.name }}</p>
      <img :src="ourbeer.image" alt="" />
      <p>Ingredientes</p>
      <p>Estilo</p>
      <p>Formato</p>
      <p>Precio: {{ ourbeer.price }}</p>
      <v-btn>Agregar al carrito</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "InternalCardBeer",
  data: () => ({}),
  props: {
    ourbeer: { type: Object, require: true },
  },
};
</script>
