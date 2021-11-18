<template>
  <div>
    <!-- ACA SE EDITAN LAS CERVEZAS -->
    <div class="content-grid mx-auto">
      <h2 class="ma-6 text-center title_section">Inventario de cervezas</h2>
      <div class="ma-6 text-center">
        <p>
          Edita tu inventario, puedes agregar, editar o eliminar cervezas:
          <v-btn color="primary" class="ml-3 zoom" @click="showAddNewBeerDialog"
            >Agregar nueva</v-btn
          >
        </p>
      </div>
      <v-layout align-center justify-space-between>
        <v-row d-flex flex-wrap class="justify-center my-3">
          <div
            v-for="beer in $store.state.productos.cervezasCatalogo"
            :key="beer.id"
          >
            <EditExternalBeerCard :beer="beer" />
          </div>
        </v-row>
      </v-layout>
    </div>
    <!-- dialogo para crear -->
    <v-dialog v-model="newExternalBeerDialog" max-width="600px">
      <template>
        <v-card elevation="7" class="pa-3">
          <v-card-title>
            <span class="text-h5">Agregar cerveza</span>
          </v-card-title>
          <v-card-text>
            <v-form
              @submit.prevent="addNewExternalBeer"
              ref="form"
              lazy-validation
            >
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="newExternalBeer.nombre"
                    label="Nombre*"
                    :rules="[required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="newExternalBeer.precio"
                    label="Precio*"
                    :rules="[required]"
                    >$</v-text-field
                  >
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="newExternalBeer.estilo"
                    label="Estilo*"
                    :rules="[required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="newExternalBeer.alcohol"
                    type="number"
                    label="Alcohol*"
                    :rules="[required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="newExternalBeer.formato"
                    label="Formato*"
                    :rules="[required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="newExternalBeer.imagen"
                    label="Imagen*"
                    :rules="[required]"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="newExternalBeer.stock"
                    label="Stock*"
                    :rules="[required]"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
            <!-- <small>*indicates required field</small> -->
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="grey" dark @click="cancelAddNewExternalBeer">
              Cancelar
            </v-btn>
            <v-btn color="gray" dark @click="addNewExternalBeer">
              Agregar nueva
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
    <v-dialog v-model="confirmAddition" max-width="320px">
      <v-card class="pa-5 delete_dialog">
        <h3 class="pa-3">Producto agregado exitosamente</h3>
        <v-row class="pa-3 justify-center justify-space-around">
          <v-btn color="amber" @click="afterAddition">Ok</v-btn>
        </v-row>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import store from "../store";
import EditExternalBeerCard from "../components/auth/shop/EditExternalBeerCard.vue";
export default {
  name: "Inventory",
  components: { EditExternalBeerCard },
  data: () => ({
    newExternalBeerDialog: false,
    newExternalBeer: {
      nombre: "",
      precio: 0,
      estilo: "",
      alcohol: 0,
      formato: "",
      imagen:
        "https://sleepinggiantbrewing.ca/site-content/uploads/2019/01/beer-club-e1605742197844.png",
      stock: 0,
    },
    confirmAddition: false,
  }),
  async mounted() {
    await store.dispatch("productos/getAllexternalBeers");
  },
  methods: {
    // CREANDO
    showAddNewBeerDialog() {
      this.newExternalBeerDialog = true;
    },
    async addNewExternalBeer() {
      if (this.$refs.form.validate()) {
        await store.dispatch(
          "productos/addNewExternalBeer",
          this.newExternalBeer
        );
      }
      this.newExternalBeerDialog = false;
      this.confirmAddition = true;
    },
    afterAddition() {
      this.confirmAddition = false;
    },
    cancelAddNewExternalBeer() {
      this.newExternalBeerDialog = false;
    },
    required(value) {
      return !!value || "Campo obligatorio, por favor ingresar credenciales.";
    },
  },
};
</script>
