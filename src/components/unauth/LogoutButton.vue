<template>
  <div>
    <!-- <template v-slot:activator="{ on, attrs }"> -->
    <v-btn text depressed dark @click="logOutSession">
      {{
        $store.state.session.user
          ? $store.state.session.user.email
          : "no existe"
      }}

      <v-icon>mdi-logout</v-icon>
    </v-btn>
    <!-- </template> -->
  </div>
</template>

<script>
// import store from "../../store";
export default {
  name: "LogoutButton",
};
</script>

<style>
</style>