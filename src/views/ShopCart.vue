<template>
  <div class="content-grid mx-auto" width="90%">
    <div>
      <h2 class="ma-6 text-center title_section">Carrito Cervecero</h2>

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
              <v-btn
                class="zoom"
                elevation="2"
                dark
                color="gray"
                @click="buyCart()"
              >
                COMPRAR
              </v-btn>
            </div>

            <div v-else class="d-flex justify-center flex-wrap">
              <div class="ma-2">
                <v-btn class="zoom" dark elevation="2" @click="irAArmar()">
                  IR A ARMAR TU PILSEN</v-btn
                >
              </div>
              <div class="ma-2">
                <v-btn class="zoom" dark elevation="2" @click="irACatalogo()">
                  IR POR CERVEZAS</v-btn
                >
              </div>
              <div class="ma-2">
                <v-btn class="zoom" dark elevation="2" @click="irAMerch()">
                  IR POR ACCESORIOS
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-sheet>
      </v-card>
    </div>

    <v-dialog v-model="shopFinished" max-width="420px">
      <v-card class="mx-auto pa-4" max-width="420px">
        <div max-width="420px" class="pa-4">
          <h3 class="text-center">Resumen de pedido</h3>
          <div
            v-for="(pedido, index) in $store.state.carrito.carrito"
            :key="index"
            class="shop-detail"
          >
            <!-- <v-row> -->
            <v-col class="d-flex flex-column ma-2">
              <span class="text-small">Nombre: {{ pedido.nombre }}</span>
              <span class="text-small">Cantidad: {{ pedido.cantidad }}</span>
              <span class="text-small"
                >Pagar: ${{ pedido.precio * pedido.cantidad }}</span
              >
            </v-col>
            <!-- </v-row> -->
          </div>
          <div >
            <p class="text-small mb-0">
              <strong>Metodo de entrega:</strong>
              {{ $store.state.carrito.method }}
            </p>
            <p class="text-small">
              <strong>Dirección:</strong>
              {{ $store.state.carrito.finallocation }}
            </p>
          </div>
          <div class="text-center">
            <v-btn color="primary" @click="saveOrder">Cerrar</v-btn>
          </div>
          <!-- <v-btn color="primary" @click="showOrder = false">Cancelar</v-btn> -->
        </div>
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
      this.shopFinished = true;
    },
    saveOrder() {
      // para ir a actualizar prop stock en firestore // cerrar compra y resetear carro
      console.log("cierre carrito");
      store.dispatch("carrito/buyCart");
      this.shopFinished = false;
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
.text-small {
  font-size: 0.85em;
}
.shop-detail {
  background-color: rgb(234, 234, 234);
}
</style>
