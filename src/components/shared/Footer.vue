<template>
  <div>
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading" color="amber"
            >Conectate con nosotros en nuestras redes sociales!</strong
          >
          <v-spacer></v-spacer>

          <!-- <i class="fab fa-google-plus-g fa-1x text-white"> </i>

            <i class="fab fa-instagram fa-1x"> </i> -->

          <v-btn class="icons mx-4" v-for="icon in icons" :key="icon" icon>
            <v-icon class="icons" color="" size="24px" light>
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram"],
  }),
};
</script>

<style>
.icons {
  color: #ffc107;
}
</style>
