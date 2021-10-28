<template>
  <div>
    <h1>Este es para la merca</h1>
    <v-layout align-center justify-space-between>
      <v-row d-flex flex-wrap class="justify-center">
        <!-- <v-col cols="12" md="4"> -->
        <div v-for="merch in $store.state.productos.accesorios" :key="merch.id">
          <MerchAndAccessories :merch="merch" />
        </div>
        <!-- </v-col> -->
      </v-row>
    </v-layout>
  </div>
</template>

<script>
import store from "../store";
import MerchAndAccessories from "../components/auth/shop/MerchAndAccessories.vue";

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

<style>
</style>