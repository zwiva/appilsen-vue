<template>
  <div class="prueba">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="6" md="6">
          <h2>Arma tu pilsen como quieras</h2>
          <p>
            Arma tu cerveza como siempre quisiste y disfrutala donde quieras.
            Ven a retirarla, la tendremos heladita para ti, y si te animas
            disfrutala en nuestro bar.
          </p>
        </v-col>

        <v-col cols="12" sm="6" md="6">
          <!-- formulario 1 -->
          <v-card flat>
            <v-form ref="form" @submit.prevent="submit">
              <v-container fluid>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-label for="">Nombre de tu cerveza</v-label>
                    <v-text-field
                      v-model="form.first"
                      :rules="rules.name"
                      label="Nombre de tu cerveza"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-label for="">Marca de tu Appilsen</v-label>
                    <v-select
                      v-model="form.favoriteAnimal"
                      :items="items"
                      outlined
                    ></v-select>
                    <!-- <v-text-field
                      v-model="form.last"
                      :rules="rules.name"
                      color="blue darken-2"
                      label="Last name"
                      required
                    ></v-text-field> -->
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-label for="">Estilo de tu cerveza</v-label>
                    <v-select :items="items" label="Outlined style" outlined>
                    </v-select>

                    <!-- <v-select
                      v-model="form.favoriteAnimal"
                      :items="animals"
                      :rules="rules.animal"
                      color="pink"
                      label="Favorite animal"
                      required
                    ></v-select> -->
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-label for="">Ingredientes</v-label>
                    <v-select :items="items" label="Outlined style" outlined>
                    </v-select>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-label for="">Cantidad</v-label>
                    <input
                      type="number"
                      min="0"
                      step="1"
                      style="background-color: #e7e5fc"
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
                    <p class="text-center" style="height: 300px">el mapa</p>
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
  </div>
</template>


<script>
export default {
  name: "shopform",
  data: () => ({
    items: ["Foo", "Bar", "Fizz", "Buzz"],

    form: {
      first: "",
      favoriteAnimal: "",
    },
    rules: {
      name: [(val) => (val || "").length > 0 || "This field is requireddddd"],
      animal: [(val) => (val || "").length > 0 || "This field is requiredeeee"],
    },
    animals: ["Dog", "Cat", "Rabbit", "Turtle", "Snake"],
    conditions: false,
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