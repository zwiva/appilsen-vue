<template>
  <div>
    <div row>
      <h2>Carrito Cervecero</h2>
      <v-card class="justify-center">
        <!-- <pre>{{ $store.state.carrito.carrito }}</pre> -->
        <v-col cols="12">
          <ShopTable :carrito="$store.state.carrito.carrito" with="80%" />
        </v-col>
        <div v-if="$store.state.carrito.carrito.length > 0">
          <SetLocalization />
        </div>
      </v-card>
    </div>

    <v-dialog v-model="showOrder">
      <v-card>
        <h3>Mostrar dialogo con resumen de pedido</h3>
        <v-btn color="primary" @click="saveOrder">Confirmar</v-btn>
        <v-btn color="primary" @click="showOrder = false">Cancelar</v-btn>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import SetLocalization from '../components/auth/localization/SetLocalization.vue';
import ShopTable from "../components/auth/shop/cart/ShopTable.vue";
export default {
  name: "ShopCart",
  components: { ShopTable, SetLocalization },
  data: () => ({
    products: [],
    showOrder: false,
    showLocation: false,
  }),
  methods: {
    saveOrder() {
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