<template>
  <div>
    <v-btn text depressed @click="showLoginForm">
      Iniciar Sesion
      <v-icon>mdi-login</v-icon>
    </v-btn>
<v-container >
    <v-dialog  max-width="350" v-model="loginForm">
      <v-card class="background-login rounded-xl" >
        <v-card-title></v-card-title>
        <v-card-text>
          <LoginForm />
        </v-card-text>
      </v-card>
    </v-dialog>
</v-container>
  </div>
</template>

<script>
export default {
  name: "LoginButton",
  data: () => ({
    loginForm: false,
  }),
  components: {
    LoginForm: () => import("../unauth/LoginForm.vue"),
  },
  methods: {
    showLoginForm() {
      console.log("muestra formulario");
      this.loginForm = true;
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
