<template>
  <div>
    <v-btn text depressed @click="showLoginForm">
      Iniciar Sesion
      <v-icon>mdi-login</v-icon>
    </v-btn>
<v-container>
    <v-dialog  max-width="370" v-model="loginForm">
      <v-card >
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
