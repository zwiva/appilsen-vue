<template>
  <!-- <div class="prueba" style="display: flex; flex-direction: column ;place-items: center;"> -->
  <div>
    <div v-for="(product, index) in products" :key="index">
      <!-- <pre>{{product}}</pre> -->
      <!-- <img src="" alt="" /> -->
      <p>Producto | Precio | Cantidad </p>
      <p>{{product.name}} | {{product.price}} | {{product.quantity}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "shoptable",
  props: {
    products: { type: Array, required: true },
  },
};
</script>
