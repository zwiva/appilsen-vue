<template>
  <div>
    <v-container>
      <v-card elevation="2" class="mx-auto" max-width="280px">
        <v-img class="zoom" :src="merch.imagen" max-width="280px" contain />
        <v-list-item>
          <v-list-item-content>
            <div class="my-4">
              <v-list-item-title> {{ merch.nombre }}</v-list-item-title>
              <v-list-item-title> $ {{ merch.precio }}</v-list-item-title>
              <v-list-item-subtitle> {{ merch.detalles }}</v-list-item-subtitle>
            </div>
            <v-btn color="gray" dark class="zoom"  @click="addProductoAlCarrito(merch)"
              >Agregar al carrito</v-btn
            >
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-container>

    <!-- dialogo: mostrar mensaje producto agregado a carrito -->
    <div>
      <v-dialog v-model="productAddedToCart" max-width="380px" class="flex">
        <v-card elevation="7" rounded class="text-center">
          <v-container class="background-beer">
            <div class="background-white ma-5 pa-3">
              <h2 class="text-center">Producto agregado al carrito</h2>
              <v-row class="ma-3 justify-space-around">
                <v-btn
                  color="amber"
                  class="align-self-center zoom"
                  @click="productAddedToCart = false"
                >
                  OK
                </v-btn>
              </v-row>
            </div>
          </v-container>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "MerchAndAccessories",
  data: () => ({
    merchAlCarrito: {},
    productAddedToCart: false,
  }),
  props: {
    merch: { type: Object, require: true },
  },
  methods: {
    addProductoAlCarrito(merch) {
      this.merchAlCarrito = merch;
      this.$store.dispatch("carrito/addProductoCarrito", this.merchAlCarrito);
      this.productAddedToCart = true;
    },
  },
};
</script>
<style>
.background-white {
  background: white;
}
.background-beer {
  background-image: url("../../../../assets/backgrounds/cereal-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  rotate: 180;
  /* opacity: 0.85;; */
}
</style>
