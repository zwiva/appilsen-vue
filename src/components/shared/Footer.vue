<template>
  <div>
    <v-footer dark padless>
      <v-card class="flex" wrap flat tile>
        <div class="mx-auto">
          <v-card-title class="justify-center">
            <strong class="subheading" color="amber"
              >Conéctate con nosotros en nuestras redes sociales:</strong
            >
            <v-spacer></v-spacer>
            <div class="text-center">
              <v-btn class="icons mx-3" v-for="icon in icons" :key="icon" icon>
                <v-icon class="icons" color="#ffc107" size="40px" light>
                  {{ icon }}
                </v-icon>
              </v-btn>
            </div>
          </v-card-title>
        </div>
        <div>
          <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
          </v-card-text>
        </div>
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
v-icon .icons {
  color: #ffc107;
}
.subheading {
  font-size: 0.8em;
}
</style>
