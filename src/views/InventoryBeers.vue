<template>
  <div>
    <!-- ACA SE EDITAN LAS CERVEZAS -->
    <div class="content-grid mx-auto">
      <h1 class="text-center">Inventario de cervezas</h1>
      <div class="ma-6 text-center">
        <p>
          Editor de inventario
          <v-btn color="info" class="ml-3" @click="showAddNewBeerDialog"
            >Agregar cervezas al catalogo</v-btn
          >
        </p>
      </div>
      <v-layout align-center justify-space-between>
        <v-row d-flex flex-wrap class="justify-center">
          <div
            v-for="beer in $store.state.productos.cervezasCatalogo"
            :key="beer.id"
          >
            <ExternalBeerEditorCard :beer="beer" />
          </div>
        </v-row>
      </v-layout>
    </div>

    <!-- dialogo para crear -->
    <v-dialog v-model="newExternalBeerDialog" persistent max-width="600px">
      <template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Agrega una cerveza</span>
          </v-card-title>
          <v-card-text>
            <v-form
              @submit.prevent="addNewExternalBeer"
              ref="form"
              lazy-validation
            >
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="newExternalBeer.nombre"
                    label="Nombre*"
                    :rules="[required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="newExternalBeer.precio"
                    label="Precio*"
                    :rules="[required]"
                    >$</v-text-field
                  >
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="newExternalBeer.estilo"
                    label="Estilo*"
                    :rules="[required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="newExternalBeer.alcohol"
                    type="number"
                    label="Alcohol*"
                    :rules="[required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="newExternalBeer.formato"
                    label="Formato*"
                    :rules="[required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="newExternalBeer.imagen"
                    label="Imagen*"
                    :rules="[required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="newExternalBeer.stock"
                    label="Stock*"
                    :rules="[required]"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>

            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue" text @click="cancelAddNewExternalBeer">
              Cancelar
            </v-btn>
            <v-btn color="primary " text @click="addNewExternalBeer">
              Agregar nueva
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

<script>
import store from "../store";
import ExternalBeerEditorCard from "../components/auth/shop/display/ExternalBeerEditorCard.vue";

export default {
  name: "InventoryBeers",
  components: { ExternalBeerEditorCard },
  data: () => ({
    newExternalBeerDialog: false,
    newExternalBeer: {
      nombre: "",
      precio: 0,
      estilo: "",
      alcohol: 0,
      formato: "",
      imagen: "",
      stock: 0,
    },
  }),
  mounted() {
    store.dispatch("productos/getAllexternalBeers");
    console.log("mounted");
  },
  methods: {
    // CREANDO
    showAddNewBeerDialog() {
      this.newExternalBeerDialog = true;
      console.log("dialogo agregar nueva cerveza externa");
    },
    addNewExternalBeer() {
      if (this.$refs.form.validate()) {
        console.log("hacer dispatch para agregar nueva cerveza externa, enviar objeto con data a la store");
        store.dispatch("productos/addNewExternalBeer", this.newExternalBeer);
      }
    },
    cancelAddNewExternalBeer() {
      this.newExternalBeerDialog = false;
      console.log("cierra dialogo");
    },   
    required(value) {
      return !!value || "Campo obligatorio, por favor ingresar credenciales.";
    },
  },
};
</script>
