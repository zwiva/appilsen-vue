<template>
  <div>
    <v-app-bar color="black" dark>
      <div class="d-flex align-center">
        <div id="supnav">
          <!-- icono marca -->
          <v-toolbar-title>APPILSEN </v-toolbar-title>

          <v-spacer></v-spacer>
        </div>
      </div>
      <v-spacer></v-spacer>
      
       <v-dialog v-model="dialog" width="380" elevation="8" shaped>
    <template #activator="{ on }">
       <v-btn text-depressed>
        Cerrar sesion
        <v-icon right>mdi-logout</v-icon>
      </v-btn>

       <v-btn text depressed v-on="on">
           Inicia sesion
      <v-icon>mdi-login</v-icon>
      </v-btn>
     
    </template>
   
    <v-card>
        <v-card-title>Inicia sesion</v-card-title>
        <v-card-text>
            <LoginForm @success="dialog = false" />
        </v-card-text>
    </v-card>
    </v-dialog>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "SupNavbar",
  components: { 
    LoginForm: () => import("../unauth/LoginForm.vue"),
  },
  data: () => ({
        dialog: false,
    }),
};
</script>
