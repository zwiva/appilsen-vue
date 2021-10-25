<template>
  <div>
    <v-app-bar color="rgb(52, 52, 52)" dark class="d-flex justify-space-around">
      <div class="d-flex align-center">
        <div id="nav" class="ma-4">
          <router-link class="mx-3" to="/login">Login</router-link> |
          <router-link class="mx-3" to="/">Home</router-link> |
          <router-link class="mx-3" to="/armar">Armar</router-link> |
          <router-link class="mx-3" to="/nuestras">Inspírate</router-link> |
          <router-link class="mx-3" to="/otras">+Opciones Beber</router-link> |
          <router-link class="mx-3" to="/social">Social</router-link> |
          <router-link class="mx-3" to="/carrito">Carrito</router-link>
        </div>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
