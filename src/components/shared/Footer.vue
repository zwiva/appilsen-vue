<template>
<div>
      <h1>este el footer</h1>
  <v-container>    
  <v-footer 
   dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile>
      <v-card-title class="amber">
        <strong class="subheading" color="amber">Conectate con nosotros en nuestras redes sociales!</strong>

        <v-spacer></v-spacer>

        <v-btn 
        color="amber"
        class="icons mx-4"
          v-for="icon in icons"
          :key="icon"
          icon
        >
          <v-icon
          color="amber"
          size="24px">
             {{ icon }} 
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-container>
</div>
</template>

<script>

export default {
    name: "Footer",
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-instagram',
      ],
    }),

};
</script>

<style>

.icons {
    color: #FFC107;
}

</style>