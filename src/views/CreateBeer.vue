<template>
  <v-container class="content-grid mx-auto">
        <h2 class="text-center title_section ">Arma tu pilsen como quieras</h2>
    <div>
    <ShopForm />
    </div>
  </v-container>
</template>

<script>
import ShopForm from "../components/auth/shop/cart/ShopForm.vue";
export default {
  name: "CreateBeer",
  components: { ShopForm },
  // data: () => ({
  //   // shopcart: false,
  // }),
};
</script>
