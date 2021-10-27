<template>
  <div>
    <h1>Este es para la merca</h1>
     <v-layout align-center justify-space-between>
      <div v-for="merch in $store.state.accesorios.accesorios" :key="merch.id">
        <MerchAndAccessories :merch="merch" />
      </div>
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
    store.dispatch("accesorios/getAllMerchAndAccessories");
    console.log("mounted");
  },
};
</script>

<style>
</style>