<template>
  <v-container>
    <div class="content-grid mx-auto">
      <h2 class="ma-6 text-center title_section">Accesorios cerveceros</h2>
      <p class="my-6">
        Puedes agregar accesorios a tu pedido, fueron escogidos para que sean la
        mejor compañía de tus cervezas:
      </p>

      <v-layout align-center justify-space-between>
        <v-row d-flex flex-wrap class="justify-center my-3">
          <div
            v-for="merch in $store.state.productos.accesorios"
            :key="merch.id"
          >
            <!-- <v-col cols="12" md="4"> -->
            <MerchAndAccessoriesCard :merch="merch" />
            <!-- </v-col> -->
          </div>
        </v-row>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
import store from "../store";
import MerchAndAccessoriesCard from "../components/auth/shop/catalogs/MerchAndAccessoriesCard.vue";
export default {
  name: "Merch",
  components: { MerchAndAccessoriesCard },
  data: () => ({
    Merch: [],
  }),
  async mounted() {
    await store.dispatch("productos/getAllMerchAndAccessories");
  },
};
</script>
