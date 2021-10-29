<template>
  <div id="inspire">
    <v-container>
      <div align-center justify-center class="text-center my-5">
        <v-card
          color="amber lighten-2"
          class="mx-auto"
          height="400"
          max-width="380"
          elevation="8"
          shaped
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
                  v-model="form"
                  :counter="10"
                  :rules="nameRules"
                  label="E-mail o Usuario"
                  filled
                  rounded
                  dense
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="form"
                  :rules="emailRules"
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
                @click="validate"
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

          <!-- <div class="fb-login-button" data-width="" data-size="medium" 
          data-button-type="login_with" data-layout="rounded" 
          data-auto-logout-link="false" data-use-continue-as="true"></div>  -->

       <div class="pt-5 my-5">
          <v-btn large color="light-blue darken-4" dark>
            <i class="fab fa-facebook fa-2x"> </i>
            Ingresar con Facebook
          </v-btn>
        </div>  
      </div>
    </v-container>
  </div>
</template>

<script>
 
/* import Firebase from "firebase";  */

export default {
  name: "LoginForm",
  data: () => ({
    valid: true,
    name: "",
    signInForm: { email: "", password: "" },

    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

   methods: {
  /*   async paraValidar() {
     if (this.$refs.form.validate()) {
       
       try {
         await Firebase.auth().
         signInWithEmailAndPassword
         (this.form, this.form);

         this.$store.dispatch("sesion/configurarUsuario",
         Firebase.auth().currentUser);

         this.$emit("success");
       }catch (e) {
         console.error("no funco el login");
       }
     } 



   }  */
    /* reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      }, */
  },
};
</script>
