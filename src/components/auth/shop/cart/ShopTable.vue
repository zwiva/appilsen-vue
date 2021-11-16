<template>
  <div>
    <!-- Tabla carrito -->
    <div>
      <v-col v-if="$store.state.carrito.carrito.length >= 1">
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
              ${{ (item.precio * item.cantidad).toLocaleString() }}
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
        <div class="py-4 text-right">
          <h4 class="text-center">
            Subtotal: $
            {{ $store.getters["carrito/shopCartTotalAmount"].toLocaleString() }}
          </h4>
        </div>
      </v-col>
      <v-col v-else class="ma-5">
        <div class="d-flex align-center justify-center">
          <span>No hay productos en tu carrito. </span>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg4vqp08beYz8yQrTKpl0WRYTfWDczZ9uh7A&usqp=CAU"
            height="50px"
            style="transform: rotate(210deg)"
          />
        </div>
      </v-col>
    </div>

    <!-- botonera: comprar o ir a otra vista -->
  </div>
</template>
<script>
import store from "../../../../store";
export default {
  name: "Shoptable",
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
        value: "cantidad",
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
  },
};
</script>
<style>
.v-data-footer {
  display: none;
}
</style>
