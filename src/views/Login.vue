<template>
  <div>
    <LoginForm />
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {
    LoginForm: () => import("../components/unauth/LoginForm.vue"),
  },
};
</script>

<style></style>
