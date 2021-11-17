<template>
  <div class="text-center pa-4">
    <v-card
      color="amber lighten-2"
      class="mx-auto dialog"
      elevation="8"
      max-width="300px"
      filled
      rounded
      dense
    >
      <v-layout column align-center justify-center>
        <!-- ENCABEZADO -->
        <div
          class="d-flex justify-center"
          style="
            background-color: white;
            width: 100%;
            height: 4em;
            align-items: center;
            font-size: 1.25em;
          "
        >
          <h3 class="text-center">Registrate:</h3>
        </div>

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
          <div class="text-center">
            <!-- <p>¿No estas registrado? Registrate:</p> -->
            <v-btn
              class="blue-grey darken-2 ma-3"
              href="#"
              depressed
              large
              rounded
              dark
              @click="executeRegistration"
              >Registrate</v-btn
            >
          </div>
        </div>
        <!-- Confirmacion de registro -->
        <v-dialog
          max-width="350px"
          class="pa-4"
          v-model="showRegisterDialogConfirmation"
        >
          <v-card
            color=""
            class="text-center mx-auto dialog pa-5"
            elevation="8"
            max-width="350px"
          >
            <h2 class="mark py-3">Usuario registrado exitosamente</h2>
            <div class="text-center">
              <v-btn class="amber zoom" @click="confirmRegistration" light
                >Ok</v-btn
              >
            </div>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-card>
  </div>
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
    showRegisterDialogConfirmation: false,
  }),
  methods: {
    executeRegistration() {
      store.dispatch("sesion/registerNewUser", this.register);
      this.$emit("closeRegisterForm");
      this.showRegisterDialogConfirmation = true;
    },
    confirmRegistration() {
      store.dispatch("sesion/setCurrentUser", this.register);
      store.dispatch("sesion/signInRegisteredUser", this.register);
      this.showRegisterDialogConfirmation = false;
      this.$emit("closeRegistrationModal");
    },
  },
};
</script>
