<template>
  <v-footer dark padless>
    <v-card class="flex" wrap flat tile>
      <v-container>
        <v-row class="justify-center mx-auto pa-5">
          <v-card-title class="justify-center non-break-word">
            <strong class="subheading" color="amber"
              >Conéctate con nosotros en nuestras redes sociales:</strong
            >
          </v-card-title>
          <div class="text-center">
            <v-btn class="icons mx-3" v-for="icon in icons" :key="icon" icon>
              <v-icon class="icons" color="#ffc107" size="40px" light>
                {{ icon }}
              </v-icon>
            </v-btn>
          </div>
        </v-row>
        <div>
          <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </div>
      </v-container>
    </v-card>
  </v-footer>
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
  text-align: center;
  padding: auto;
}
.subheading {
  font-size: 0.8em;
}
.non-break-word {
  word-break: normal;
}
</style>
