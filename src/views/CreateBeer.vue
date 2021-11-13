<template>
  <v-container class="content-grid mx-auto">
    <ShopForm />
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
