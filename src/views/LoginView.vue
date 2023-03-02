<template>
  <div class="login">
    <h1>Login</h1>
    <form class="login-form" action="">
      <span class="label">Username</span>
      <input type="email" name="username" id="username" />
      <span class="label">Password</span>
      <input type="password" name="password" id="password" />
      <Button :label="'Sign In'" />
    </form>
  </div>
</template>

<script lang="ts">
import Button from "@/components/atoms/Button.vue";
export default {
  components: { Button },
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
}
</style>
