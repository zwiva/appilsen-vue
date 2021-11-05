<template>
  <v-container>
    <ShopForm />
  </v-container>
</template>

<script>
import ShopForm from "../components/auth/shop/form/ShopForm.vue";
export default {
  name: "CreateBeer",
  components: { ShopForm },
  // data: () => ({
  //   // shopcart: false,
  // }),
};
</script>
