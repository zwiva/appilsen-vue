<template>
  <div>
    <v-btn text depressed @click="showLoginForm">
      Iniciar Sesion
      <v-icon>mdi-login</v-icon>
    </v-btn>

    <v-dialog v-model="loginForm">
      <v-card>
        <v-card-title>Inicia sesion</v-card-title>
        <v-card-text>
          <LoginForm />
        </v-card-text>
      </v-card>
    </v-dialog>
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
</style>