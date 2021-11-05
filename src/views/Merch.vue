<template>
  <v-container>
    <div class="content-grid mx-auto">
      <h1 class="ma-6 text-center">Accesorios cerveceros</h1>
      <p class="my-6">
        Puedes agregar accesorios a tu pedido, fueron escogidos para que sean la
        mejor compañía de tus cervezas:
      </p>
      <v-layout align-center justify-space-between>
        <v-row d-flex flex-wrap class="justify-center">
          <!-- <v-col cols="12" md="4"> -->
          <div
            v-for="merch in $store.state.productos.accesorios"
            :key="merch.id"
          >
            <MerchAndAccessories :merch="merch" />
          </div>
          <!-- </v-col> -->
        </v-row>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
import store from "../store";
import MerchAndAccessories from "../components/auth/shop/catalogs/MerchAndAccessories.vue";

export default {
  name: "Merch",
  components: { MerchAndAccessories },
  data: () => ({
    Merch: [],
  }),
  mounted() {
    store.dispatch("productos/getAllMerchAndAccessories");
    console.log("mounted");
  },
};
</script>
