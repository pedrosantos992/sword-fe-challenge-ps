<template>
  <div class="my-account">
    <h1>My Account</h1>
    <div class="my-account-form">
      <span class="label">Username</span>
      <input type="email" name="username" id="username" :value="userEmail" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const userEmail = ref({});
let auth: any;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userEmail.value = user.email!;
    }
  });
});
</script>

<style scoped>
@media (min-width: 1024px) {
  .my-account {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    max-width: 400px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }
  .my-account h1 {
    margin-bottom: 20px;
  }
  .my-account-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .my-account-form input {
    width: 100%;
    margin-bottom: 16px;
    height: 40px;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 4px;
    letter-spacing: 1px;
  }
  .my-account-form .label {
    margin-right: auto;
  }
}
</style>
