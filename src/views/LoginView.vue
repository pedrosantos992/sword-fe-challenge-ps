<template>
  <div class="login">
    <h1>Login</h1>
    <form class="login-form" @submit.prevent="login">
      <span class="label">Username</span>
      <input
        v-model="login_form.email"
        type="email"
        name="username"
        id="username"
      />
      <span class="label">Password</span>
      <input
        v-model="login_form.password"
        type="password"
        name="password"
        id="password"
      />
      <Button :label="'Sign In'" />
    </form>
    <p class="create-account-label">
      If you do not have an account, please <a href="/register">register</a>!
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";
import Button from "@/components/atoms/Button.vue";

const login_form = ref({
  email: "" as string,
  password: "" as string,
});
const store = useAuthStore();

const login = async () => {
  store.signIn(login_form.value);
};
</script>

<style>
.login {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  max-width: 400px;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
}
.login h1 {
  margin-bottom: 20px;
}
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.login-form input {
  width: 100%;
  margin-bottom: 16px;
  height: 40px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 4px;
  letter-spacing: 1px;
}
.login-form .label {
  margin-right: auto;
}
.create-account-label {
  margin-top: 1rem;
}
.create-account-label a {
  text-decoration: underline;
}
.create-account-label a:hover {
  background: unset;
}

@media (max-width: 500px) {
  .login h1 {
    font-size: 30px;
    margin-top: 40px;
  }
}
</style>
