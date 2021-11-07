<template>
  <div>
    <v-container>
      <v-card elevation="2" class="mx-auto" max-width="280px">
        <v-img class="zoom" :src="beer.imagen" height="280px" contain />
        <v-list-item>
          <v-list-item-content>
            <div class="my-4">
              <v-list-item-title>{{ beer.nombre }}</v-list-item-title>
              <v-list-item-title>${{ beer.precio }}</v-list-item-title>
              <v-list-item-subtitle>{{ beer.estilo }}</v-list-item-subtitle>
              <v-list-item-subtitle>{{ beer.alcohol }}°</v-list-item-subtitle>
              <v-list-item-subtitle>{{ beer.formato }}</v-list-item-subtitle>
            </div>
            <v-btn color="gray" dark class="zoom" @click="addProductoAlCarrito(beer)"
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
  name: "ExternalCardBeer",
  data: () => ({
    cervezaAlCarrito: {},
    productAddedToCart: false,
  }),
  props: {
    beer: { type: Object, require: true },
  },
  methods: {
    addProductoAlCarrito(beer) {
      this.cervezaAlCarrito = beer;
      /* console.log( "cervezaAlCarrito", this.cervezaAlCarrito );  */
      this.$store.dispatch("carrito/addProductoCarrito", this.cervezaAlCarrito);
      this.productAddedToCart = true;
    },
  },
};
</script>
<style>
.zoom {
  transition: transform 0.5s;
}
.zoom:hover {
  transform: scale(1.1);
}
</style>
