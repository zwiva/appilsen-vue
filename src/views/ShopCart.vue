<template>
  <div>
      <div row>
        <h2>Carrito Cervecero</h2>

        <v-card class="justify-center">
          <!-- <h4>Aca va el carro de compras -> sera tabla resumen</h4> -->

          <!--  <pre>{{ $store.state.shopCart.cervezasCatalogo }}</pre> -->
          <v-col cols="12">
          <ShopTable :products="products" with="80%"/>
          </v-col>
        </v-card>
      </div>
  </div>
</template>

<script>
import ShopTable from "../components/auth/shop/display/ShopTable.vue";
export default {
  name: "ShopCart",
  components: { ShopTable },
  data: () => ({
    products: [{
      name: "Cerveza 1",
      quantity: 1,
      price: 1000
    }]
  }),
  methods: {
    
  },

};
</script>
