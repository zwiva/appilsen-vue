<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="6">
        <h2>Arma tu pilsen como quieras</h2>
        <p>
          Arma tu cerveza como siempre quisiste y disfrutala donde quieras. Ven
          a retirarla, la tendremos heladita para ti, y si te animas disfrutala
          en nuestro bar.
        </p>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-card flat>
          <v-form ref="form" @submit.prevent="submit">
            <v-container fluid>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Nombra tu creación"
                    :rules="rules.completedField"
                    v-model="formShop.name"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-select
                    label="Escoge el estilo"
                    v-model="formShop.style"
                    :rules="rules.selectedField"
                    :items="style"
                  >
                  </v-select>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-select
                    label="Escoge la malta"
                    :rules="rules.selectedField"
                    v-model="formShop.malt"
                    :items="malt"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    label="Escoge la levadura"
                    :rules="rules.selectedField"
                    v-model="formShop.yest"
                    :items="yest"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    label="Escoge el lúpulo"
                    :rules="rules.selectedField"
                    v-model="formShop.hop"
                    :items="hop"
                  >
                  </v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    label="Ingrediente adicional"
                    :rules="rules.selectedField"
                    v-model="formShop.additional"
                    :items="additional"
                  >
                  </v-select>
                </v-col>

                <v-col cols="12" sm="6">
                  <v-select
                    label="Escoge el formato"
                    :rules="rules.selectedField"
                    v-model="formShop.format"
                    :items="format"
                  >
                  </v-select>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Ingresa cantidad"
                    type="number"
                    min="0"
                    step="1"
                    :rules="rules.completedField"
                    v-model="formShop.quantity"
                  />
                </v-col>
              </v-row>
            </v-container>

            <div>
              <div class="d-block pa-2">
                <p cols="12">¿Qué quieres hacer con tu creacion?</p>
                <v-btn text @click="resetForm1">
                  Retirar <br />
                  en tienda
                </v-btn>
                <v-btn text @click="resetForm1">
                  Consumir <br />
                  en tienda
                </v-btn>
                <v-btn text @click="resetForm1"> Despacho </v-btn>
                <v-spacer></v-spacer>
                <div>
                  <p class="text-center" style="height: 200px">el mapa</p>
                </div>
                <!-- <v-btn
                :disabled="!formIsValid"
                text
                color="primary"
                type="submit"
              >
                Register
              </v-btn> -->
              </div>
            </div>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "shopform",
  data: () => ({
    formShop: {
      name: "",
      style: "",
      malt: "",
      yest: "",
      hop: "",
      additional: "",
      format: "",
      quantity: "",
    },
    rules: {
      completedField: [
        (val) => (val || "").length > 0 || "Por favor completar.",
      ],
      selectedField: [
        (val) => (val || "").length > 0 || "Por favor seleccionar.",
      ],
    },
    style: ["Lager", "Pale Ale", "Ipa", "Stout", "Bock"],
    malt: [
      "Pils, Lager",
      "Caramelo, Pils",
      "Pale, Cristal",
      "Tostada, Chocolate",
      "Caramunich",
    ],
    yest: [
      "Saflager",
      "Liberty bell",
      "Safale",
      "Ale Irish, English Ale",
      "Bavarian",
    ],
    hop: [
      "Spalt, Sterling, Ultra",
      "Cascade, Glacier",
      "Cascade, Mosaic, Citra",
      "East Kent, North Down",
      "Hallertauer, Magnummount",
    ],
    additional: ["Lupulo, Citda, Amarillo", "Pomelo", "Leche"],
    format: [
      "1 Litro",
      "2 Litros",
      "6 botellas 330 cc",
      "24 botellas 330 cc",
      "Barril 20 Litros",
      "Barril 50 Litros",
    ],
  }),

  methods: {
    resetForm2() {
      this.errorMessages = [];
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset();
      });
    },
    submit2() {
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true;

        this.$refs[f].validate(true);
      });
    },
    ///// form:1
    resetForm1() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    submit() {
      this.resetForm();
    },
  },
};
</script>

<style>
.prueba {
  background-color: rgb(52, 52, 52);
  color: white;
}
</style>
