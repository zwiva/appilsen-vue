<template>
  <div id="inspire">
    <div class="text-center">
      <v-card
        color="amber lighten-2"
        class="mx-auto dialog"
        elevation="8"
        max-width="300px"
        rounded
      >
        <!-- <v-layout column align-center justify-center> -->
        <div class="d-flex justify-center"
          style="
            background-color: white;
            width: 100%;
            height: 4em;
            align-items: center;
            font-size: 1.25em
          "
        >
          <h2>Inicia sesion</h2>
        </div>
        <div class="px-2">
          <v-form
            ref="form"
            @submit.prevent="iniciarSesion"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="signInForm.email"
              :rules="emailRules"
              label="Ingresa email"
              filled
              rounded
              dense
              class="pt-3"
            ></v-text-field>

            <v-text-field
              v-model="signInForm.password"
              :rules="passwordRules"
              label="Ingresa contraseña"
              type="password"
              filled
              rounded
              dense
            ></v-text-field>
          </v-form>
        </div>
        <v-btn
          rounded
          class="grey darken-2"
          large
          href="#"
          right
          type="submit"
          @click="iniciarSesion"
          dark
          >Ingresar</v-btn
        >
        <div class="pa-3 pt-4">
          <h2>
            <strong>
              {{ $store.getters["sesion/showAuthenticationStatus"] }}
            </strong>
          </h2>
        </div>
        <v-card-text>
          ¿No estas registrado? Registrate:
          <v-btn
            color="amber darken-2"
            class=""
            depressed
            large
            rounded
            dark
            @click="registrarNuevoUsuario"
            >Registrarse</v-btn
          >
        </v-card-text>
        <!-- </v-layout> -->
      </v-card>
    </div>

    <v-dialog v-model="registerForm" height="400" width="380">
      <v-sheet class="mx-auto">
        <v-card color="amber" amber elevation="8" shaped>
          <v-layout column align-center justify-center>
            <v-card-title color="black">
              <p>Ingresa tus datos para registrarte</p>
              <p>Debes estar registrado para comprar productos.</p>
              <v-divider class="mx-4 black"></v-divider>
            </v-card-title>
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
            <v-card-text>
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
            </v-card-text>
          </v-layout>
        </v-card>
      </v-sheet>
    </v-dialog>
  </div>
</template>

<script>
import store from "../../store";
export default {
  name: "LoginForm",
  data: () => ({
    valid: true,
    signInForm: { email: "", password: "" },
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
  components: {},

  methods: {
    iniciarSesion() {
      if (this.$refs.form.validate()) {
        store.dispatch("sesion/setCurrentUser", this.signInForm);
        store.dispatch("sesion/signInRegisteredUser", this.signInForm);
        store.dispatch("sesion/showAuthUser");
      }
      if (this.$store.state.sesion.user) {
        this.$emit("closeModal");
      }
    },
    registrarNuevoUsuario() {
      this.registerForm = true;
    },
    executeRegistration() {
      console.log("intento registro");
      store.dispatch("sesion/registerNewUser", this.register);
    },
    /*  reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }, */
  },
};
</script>
