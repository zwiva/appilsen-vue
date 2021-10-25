<template>
  <div>
    <v-container>
      <v-footer dark padless>
        <v-card class="flex" flat tile>
          <v-card-title>
            <strong class="subheading" color="amber"
              >Conectate con nosotros en nuestras redes sociales!</strong
            >
            <v-spacer></v-spacer>

            <v-btn x-large color="primary" dark
              ><i class="fab fa-google-plus-g fa-1x"> </i>
            </v-btn>
            <v-btn x-large color="primary" dark
              ><i class="fab fa-instagram fa-1x"></i>
            </v-btn>

            <!--   <v-btn 
        class="icons mx-4"
          v-for="icon in icons"
          :key="icon"
          icon
        >
           <v-icon 
          class="icons"
          color="primary"
          size="24px"
          dark>
             {{ icon }} 
          </v-icon>
        </v-btn> -->
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
    icons: ["mdi-facebook", "mdi-twitter", "mdi-instagram"],
  }),
};
</script>

<style>
.icons {
  color: #ffc107;
}
</style>