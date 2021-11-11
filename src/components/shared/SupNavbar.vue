<template>
  <div>
    <v-app-bar color="black"  dark height="100px">
      <div class="d-flex align-center">
        <div id="supnav" >
          <!-- icono marca -->
          <v-img
            class="mr-1"
            src="../../assets/imgbeers/logoAppilsen.jpg"
            height="85px"
            width="85px"
          >
          </v-img>
          <v-spacer></v-spacer>
        </div>
      </div>
      <v-spacer></v-spacer>

       <v-img
            class="mr-1"
            src="../../assets/imgbeers/logoapp.jpg"
            height="6rem"
            max-width="350px"
            
          >
          </v-img>
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
