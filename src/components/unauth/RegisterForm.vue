<template>
  <v-sheet class="mx-auto">
    <v-card color="amber" amber elevation="8" shaped>
      <v-layout column align-center justify-center>
        <!-- ENCABEZADO -->
        <v-card-title color="black">
          <p>Ingresa tus datos para registrarte:</p>
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
        <!-- Confirmacion de registro -->
        <v-dialog v-model="showRegisterDialogConfirmation">
          <v-card>
            <p>Usuario registrado exitosamente</p>
            <v-btn @click="confirmRegistration">Ok</v-btn>
          </v-card>
        </v-dialog>
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
      // store.dispatch("sesion/signInRegisteredUser", this.register);
      // store.dispatch("sesion/showAuthUser");
      // inicio de sesion
      this.showRegisterDialogConfirmation = false;
      // this.$router.push("/");
    },
  },
};
</script>

<style></style>
