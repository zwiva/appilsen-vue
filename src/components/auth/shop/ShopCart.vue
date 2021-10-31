<template>
  <!-- <div class="prueba" style="display: flex; flex-direction: column ;place-items: center;"> -->
  <v-layout class="prueba">
    <div row>
      <h2>Carrito Cervecero</h2>

      <v-card class="justify-center">
        <h4>Aca va el carro de compras -> sera tabla resumen</h4>
         <pre>{{ $store.state.productos.cervezasCatalogo }}</pre> 

        <table>
          <img src="" alt="" />
          <p>price</p>
        </table>

        <v-col cols="12">
          <p>ancho completo</p>
        </v-col>
      </v-card>
    </div>
  </v-layout>
</template>

<script>
export default {
  name: "shopcart",
  props: { productos:
    { type: Object, required: true } 
    }
};
</script>
