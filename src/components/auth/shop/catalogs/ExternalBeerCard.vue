<template>
  <div>
    <v-container grid-list-md>
      <v-col cols="12" md="4">
        <v-row>
          <v-card elevation="2" outlined class="mx-auto" max-width="340">
            <v-img class="zoom" :src="beer.imagen" height="250px" contain />
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{ beer.nombre }}</v-list-item-title>
                <v-list-item-title>${{ beer.precio }}</v-list-item-title>
                <v-list-item-subtitle>{{ beer.estilo }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ beer.alcohol }}°</v-list-item-subtitle>
                <v-list-item-subtitle>{{ beer.formato }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn color="info" @click="addProductoAlCarrito(beer)"
                >Agregar al carrito</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-container>
    <!-- dialogo: mostrar mensaje producto agregado a carrito -->
    <div>
      <v-dialog v-model="productAddedToCart" max-width="400px" class="flex">
        <v-card elevation="7" class="pa-3 text-center ">
          <v-container>
            <h2 class="text-center">Producto agregado al carrito</h2>
            <v-row class="ma-3 justify-space-around">
              <img
                src="../../../../assets/imgbeers/beers.png"
                alt=""
                width="150px"
              />
              <v-btn
                color="amber"
                class="align-self-center ma-2"
                @click="productAddedToCart = false"
              >
                OK
              </v-btn>
            </v-row>
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
