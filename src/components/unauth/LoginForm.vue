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
          <h2>Inicia sesion</h2>
        </div>
        <!-- FORMULARIO -->
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
        </div>
        <!-- STATUS INGRESO -->
        <div class="pa-3 pt-4">
          <h2>
            <strong>
              {{ $store.getters["sesion/showAuthenticationStatus"] }}
            </strong>
          </h2>
        </div>
        <!-- SOLICITUD REGISTRO -->
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
      </v-card>
    </div>
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
      console.log("click en boton desde fomrulario login");

      this.$emit("closeModal");
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
