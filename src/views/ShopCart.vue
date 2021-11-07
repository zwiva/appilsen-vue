<template>
  <div>
    <div row>
      <h2>Carrito Cervecero</h2>
      <v-card class="justify-center">
        <!-- <pre>{{ $store.state.carrito.carrito }}</pre> -->
        <v-col cols="12">
          <ShopTable :carrito="$store.state.carrito.carrito" with="80%" />
        </v-col>
      </v-card>
    </div>
  </div>
</template>
<script>
import ShopTable from "../components/auth/shop/cart/ShopTable.vue";
export default {
  name: "ShopCart",
  components: { ShopTable },
  data: () => ({
    products: [],
  }),
  methods: {},
};
</script>

<style>
.v-data-footer {
  display: none;
}
</style>