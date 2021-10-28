<template>
  <div>
    <div>
      <h1 class="text-center">Catalogo de cervezas</h1>
      <p>
        Acá puedes agregar una o mas cervezas a tu pedido, son nuestras marcas
        amigas!:
      </p>
      <!-- v-if=true si usuario es ADMIN -->
      <v-btn color="info" @click="dialog = true">Agregar cervezas catalogo</v-btn>
      
      <v-layout align-center justify-space-between>
        <v-row d-flex flex-wrap class="justify-center">
          <div
            v-for="beer in $store.state.productos.cervezasCatalogo"
            :key="beer.id"
          >
            <ExternalCardBeer :beer="beer" />
          </div>
        </v-row>
      </v-layout>
    </div>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <!-- <v-row justify="center"> -->
      <template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Agrega una cerveza</span>
          </v-card-title>
          <v-card-text>
            <!-- <v-container> -->
            <v-form @submit.prevent="guardarCambios" ref="form" lazy-validation>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="recomendedBeer.nombre"
                    label="nombre"
                    :rules="[required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="recomendedBeer.precio"
                    label="Precio"
                    :rules="[required]"
                    >$</v-text-field
                  >
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="recomendedBeer.estilo"
                    label="Estilo"
                    :rules="[required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="recomendedBeer.alcohol"
                    type="number"
                    label="alcohol"
                    :rules="[required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="recomendedBeer.formato"
                    label="Formato"
                    :rules="[required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="recomendedBeer.imagen"
                    label="imagen"
                    :rules="[required]"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
            <!-- </v-container> -->
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue " text @click="dialog = false"> Cerrar </v-btn>
            <v-btn color="primary " text @click="guardarRecomendacion">
              Guardar recomendacion
            </v-btn>
          </v-card-actions>
          <!-- <v-btn color="primary" dark> Sugierenos cervezas </v-btn> -->
        </v-card>
      </template>
      <!-- </v-row> -->
    </v-dialog>
  </div>
</template>

<script>
import Firebase from "firebase";
import store from "../store";
import ExternalCardBeer from "../components/auth/ExternalCardBeer.vue";

export default {
  name: "ExternalBeers",
  components: { ExternalCardBeer },
  beforeRouteEnter(to, from, next) {
    store.dispatch("productos/getAllexternalBeers");
    next();
  },

  data: () => ({
    dialog: false,
    recomendedBeer: {
      nombre: "",
      precio: 0,
      estilo: "",
      alcohol: 0,
      formato: "",
      imagen: "",
    },
  }),

  mounted() {
    store.dispatch("productos/getAllexternalBeers");
    console.log("mounted");
  },
  methods: {
    guardarRecomendacion() {
      console.log("ejecuta recomendacion");
      if (this.$refs.form.validate()) {
        console.log("dentro del if ")
        Firebase.firestore()
          .collection("externalBeers")
          .add(this.recomendedBeer)
          .then(() => {
            console.log("prueba push a firesotore");
            store.dispatch("productos/getAllexternalBeers");
            // this.$router.push("/externalBeers");
          })
          .catch((error) => {
            console.log(error);
          });
      }
      this.dialog = false;
    },
    required(value) {
      return !!value || "Campo obligatorio, por favor ingresar credenciales.";
    },
  },
};
</script>
