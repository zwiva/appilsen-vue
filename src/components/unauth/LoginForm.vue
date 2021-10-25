<template>
  <div id="inspire">
    <v-container>
      <div align-center justify-center class="text-center my-5">
        <v-sheet
          :rounded="rounded"
          class="mx-auto"
          height="400"
          max-width="380"
        >
          <v-card color="amber" amber elevation="8" shaped>
            <v-container>
              <v-layout column align-center justify-center>
                <v-card-title color="black">
                  <v-flex>
                    <v-btn
                      color="blue-grey darken-2"
                      depressed
                      large
                      rounded
                      dark
                      >Ingresar
                    </v-btn>

                    <v-btn
                      color="blue-grey darken-2"
                      depressed
                      large
                      rounded
                      dark
                      >Registrarse</v-btn
                    >
                  </v-flex>
                  <v-divider class="mx-4 black"></v-divider>
                </v-card-title>

                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-col cols="12">
                    <v-text-field
                      v-model="name"
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
                      v-model="email"
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
                    round
                    class="blue-grey darken-2"
                    large
                    href="#"
                    right
                    @click="validate"
                    dark
                    >Ingresar</v-btn
                  >
                </v-card-text>
              </v-layout>
            </v-container>
          </v-card>
        </v-sheet>
        <div class="pt-5 my-5">
          <v-btn large color="light-blue darken-4" dark>
            <i class="fab fa-facebook fa-2x"> </i>
            Ingresar con Facebook
          </v-btn>
        </div>
        <!-- botones para iniciar sesion con fb o g+ -->
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data: () => ({
    valid: true,
    name: "",
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
    validate() {
      this.$refs.form.validate();
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
<<<<<<< HEAD

<style></style>
=======
>>>>>>> shop
