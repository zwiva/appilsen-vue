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
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "SupNavbar",
};
</script>
