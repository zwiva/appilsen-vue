<template>
  <div>
    <v-container>
      <v-card
        elevation="7"
        class="pa-3 mx-auto"
        max-width="280px"
        color="amber"
      >
        <v-list-item>
          <v-list-item-content>
            <v-img :src="sugerencia.imagen" height="280px" contain />
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <div>
              <v-list-item-title
                ><strong>Marca: </strong
                >{{ sugerencia.marca }}</v-list-item-title
              >
              <v-list-item-title
                ><strong>Nombre cerveza:</strong>
                {{ sugerencia.nombre }}</v-list-item-title
              >
              <v-list-item-title
                ><strong>Pais de origen:</strong>
                {{ sugerencia.pais }}</v-list-item-title
              >
              <v-list-item-title
                ><strong>Estilo: </strong
                >{{ sugerencia.estilo }}</v-list-item-title
              >
              <v-list-item-title
                ><strong>alcohol:</strong>
                {{ sugerencia.alcohol }}°</v-list-item-title
              >
              <v-list-item-title
                ><strong>Formato: </strong
                >{{ sugerencia.formato }}</v-list-item-title
              >
              <v-list-item-title
                ><strong>Precio: </strong>${{
                  sugerencia.precio
                }}</v-list-item-title
              >
              <v-list-item-title
                ><strong>Observaciones </strong
                >{{ sugerencia.observaciones }}</v-list-item-title
              >
            </div>

            <v-card-actions class="d-flex justify-center">
              <v-btn @click="editarSuggestion(sugerencia)"
                ><v-icon> mdi-pencil</v-icon></v-btn
              >
              <v-btn @click="deleteDialog = true"
                ><v-icon>mdi-delete</v-icon></v-btn
              >
            </v-card-actions>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-container>

    <v-dialog v-model="editDialog" class="ma-6" max-width="800px">
      <v-card class="pa-6">
        <v-card-title>
          <h1>Edita tu recomendacion:</h1>
        </v-card-title>
        <v-form
          @submit.prevent="editSuggestion(sugerencia)"
          class="my-5"
          ref="form"
        >
          <v-row>
            <v-col cols="12" sm="6" class="fit_view">
              <v-text-field
                :disabled="loading"
                v-model="sugerencia.nombre"
                label="Nombre Cerveza:"
                :rules="[required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="fit_view">
              <v-text-field
                :disabled="loading"
                v-model="sugerencia.marca"
                label="Marca:"
                :rules="[required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="fit_view">
              <v-text-field
                :disabled="loading"
                v-model="sugerencia.pais"
                label="Pais origen:"
                :rules="[required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="fit_view">
              <v-text-field
                :disabled="loading"
                v-model="sugerencia.estilo"
                label="Estilo:"
                :rules="[required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="fit_view">
              <v-text-field
                :disabled="loading"
                v-model="sugerencia.formato"
                label="Formato:"
                :rules="[required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="fit_view">
              <v-text-field
                :disabled="loading"
                v-model="sugerencia.precio"
                label="Precio:"
                :rules="[required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="fit_view">
              <v-text-field
                :disabled="loading"
                v-model="sugerencia.observaciones"
                label="Observaciones:"
                :rules="[required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" class="fit_view">
              <v-text-field
                :disabled="loading"
                v-model="sugerencia.imagen"
                label="Imagen:"
                :rules="[required]"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
        <v-btn @click="editDialog = false">Editar</v-btn>
      </v-card>
    </v-dialog>

    <div>
      <v-dialog v-model="deleteDialog" max-width="380px" class="flex">
        <v-card elevation="7" rounded class="text-center">
          <h2 class="text-center">Estas seguro?</h2>

          <v-btn
            color="amber"
            class="align-self-center zoom ma-1"
            @click="deleteSuggestion(sugerencia.id)"
            >Si</v-btn
          >
          <v-btn
            color="amber"
            class="align-self-center zoom ma-1"
            @click="deleteDialog = false"
            >No</v-btn
          >
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
    loading: false,
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
    editarSuggestion(sugerencia) {
      console.log("probando editar", sugerencia);
      this.editDialog = true;
    },

    editSuggestion(sugerencia) {
      store.dispatch("recomendaciones/editSuggestion", sugerencia);
      this.editDialog = false;
    },

    required(value) {
      return !!value || "no dejar campo en blanco";
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

.zoom {
  transition: transform 0.5s;
}
.zoom:hover {
  transform: scale(1.1);
}
</style>
