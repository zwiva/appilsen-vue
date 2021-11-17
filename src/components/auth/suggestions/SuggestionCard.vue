<template>
  <div>
    <v-card color="amber" class="mx-auto" outlined>
      <v-row>
        <v-col class="ma-4">
          <!-- <div class="text-overline mb-4">RECOMENDACION</div> -->

          <v-card-text class="py-0"
            ><strong>Marca: </strong>{{ sugerencia.marca }}</v-card-text
          >
          <v-card-text class="py-0"
            ><strong>Nombre cerveza:</strong>
            {{ sugerencia.nombre }}</v-card-text
          >
          <v-card-text class="py-0"
            ><strong>Pais de origen:</strong> {{ sugerencia.pais }}</v-card-text
          >
          <v-card-text class="py-0"
            ><strong>Estilo: </strong>{{ sugerencia.estilo }}</v-card-text
          >
          <v-card-text class="py-0"
            ><strong>Alcohol:</strong> {{ sugerencia.alcohol }}°</v-card-text
          >
          <v-card-text class="py-0"
            ><strong>Formato: </strong>{{ sugerencia.formato }}</v-card-text
          >
          <v-card-text class="py-0"
            ><strong>Precio: </strong>${{ sugerencia.precio }}</v-card-text
          >
          <div max-width="50%">
            <v-card-text class="py-0" max-width="200px"
              ><strong>Observaciones: </strong
              >{{ sugerencia.observaciones }}</v-card-text
            >
          </div>
          <v-card-text class="py-0"
            ><strong>Usuario: </strong
            >{{ sugerencia.usuarioemail }}</v-card-text
          >
        </v-col>

        <v-col class="mt-4">
          <v-card-actions class="">
            <v-spacer></v-spacer>
            <v-row>
              <v-col cols="12">
                <v-img
                  :src="sugerencia.imagen"
                  max-width="250px"
                  class="text-center"
                />
              </v-col>
            </v-row>
          </v-card-actions>
        </v-col>

        <v-col cols="12" class="text-center mb-4">
          <v-btn class="zoom" @click="showDialogEditSuggestion()"
            ><v-icon> mdi-pencil</v-icon></v-btn
          >
          <v-btn class="ml-3 zoom" @click="showDialogDeleteSuggestion()"
            ><v-icon>mdi-delete</v-icon></v-btn
          >
        </v-col>
      </v-row>
    </v-card>

    <!-- dialogo para editar  -->
    <div class="">
      <v-dialog v-model="editDialog" class="ma-6" max-width="800px">
        <v-card class="pa-6">
          <h3 class="text-center subtitle_section">Edita tu recomendacion:</h3>
          <v-form
            @submit.prevent="confirmEditSuggestion(sugerencia)"
            class="my-5"
            ref="form"
          >
            <v-row>
              <v-col cols="12" sm="6" class="fit_view">
                <v-text-field
                  v-model="sugerencia.marca"
                  label="Marca:"
                  :rules="[required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="fit_view">
                <v-text-field
                  v-model="sugerencia.nombre"
                  label="Nombre Cerveza:"
                  :rules="[required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="fit_view">
                <v-text-field
                  v-model="sugerencia.pais"
                  label="Pais origen:"
                  :rules="[required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="fit_view">
                <v-text-field
                  v-model="sugerencia.estilo"
                  label="Estilo:"
                  :rules="[required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="fit_view">
                <v-text-field
                  v-model="sugerencia.alcohol"
                  label="Alcohol:"
                  :rules="[required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="fit_view">
                <v-text-field
                  v-model="sugerencia.formato"
                  label="Formato:"
                  :rules="[required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="fit_view">
                <v-text-field
                  v-model="sugerencia.precio"
                  label="Precio:"
                  :rules="[required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="fit_view">
                <v-text-field
                  v-model="sugerencia.observaciones"
                  label="Observaciones:"
                  :rules="[required]"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="fit_view">
                <v-text-field
                  v-model="sugerencia.imagen"
                  label="Imagen:"
                  :rules="[required]"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="grey" dark @click="editDialog = false"
              >CANCELAR</v-btn
            >
            <v-btn color="gray" dark @click="confirmEditSuggestion(sugerencia)"
              >GUARDAR</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <!-- dialogo de aviso de edicion completada -->
    <div class="">
      <v-dialog v-model="editSuccessDialog" max-width="400px">
        <v-card class="pa-5">
          <div class="ma-4">
            <h3 class="ma-3 py-5 text-center">
              Recomendacion editada satisfactoriamente.
            </h3>
            <v-row class="justify-center py-5">
              <v-btn
                color="amber"
                class="zoom"
                @click="editSuccessDialog = false"
                >Ok</v-btn
              >
            </v-row>
          </div>
        </v-card>
      </v-dialog>
    </div>

    <!-- dialogo de pregunta para eliminar  -->
    <div class="delete_dialog">
      <v-dialog v-model="deleteDialog" max-width="400px">
        <v-card class="pa-5 delete_dialog">
          <div class="ma-4">
            <h3 class="ma-3 py-5 text-center">
              ¿Deseas eliminar esta recomendación?
            </h3>
            <v-row class="justify-center py-5">
              <v-btn class="zoom" dark @click="deleteDialog = false">No</v-btn>
              <v-btn
                class="mr-3 zoom"
                color="amber"
                dark
                @click="deleteSuggestion(sugerencia.id)"
                >Si</v-btn
              >
            </v-row>
          </div>
        </v-card>
      </v-dialog>
    </div>

    <!-- dialogo de aviso de eliminacion  -->
    <div class="delete_dialog">
      <v-dialog v-model="deleteSuccesDialog" max-width="400px">
        <v-card class="pa-5 delete_dialog">
          <div class="ma-4">
            <h3 class="ma-3 py-5 text-center">
              Recomendacion eliminada satisfactoriamente.
            </h3>
            <v-row class="justify-center py-5">
              <v-btn
                color="amber"
                class="zoom"
                @click="deleteSuccesDialog = false"
                >Ok</v-btn
              >
            </v-row>
          </div>
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
    deleteDialog: false,
    editDialog: false,
    deleteSuccesDialog: false,
    editSuccessDialog: false,
  }),
  methods: {
    showDialogDeleteSuggestion() {
      this.deleteDialog = true;
    },
    deleteSuggestion(sugerenciaId) {
      this.deleteDialog = false;
      store.dispatch("recomendaciones/deleteSuggestion", sugerenciaId);
      this.deleteSuccesDialog = true;
    },
    showDialogEditSuggestion() {
      this.editDialog = true;
    },
    confirmEditSuggestion(sugerencia) {
      this.editDialog = false;
      store.dispatch("recomendaciones/editSuggestion", sugerencia);
      this.editSuccessDialog = true;
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
