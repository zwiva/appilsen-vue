<template>
  <div>
    <v-container>
      <v-card elevation="7" class="pa-3 mx-auto" max-width="280px">
        <v-img class="zoom" :src="beer.imagen" max-width="280px" contain />
        <v-list-item>
          <v-list-item-content>
            <div class="my-4">
              <v-list-item-subtitle
                >Nombre: {{ beer.nombre }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >Estilo: {{ beer.estilo }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >Precio: ${{ beer.precio }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >Alcohol: {{ beer.alcohol }}°</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >Formato: {{ beer.formato }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >Stock: {{ beer.stock }}</v-list-item-subtitle
              >
            </div>
            <v-card-actions class="d-flex justify-center">
              <v-btn color="gray" dark @click="showModalEditExternalBeer()"
                ><v-icon>mdi-pencil</v-icon></v-btn
              >
              <v-btn color="gray" dark @click="showModalDeleteExternalBeer()"
                ><v-icon>mdi-delete</v-icon></v-btn
              >
            </v-card-actions>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-container>

    <!-- BORRAR -->
    <!-- dialogo confirmacion borrar -->
    <v-dialog v-model="showDeleteExternalBeer" persistent max-width="600px">
      <v-card class="pa-5 delete_dialog">
        <p>Desea eliminar este producto</p>
        <v-btn @click="deleteExternalBeer(beer.id)">Si</v-btn>
        <v-btn @click="showDeleteExternalBeer = false">No</v-btn>
      </v-card>
    </v-dialog>

    <!-- dialogo borrado exitosa -->
    <v-dialog v-model="externalBeerDeleted" persistent max-width="600px">
      <p>Producto eliminado exitosamente</p>
      <v-btn @click="!externalBeerDeleted">Ok</v-btn>
    </v-dialog>

    <!-- EDITAR -->
    <!-- dialogo para editar -->
    <v-dialog v-model="showEditExternalBeerForm" persistent max-width="600px">
      <EditExternalBeerForm
        :beer="beer"
        @cancelEdition="closeEditionDialog"
        @completeEdition="closeEditionDialog"
      />
    </v-dialog>

    <!-- dialogo edicion exitosa -->
    <v-dialog v-model="externalBeerEdited" persistent max-width="600px">
      <p>Producto editado exitosamente</p>
      <v-btn @click="externalBeerEdited = false"></v-btn>
    </v-dialog>

    <!-- <div class="delete_dialog">
      <v-dialog v-model="deleteDialog" max-width="400px">
        <v-card class="pa-5 delete_dialog">
          <div class="ma-4">
            <h3 class="ma-3 py-5 text-center">
              ¿Deseas eliminar esta recomendación?
            </h3>
            <v-row class="justify-center py-5">
              <v-btn
                class="mr-3 zoom"
                color="amber"
                dark
                @click="deleteSuggestion(sugerencia.id)"
                >Si</v-btn
              >
              <v-btn class="zoom" dark @click="deleteDialog = false">No</v-btn>
            </v-row>
          </div>
        </v-card>
      </v-dialog>
    </div> -->
  </div>
</template>

<script>
import store from "../../../store";
import EditExternalBeerForm from "@/components/auth/shop/EditExternalBeerForm.vue";

export default {
  name: "EditExternalBeerCard",
  components: { EditExternalBeerForm },
  data: () => ({
    showEditExternalBeerForm: false,
    showDeleteExternalBeer: false,
    externalBeerDeleted: false,
    externalBeerEdited: false,
  }),
  props: {
    beer: { type: Object, require: true },
  },
  methods: {
    // ELIMINAR
    showModalDeleteExternalBeer() {
      this.showDeleteExternalBeer = true;
    },

    deleteExternalBeer(beerId) {
      store.dispatch("productos/deleteExternalBeer", beerId);
      this.externalBeerDeleted = true;
    },
    // EDITAR
    showModalEditExternalBeer() {
      this.showEditExternalBeerForm = true;
    },
    editExternalBeer(beer) {
      this.showEditExternalBeerForm = false;
      store.dispatch("productos/editExternalBeer", beer);
      this.externalBeerEdited = true;
    },
    closeEditionDialog(value) {
      this.showEditExternalBeerForm = value;
    },
  },
};
</script>

<style>
.zoom {
  transition: transform 0.5s;
}
.zoom:hover {
  transform: scale(1.1);
}
</style>
