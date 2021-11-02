<template>
  <div id="app">
    <v-app id="inspire">
      <v-layout row wrap align-center justify-center>
        <v-sheet  class="mx-auto" height="400" width="380">
          <v-card color="amber" amber elevation="8" shaped>
            <v-container>
              <v-layout column align-center justify-center>
                <v-card-title color="black">
                  <v-text-title>Registrate </v-text-title>
                  <v-divider class="mx-4 black"></v-divider>
                </v-card-title>

                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-col cols="12">
                    <v-text-field
                      v-model="register.email"
                      :counter="10"
                      :rules="nameRules"
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
                    >Validar</v-btn
                  >
                </v-card-text>
              </v-layout>
            </v-container>
          </v-card>
        </v-sheet>
      </v-layout>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "register",
  data: () => ({
    register: { email: "", password: "" },
  }),
};
</script>

<style></style>
