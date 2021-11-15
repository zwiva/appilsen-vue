<template>
  <div class="content-grid mx-auto">
    <!-- Inicio sesion 2 -->
    <v-card color="black" dark>
      <h1 class="title_section text-center">Bienvenid@ a Appilsen</h1>
      <div class="ma-5 text-center">

        <v-row>
          <v-col cols="12" md="6">

            <v-card class="ma-4">
              <v-col>
                <v-img src="../assets/imgbeers/stout.jpg" width="150px" />
                <p class="ma-5">
                  Appilsen es una aplicacion donde puedes crear una cerveza
                  escogiendo los ingredientes que quieras, pudiendo seleccionar
                  el lugar donde quieras consumirla o retirarla.
                </p>
              </v-col>
            </v-card>

            <v-card class="ma-4">
              <v-col>
                <v-img src="../assets/imgbeers/stout.jpg" width="150px" />
                <p class="ma-5">
                  Y si no se te da la creatividad... puedes comprar cervezas de
                  diversas marcas e igualmente consumirlas o llevarlas a donde
                  gustes.
                </p>
              </v-col>
            </v-card>

          </v-col>

          <v-col cols="12" md="6">

            <v-card class="ma-4">
              <v-col>
                <v-img src="../assets/imgbeers/stout.jpg" width="150px" />
                <p class="ma-5">
                  Tambien contamos con una sección donde puedes comprar
                  accesorios y articulos para complementar tu experiencia.
                  Tenemos una amplia coleccion de vasos.
                </p>
              </v-col>
            </v-card>

            <v-card class="ma-4">
              <v-col>
                <v-img src="../assets/imgbeers/stout.jpg" width="150px" />
                <p class="ma-5">
                  Si conoces alguna cerveza que no has podido encontrar
                  en tus tiendas habituales tenemos la seccion "RECOMIENDANOS"
                  pára que la indiques y la incluyamos en nuestro catálogo.
                </p>
              </v-col>
            </v-card>

          </v-col>
        </v-row>

      </div>
    </v-card>

    <div style="max-width: 600px" class="mx-auto">
      <div class="ma-6 text-center">
        <h2>Para continuar debes iniciar sesion:</h2>
        <v-btn @click="showLoginForm">INICIA SESION</v-btn>
        <v-dialog v-model="showLoginDialog">
          <LoginForm />
        </v-dialog>
      </div>
      <div class="ma-6 text-center">
        <h2>Si no estas registrado, por favor registrate:</h2>
        <v-btn @click="showRegisterForm">REGISTRATE</v-btn>
        <!-- Registro -->
        <v-dialog v-model="showRegisterDialog">
          <RegisterForm />
        </v-dialog>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  components: {
    LoginForm: () => import("../components/unauth/LoginForm.vue"),
    RegisterForm: () => import("../components/unauth/RegisterForm.vue"),
  },
  data: () => ({
    showLoginDialog: false,
    showRegisterDialog: false,
  }),
  methods: {
    showLoginForm() {
      console.log("mostrarndo formulario registro");
      this.showLoginDialog = true;
    },
    showRegisterForm() {
      console.log("mostrarndo formulario registro");
      this.showRegisterDialog = true;
    },
  },
};
</script>
