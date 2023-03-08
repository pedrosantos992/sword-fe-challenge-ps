<template>
  <div class="my-account">
    <h1>My Account</h1>
    <div class="my-account-form">
      <span class="label">Username</span>
      <input
        type="email"
        name="username"
        id="username"
        disabled
        :value="userEmail"
      />
    </div>
    <Button @click="handleSignout" :label="'Sign out'" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import Button from "../components/atoms/Button.vue";
import router from "../router";

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

const handleSignout = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>

<style scoped>
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
.my-account-form input:disabled {
  color: var(--sw-black);
  cursor: not-allowed;
}
.my-account-form .label {
  margin-right: auto;
}

@media (max-width: 500px) {
  .my-account h1 {
    font-size: 30px;
    margin-top: 40px;
  }
}
</style>
