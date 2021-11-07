<template>
  <div>
    <v-container grid-list-md>
      <v-card elevation="2" outlined class="mx-auto" max-width="340">
        <v-img :src="merch.imagen" height="250px" contain />
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title> {{ merch.nombre }}</v-list-item-title>
            <v-list-item-title> $ {{ merch.precio }}</v-list-item-title>
            <v-list-item-subtitle> {{ merch.detalles }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-card-actions>
          <v-btn color="info" @click="addProductoAlCarrito(merch)"
            >Agregar al carrito</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "MerchAndAccessories",
  data: () => ({
    merchAlCarrito: {},
  }),
  props: {
    merch: { type: Object, require: true },
  },
  methods: {
    addProductoAlCarrito(merch) {
      this.merchAlCarrito = merch;
      this.$store.dispatch("carrito/addProductoCarrito", this.merchAlCarrito);
    },
  },
};
</script>
