<template>
  <div>
    <v-app-bar color="black" dark>
      <div class="d-flex align-center">
        <div id="supnav">
          <!-- icono marca -->
          <v-toolbar-title>APPILSEN </v-toolbar-title>

          <v-spacer></v-spacer>
        </div>
      </div>
      <v-spacer></v-spacer>
      <!-- 
      <v-dialog v-model="dialog" width="380" elevation="8" shaped>
        <template #activator="{ on }">
          <v-btn text depressed v-on="on">
            Inicia sesion
            <v-icon>mdi-login</v-icon>
          </v-btn>
          <v-btn text-depressed>
            Cerrar sesion
            <v-icon right>mdi-logout</v-icon>
          </v-btn>
        </template>

        
      </v-dialog> -->

      <LoginButton />
    </v-app-bar>
  </div>
</template>

<script>
import LoginButton from "../unauth/LoginButton.vue";
export default {
  name: "SupNavbar",
  components: {
    LoginButton,
  },
  data: () => ({
    dialog: false,
  }),
};
</script>
