<template>
  <div>
    <v-container grid-list-md>
      <v-col cols="12" md="4">
        <v-row>
          <v-card color="amber" class="suggestions mx-auto" max-width="280px">
            <v-img :src="sugerencia.imagen" height="280px" contain />
            <p><strong>Nombre cerveza:</strong> {{ sugerencia.nombre }}</p>
            <p><strong>Pais de origen:</strong> {{ sugerencia.pais }}</p>
            <p><strong>Estilo: </strong>{{ sugerencia.estilo }}</p>
            <p><strong>alcohol:</strong> {{ sugerencia.alcohol }}°</p>
            <p><strong>Formato: </strong>{{ sugerencia.formato }}</p>
            <p><strong>Precio: </strong>${{ sugerencia.precio }}</p>

            <v-card-actions>
              <v-btn @click="editDialog = true"
                ><v-icon> mdi-pencil</v-icon></v-btn
              >
              <v-btn @click="deleteDialog = true"
                ><v-icon>mdi-delete</v-icon></v-btn
              >
            </v-card-actions>
          </v-card>
        </v-row>
      </v-col>
    </v-container>

    <div>
      <v-dialog v-model="editDialog">
        <v-card>
          formulario editar, por props pasarle los parametros?
          <v-btn @click="editDialog = false">Editar</v-btn>
        </v-card>
      </v-dialog>
    </div>
    <div>
      <v-dialog v-model="deleteDialog">
        <v-card>
          modal de pregunta si quiere eliminar
          <v-btn @click="deleteSuggestion(sugerencia.id)">Si</v-btn>
          <v-btn @click="deleteDialog = false">No</v-btn>
        </v-card>
      </v-dialog>
    </div>
    <div>
      <v-dialog v-model="confirmDeleteDialog">
        <v-card>
          modal de confirmacion de borrado
          <v-btn @click="confirmDeleteDialog = false">Ok</v-btn>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import store from "../../../store";

export default {
  name: "SuggestionCard",

  data: () => ({
    editDialog: false,
    deleteDialog: false,
    confirmDeleteDialog: false,
  }),
  methods: {
    showDeleteConfirmation() {
      this.deleteDialog == false;
      this.confirmDeleteDialog = true;
    },

    deleteSuggestion(sugerenciaId) {
      store.dispatch("recomendaciones/deleteSuggestion", sugerenciaId);
      this.confirmDeleteDialog = true;
      this.deleteDialog = false;
    },
  },
  props: {
    sugerencia: { type: Object, require: true },
  },
};
</script>
<style scoped>
.suggestions p {
  margin: 0;
}
</style>
