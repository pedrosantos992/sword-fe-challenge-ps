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

<script lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";
import Button from "@/components/atoms/Button.vue";
export default {
  components: { Button },
  setup() {
    const login_form = ref({
      email: "" as string,
      password: "" as string,
    });
    const store = useAuthStore();

    const login = async () => {
      store.signIn(login_form.value);
    };
    return { login_form, login };
  },
};
</script>

<style>
@media (min-width: 1024px) {
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
}
</style>
