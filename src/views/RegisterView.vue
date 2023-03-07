<template>
  <div class="register">
    <h1>Register</h1>
    <form class="register-form" @submit.prevent="register">
      <span class="label">Username</span>
      <input
        v-model="register_form.email"
        type="email"
        name="username"
        id="username"
      />
      <span class="label">Password</span>
      <input
        v-model="register_form.password"
        type="password"
        name="password"
        id="password"
      />
      <span class="label">Confirm Password</span>
      <input
        v-model="register_form.confirmPassword"
        type="password"
        name="confirm-password"
        id="confirm-password"
      />
      <Button :label="'Register'" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";
import Button from "@/components/atoms/Button.vue";

const register_form = ref({
  email: "" as string,
  password: "" as string,
  confirmPassword: "" as string,
});
const store = useAuthStore();

const register = async () => {
  store.register(register_form.value);
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .register {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    max-width: 400px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }
  .register h1 {
    margin-bottom: 20px;
  }
  .register-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .register-form input {
    width: 100%;
    margin-bottom: 16px;
    height: 40px;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 4px;
    letter-spacing: 1px;
  }
  .register-form .label {
    margin-right: auto;
  }
}
</style>
