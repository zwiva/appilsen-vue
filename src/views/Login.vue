<template>
  <div id="login">
    <div v-if="login">
      <LoginForm @cerrarDialog="cerrarDialog"/>
    </div>
    <div v-else>
      <RegisterForm />
    </div>
  </div>
</template>

<script>
// import RegisterForm from '../components/unauth/RegisterForm.vue';
export default {
  name: "Login",
  components: {
    // RegisterForm,
    LoginForm: () => import("../components/unauth/LoginForm.vue"),
    RegisterForm: () => import("../components/unauth/RegisterForm.vue"),
  },
  data: () => ({
    login: true,
  }),

  methods: {
    cerrarDialog() {
     this.login = false;
    },
  }
};
</script>
