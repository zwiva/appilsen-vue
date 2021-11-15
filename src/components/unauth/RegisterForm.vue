<template>
  <v-sheet class="mx-auto">
    <v-card color="amber" amber elevation="8" shaped>
      <v-layout column align-center justify-center>
        <!-- ENCABEZADO -->
        <v-card-title color="black">
          <p>Ingresa tus datos para registrarte, debes estar registrado para comprar productos.</p>
          <v-divider class="mx-4 black"></v-divider>
        </v-card-title>

        <!-- FORMULARIO REGISTRO -->
        <div>
          <v-form ref="form" lazy-validation>
            <v-col cols="12">
              <v-text-field
                v-model="register.email"
                :rules="emailRules"
                label="email"
                filled
                rounded
                dense
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="register.password"
                :rules="passwordRules"
                label="password"
                type="password"
                filled
                rounded
                dense
                required
              ></v-text-field
            ></v-col>
          </v-form>

          <v-btn
            rounded
            class="blue-grey darken-2"
            large
            href="#"
            right
            @click="executeRegistration"
            dark
            >Registrate</v-btn
          >
        </div>
      </v-layout>
    </v-card>
  </v-sheet>
</template>

<script>
import store from "../../store";
export default {
  name: "Registerform",
  data: () => ({
    emailRules: [
      (v) => !!v || "* Campo requerido.",
      (v) => /.+@.+\..+/.test(v) || "* Formato email no válido.",
    ],
    passwordRules: [(v) => !!v || "* Password es requerido"],
    registerForm: false,
    register: {
      email: "",
      password: "",
    },
  }),
  methods: {
    executeRegistration() {
      store.dispatch("sesion/registerNewUser", this.register);
    },
  },
};
</script>

<style></style>
