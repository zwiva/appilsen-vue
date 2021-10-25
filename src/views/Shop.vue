<template>
  <div>
    <!-- <div v-if="shopcart"> -->
  
      <ShopForm />
    <!-- </div> -->
    <!-- <div v-else> -->

      <ShopCart />
    <!-- </div> -->
  </div>
</template>

<script>
import ShopCart from "../components/auth/shop/ShopCart.vue";
import ShopForm from "../components/auth/shop/ShopForm.vue";
export default {
  name: "shop",
  components: { ShopCart, ShopForm },
  data: () => ({
    shopcart: false,
  }),
};
</script>

<style>
</style>