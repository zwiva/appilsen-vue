<template>
  <div>
    <v-card color="amber" class="ma-3">
      <img :src="beer.imagen" alt="" />
      <p>Nombre cerveza: {{ beer.nombre }}</p>
      <p>Precio: $ {{ beer.precio }}</p>
      <p>Estilo cerveza: {{ beer.estilo }}</p>
      <p>alcohol: {{ beer.alcohol }}°</p>
      <p>Formato: {{ beer.formato }}</p>
     
     
      
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
