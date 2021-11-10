<template>
  <div>
    <div row class="content-grid mx-auto">
      <h2>Carrito Cervecero</h2>

      <v-card class="justify-center">
        <v-sheet color="white" elevation="9" with="80%">
          <v-col cols="12">
            <ShopTable :carrito="$store.state.carrito.carrito" />
          </v-col>
        </v-sheet>
        <v-sheet color="white" elevation="9" with="80%">
          <div v-if="$store.state.carrito.carrito.length > 0">
            <SetLocalization />
          </div>
        </v-sheet>

        <v-sheet color="white" elevation="9" with="80%">
          <v-col>
            <div
              v-if="$store.state.carrito.carrito.length > 0"
              class="d-flex justify-center"
            >
              <v-btn elevation="2" dark color="gray" @click="buyCart()">
                COMPRAR
              </v-btn>
            </div>

            <div v-else class="d-flex justify-center flex-wrap">
              <div class="ma-2">
                <v-btn elevation="2" @click="irAArmar()">
                  IR A ARMAR TU PILSEN</v-btn
                >
              </div>
              <div class="ma-2">
                <v-btn elevation="2" @click="irACatalogo()">
                  IR POR CERVEZAS</v-btn
                >
              </div>
              <div class="ma-2">
                <v-btn elevation="2" @click="irAMerch()">
                  IR POR ACCESORIOS
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-sheet>
      </v-card>
    </div>

    <v-dialog v-model="shopFinished">
      <v-card>
        <h3>Mostrar dialogo con resumen de pedido</h3>
        <v-btn color="primary" @click="saveOrder">Confirmar</v-btn>
        <v-btn color="primary" @click="showOrder = false">Cancelar</v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import store from "../store";
import SetLocalization from "../components/auth/localization/SetLocalization.vue";
import ShopTable from "../components/auth/shop/cart/ShopTable.vue";
export default {
  name: "ShopCart",
  components: { ShopTable, SetLocalization },
  data: () => ({
    products: [],
    showOrder: false,
    showLocation: false,
    shopFinished: false, // modal que se muestra cuando se termina la compra, ideal que actualice la firestore
  }),
  methods: {
    irAArmar() {
      this.$router.push("/armar");
    },
    irACatalogo() {
      this.$router.push("/catalogo");
    },
    irAMerch() {
      this.$router.push("/merch");
    },
    buyCart() {
      store.dispatch("carrito/buyCart");
      this.shopFinished = true;
    },
    saveOrder() { // para ir a actualizar prop stock en firestore // cerrar compra y resetear carro
      console.log("carrito");
    },
    // showOrder() {
    //   console.log("carrito");
    // },
  },
};
</script>

<style>
.v-data-footer {
  display: none;
}
</style>
