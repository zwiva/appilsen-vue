<template>
  <div id="inspire">
    <v-container>
      <div align-center justify-center class="text-center my-5">
        <v-card
          color="amber lighten-2"
          class="mx-auto dialog"
          elevation="8"
          max-width="400px"
          rounded
        >
          <v-layout column align-center justify-center>
            <div style="background-color: white; width: 100%">
              <v-card-title> Por favor inicia sesion </v-card-title>
            </div>
            <div class="ma-3 pt-6">
              <v-form
                ref="form"
                @submit.prevent="paraValidar"
                v-model="valid"
                lazy-validation
              >
                <v-col cols="12">
                  <v-text-field
                    v-model="signInForm.email"
                    :rules="emailRules"
                    label="Ingresa email"
                    filled
                    rounded
                    dense
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="signInForm.password"
                    :rules="passwordRules"
                    label="Ingresa contraseña"
                    type="password"
                    filled
                    rounded
                    dense
                  ></v-text-field
                ></v-col>
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
            <v-card-text>
              ¿No estas registrado? Registrate:

              <v-btn color="amber darken-2" class="ma-3" depressed large rounded dark
                >Registrarse</v-btn
              >
            </v-card-text>
          </v-layout>
        </v-card>
      </div>
    </v-container>
  </div>
</template>

<script>
import Firebase from "firebase";

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
    async iniciarSesion() {
      if (this.$refs.form.validate()) {
        try {
          console.log(this.signInForm);
          await Firebase.auth().signInWithEmailAndPassword(
            this.signInForm.email,
            this.signInForm.password
          );

          this.$store.dispatch(
            "sesion/configurarUsuario",
            Firebase.auth().currentUser
          );

          this.$emit("success");
          this.$emit("cerrarDialog", false);

        } catch (e) {
          console.error("no funciono el login");
        }

      }
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
