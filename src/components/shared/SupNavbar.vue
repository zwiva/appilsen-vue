<template>
  <div>
    <v-app-bar color="black" dark height="100px">
      <div class="d-flex align-center">
        <div id="supnav">
          <!-- icono marca -->
          <v-img
            class="mr-1"
            src="../../assets/imgbeers/logoAppilsen.jpg"
            width="4.5em"
            max-width="85px"
          >
          </v-img>
          <v-spacer></v-spacer>
        </div>
      </div>
      <v-spacer></v-spacer>
      <v-img
        class="mr-1"
        src="../../assets/imgbeers/logoapp.jpg"
        width="6rem"
        max-width="300px"
      >
      </v-img>
      <v-spacer></v-spacer>
      <!-- boton sesion activa -->
      <div v-if="$store.state.sesion.user">
        <v-btn text depressed dark @click="showLogOutModal()">
          {{
            $store.state.sesion.user.email
              ? $store.state.sesion.user.email
              : "no existe"
          }}
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </div>
      <!-- boton sin sesion iniciada -->
      <div v-else>
        <v-btn text depressed @click="showLoginForm()">
          Inicia sesion
          <v-icon>mdi-login</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <!-- formulario de inicio de sesion -->
    <v-dialog max-width="350" v-model="loginForm">
      <v-container>
        <v-card class="background-login rounded-xl">
          <v-card-title></v-card-title>
          <v-card-text>
            <LoginForm @closeModal="closeLoginModal()" />
          </v-card-text>
        </v-card>
      </v-container>
    </v-dialog>

    <!-- ----------------- -->
    <!-- falta -->
    <!-- dialogo que avise inicio de sesion exitosa -->
    <!-- ----------------- -->

    <!-- dialogo para confirmar cierre de sesion -->
    <v-dialog v-model="signOutDialog" width="300">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">Atención:</v-card-title>
        <v-card-text class="mt-5">Esta cerrando su sesión.</v-card-text>
        <v-divider></v-divider>
        <v-card d-flex flex-wrap class="pa-4 text-right">
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="stayInSession()">
            No, me quedo.
          </v-btn>
          <v-btn color="primary" text @click="confirmLogOutSession()">
            Si, acepto.
          </v-btn>
        </v-card>
      </v-card>
    </v-dialog>

    <!-- ----------------- -->
    <!-- falta -->
    <!-- dialogo con formulario de registro -->
    <!-- dialogo que avise creacion de usuario -->
    <!-- diálogo que avise inicio de sesion -->
    <!-- ----------------- -->
  </div>
</template>

<script>
import store from "../../store";
export default {
  name: "SupNavbar",
  components: {
    LoginForm: () => import("../unauth/LoginForm.vue"),
  },
  data: () => ({
    signOutDialog: false,
    loginForm: false,
  }),
  methods: {
    // inicio sesion
    showLoginForm() {
      console.log("muestra formulario");
      this.loginForm = true;
    },
    closeLoginModal() {
      this.loginForm = false;
    },
    // cierre sesion
    showLogOutModal() {
      this.signOutDialog = true;
    },
    stayInSession() {
      this.signOutDialog = false; // se queda en sesion
    },
    confirmLogOutSession() {
      // cierra sesion con firebase
      store.dispatch("sesion/signOut");
      this.signOutDialog = false;
    },
  },
};
</script>
<style>
.background-login {
  background-image: url("../../assets/backgrounds/beer-back.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  rotate: 180;
  /* opacity: 0.85;; */
}
</style>
