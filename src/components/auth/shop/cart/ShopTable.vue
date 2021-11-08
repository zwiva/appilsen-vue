<template>
  <div>
    <v-col v-if="$store.state.carrito.carrito.length > 1">
      <template>
        <v-data-table
          :headers="headers"
          :items="carrito"
          :items-per-page="10"
          class="elevation-1"
        >
          <template v-slot:[`item.increase`]="{ item }">
            <div>
              <v-btn icon @click="increaseQuantity(item)">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              <v-btn icon @click="decreaseQuantity(item)">
                <v-icon>mdi-minus</v-icon>
              </v-btn>
            </div>
          </template>

          <template v-slot:[`item.precio`]="{ item }">
            ${{ item.precio.toLocaleString() }}
          </template>

          <template v-slot:[`item.topay`]="{ item }">
            ${{ (item.precio * item.quantity).toLocaleString() }}
          </template>

          <template v-slot:[`item.delete`]="{ item }">
            <div>
              <v-btn icon @click="deleteProductOfCart(item)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </div>
          </template>
        </v-data-table>
      </template>
    </v-col>
    <v-col v-else class="ma-5">
      <p>No hay productos en tu carrito.</p>
    </v-col>

    <v-col>
      <div
        v-if="$store.state.carrito.carrito.length > 1"
        class="d-flex justify-center"
      >
        <v-btn elevation="2" color="grey" @click="buyCart()"> COMPRAR </v-btn>
      </div>

      <div v-else class="d-flex justify-center flex-wrap">
        <div class="ma-2">
          <v-btn elevation="2" @click="irAArmar()"> IR A ARMAR TU PILSEN</v-btn>
        </div>
        <div class="ma-2">
          <v-btn elevation="2" @click="irACatalogo()"> IR POR CERVEZAS</v-btn>
        </div>
        <div class="ma-2">
          <v-btn elevation="2" @click="irAMerch()"> IR POR ACCESORIOS </v-btn>
        </div>
      </div>
    </v-col>
  </div>
</template>
<script>
import store from "../../../../store";

export default {
  name: "shoptable",
  props: {
    carrito: { type: Array, required: true },
  },
  data: () => ({
    // encabezados tabla
    headers: [
      {
        text: "",
        align: "start",
        sortable: false,
        value: "increase",
      },
      {
        text: "Producto",
        align: "start",
        sortable: false,
        value: "nombre",
      },
      {
        text: "Precio",
        align: "left",
        sortable: true,
        value: "precio",
      },
      {
        text: "Cantidad",
        align: "left",
        sortable: false,
        value: "quantity",
      },
      {
        text: "Pagar",
        align: "left",
        sortable: true,
        value: "topay",
      },
      {
        text: "",
        align: "left",
        sortable: false,
        value: "delete",
      },

      // { text: "Protein (g)", value: "protein" },
      // { text: "Iron (%)", value: "iron" },
    ],
    // cuerpo tabla
    desserts: [],
  }),
  methods: {
    increaseQuantity(item) {
      console.log(item.quantity);
      store.dispatch("carrito/increaseQuantity", item);
    },
    decreaseQuantity(item) {
      console.log(item.quantity);
      store.dispatch("carrito/decreaseQuantity", item);
    },
    deleteProductOfCart(item) {
      store.dispatch("carrito/eraseProductOfCart", item);
    },
    buyCart() {
      store.dispatch("carrito/buyCart");
    },
    irAArmar() {
      console.log("redirigir a Armar");
    },
    irACatalogo() {
      console.log("redirigir a catalogo");
    },
    irAMerch() {
      console.log("redirigir a merch");
    },
  },
};
</script>
<style>
.v-data-footer {
  display: none;
}
</style>
