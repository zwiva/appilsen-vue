<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Sugierenos cervezas
        </v-btn>

        <v-card>
          <v-card-title>
            <span class="text-h5">Agrega una cerveza</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-form
                  @submit.prevent="guardarCambios"
                  ref="form"
                  v-model="valid"
                  lazy-validation
                >
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="beer.nombre"
                      label="nombre"
                      :rules="[required]"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="beer.precio"
                      label="Precio"
                      :rules="[required]"
                      required
                      >$</v-text-field
                    >
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      v-model="beer.estilo"
                      label="Estilo"
                      :rules="[required]"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      v-model="beer.alcohol"
                      type="number"
                      label="alcohol"
                      :rules="[required]"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      v-model="beer.formato"
                      label="Formato"
                      :rules="[required]"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      v-model="beer.imagen"
                      label="imagen"
                      :rules="[required]"
                      required
                    ></v-text-field>
                  </v-col>
                </v-form>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-row>
</template>

<script>
import Firebase from "firebase";

export default {
  data: () => ({
    dialog: false,
    beer: {
      nombre: "",
      precio: 0,
      estilo: "",
      alcohol: 0,
      formato: "",
      imagen: "",
    },
  }),

  props: {
    showDialog: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    guardarCambios() {
      if (this.$refs.form.validate()) {
        Firebase.firestore()
          .collection("externalBeers")
          .add(this.beer)
          .then(() => {
            this.loading = false;
            this.$router.push("/externalBeers");
          })
          .catch(() => {
            this.loading = false;
          });
      }
    },
    required(v) {
      return !!v || "Este campo es obligatorio";
    },
  },
};
</script>

<style></style>
