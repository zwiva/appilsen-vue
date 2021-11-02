<template>
  <div id="inspire">
    <v-container>
      <div align-center justify-center class="text-center my-5">
        <v-card
          color="amber lighten-2"
          class="mx-auto"
          elevation="8"
          
        >
          <v-layout column align-center justify-center>
            <v-card-title color="amber">
              Registrate o Inicia sesion

              <v-divider class="mx-4 black"></v-divider>
            </v-card-title>

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
                  label="E-mail o Usuario"
                  filled
                  rounded
                  dense
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="signInForm.password"
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
                type="submit"
                @click="paraValidar"
                dark
                >Ingresar</v-btn
              >
              <v-btn color="blue-grey darken-2" depressed large rounded dark
                >Registrarse</v-btn
              >
            </v-card-text>
          </v-layout>
        </v-card>
        <!--  boton real de facebook pero no se ve  -->
        <!-- <div id="fb-root">
          <div
            class="fb-login-button"
            data-width=""
            data-size="medium"
            data-button-type="login_with"
            data-layout="rounded"
            data-auto-logout-link="false"
            data-use-continue-as="true"
          >aaaaaaa</div>
        </div> -->

        <!-- <div class="pt-5 my-5">
          <v-btn large color="light-blue darken-4" dark>
            <i class="fab fa-facebook fa-2x"> </i>
            Ingresar con Facebook
          </v-btn>
        </div> -->
        <facebook-login
          class="button"
          appId="326022817735322"
          @login="getUserData"
          @logout="onLogout"
          @get-initial-status="getUserData"
        >
        </facebook-login>
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
    // nameRules: [(v) => !!v || "Name is required"],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [
      (v) => !!v || "Password is required",
      // (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),
  components: {},

  methods: {
    async paraValidar() {
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
        } catch (e) {
          console.error("no funco el login");
        }
      }
    },
    /* reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      }, */
  },
};
</script>
