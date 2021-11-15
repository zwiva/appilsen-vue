<template>
  <div class="content-grid mx-auto">
    <!-- Inicio sesion 2 -->
    <v-card color="black" dark class="mx-auto">
      <h1 class="title_section text-center">Bienvenid@ a Appilsen</h1>
      <div class="ma-5 text-center">
        <div class="d-flex flex-wrap justify-center mx-auto">
          <div class="d-flex flex-wrap justify-center">
            <v-card class="ma-4">
              <div class="background_1 pa-4">
                <strong class="ma-5 login_text">
                  Appilsen es una aplicacion donde puedes crear una cerveza
                  escogiendo los ingredientes que quieras, pudiendo seleccionar
                  el lugar donde quieras consumirla o retirarla.
                </strong>
              </div>
            </v-card>
            <v-card class="ma-4">
              <div class="background_2 pa-4">
                <strong class="ma-5 login_text">
                  Y si no se te da la creatividad... puedes comprar cervezas de
                  diversas marcas e igualmente consumirlas heladitas o llevarlas
                  a donde gustes. Revisa nuestro "CATALOGO".
                </strong>
              </div>
            </v-card>
          </div>
          <div class="d-flex flex-wrap justify-center">
            <v-card class="ma-4">
              <div class="background_3 pa-4">
                <strong class="ma-5 login_text">
                  Tambien contamos con una sección donde puedes comprar
                  accesorios y articulos para complementar tu experiencia.
                  Tenemos una amplia coleccion de vasos, tambien libros.
                </strong>
              </div>
            </v-card>
            <v-card class="ma-4">
              <div class="background_4 pa-4">
                <strong class="ma-5 login_text">
                  Si conoces alguna cerveza que no has podido encontrar en tus
                  tiendas habituales tenemos la seccion "RECOMIENDANOS" pára que
                  la indiques y la incluyamos en nuestro catálogo.
                </strong>
              </div>
            </v-card>
          </div>
        </div>
      </div>
      <div v-if="$store.state.sesion.user.email" class="mx-auto pb-6">
        <div class="ma-2 text-center">
          <h2>
            Ya puedes navegar
            <v-btn @click="goToHome">IR A INICIO</v-btn>
          </h2>
        </div>
      </div>
      <div v-else class="mx-auto pb-6">
        <div class="ma-2 text-center">
          <h2>
            Para continuar debes iniciar sesion:
            <v-btn @click="showLoginForm">INICIA SESION</v-btn>
          </h2>
          <!-- inicio de sesion -->
          <v-dialog max-width="350px" v-model="showLoginDialog">
            <v-card class="background-login rounded-xl">
            <LoginForm 
              @closeModal="closeLoginModal()"
              @openRegisterForm="openRegisterForm"
            />
            </v-Card>
          </v-dialog>
        </div>
        <div class="ma-2 text-center">
          <h2>
            Si no estas registrado, por favor registrate:
            <v-btn @click="showRegisterForm">REGISTRATE</v-btn>
          </h2>
          <!-- Registro -->
          <v-dialog max-width="350px" v-model="showRegisterDialog">
            <v-card class="background-login rounded-xl">
            <RegisterForm @closeRegisterForm="closeRegisterForm" />
            </v-card>
          </v-dialog>
        </div>
      </div>
    </v-card>
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
      this.showLoginDialog = true;
    },
    closeLoginModal() {
      this.showLoginDialog = false;
    },
    showRegisterForm() {
      this.showRegisterDialog = true;
    },
    openRegisterForm() {
      console.log("mjdkdkdsjd");
    },
    closeRegisterForm() {
      this.showRegisterDialog = false;
    },
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>
<style>
.login_text {
  font-size: 0.75em;
}
.background_1 {
  background-image: url("../assets/imgbeers/stout.jpg");
  max-width: 280px;
}
.background_2 {
  background-image: url("../assets/imgbeers/stout.jpg");
  max-width: 280px;
}
.background_3 {
  background-image: url("../assets/imgbeers/stout.jpg");
  max-width: 280px;
}
.background_4 {
  background-image: url("../assets/imgbeers/stout.jpg");
  max-width: 280px;
}

.background-login {
  background-image: url("../assets/backgrounds/beer-back.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  rotate: 180;
  /* opacity: 0.85;; */
}
</style>
